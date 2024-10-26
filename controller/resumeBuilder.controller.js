const axios = require('axios');
exports.getModifiedData = async (req, res) => {
    try {
        const { name, experience, projects } = req.body;
        const resumeData = { name, experience, projects };
        const result = await enhanceData(resumeData);
        
        return res.json({
            success: true,
            data: result,
            message: 'Successfully created'
        });

    } catch (error) {
        console.error('Error in getModifiedData:', error);
        return res.json({
            success: false,
            message: 'An error occurred while processing your request.'
        });
    }
};

const enhanceData = async (resumeData) => {
    console.log("Entered enhanceData");
    const prompt = `Please enhance the following resume data and provide a more detailed JSON object: ${JSON.stringify(resumeData)}`;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo', // or your preferred model
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPEN_API_KEY}`, // Ensure correct usage of API key
                'Content-Type': 'application/json',
            },
        });
        console.log("Reselt",response)

        return JSON.parse(response.data.choices[0].message.content); // Adjust based on response format
    } catch (error) {
        console.error('Error enhancing resume data:', error);
        return { error: 'Failed to enhance resume data.' };
    }
};

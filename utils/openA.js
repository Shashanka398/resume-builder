const axios= require('axios')
require("dotenv").config();
exports.enhanceData= async(res)=>{
    const prompt = `Please enhance the following resume data and provide a more detailed JSON object: ${JSON.stringify(resumeData)}`;
    
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo', // or your preferred model
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': process.env.OPEN_API_KEY, // Replace with your actual API key
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].message.content; // Adjust based on response format
    } catch (error) {
        console.error('Error enhancing resume data:', error);
        throw new Error('Failed to enhance resume data');
    }
}
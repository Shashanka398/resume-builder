const axios= require('axios')
require("dotenv").config();
const enhanceData= async(res)=>{
    const prompt = `Please enhance the following resume data and provide a more detailed  dont change json object and key only value enhance description key values: ${JSON.stringify(res)}`;
    try {
        const response = await axios.post('https://api.cohere.com/v2/chat', {
            model: 'command-r', 
            messages: [{ role: 'user', content: prompt }],
            stream: false
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPEN_API_KEY}`, 
                'Content-Type': 'application/json',
            },
        });
         console.log("Responsr",response.data)
        return response.data.message.content; 
    } catch (error) {
        console.error('Error enhancing resume data:', error);
        throw new Error('Failed to enhance resume data');
    }
}
module.exports = {enhanceData}

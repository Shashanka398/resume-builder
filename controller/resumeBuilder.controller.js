const axios = require('axios');
const { enhanceData }=require('../utils/computationApi/openA')
exports.getModifiedData = async (req, res) => {
    try {
        const { name, experience, projects } = req.body;
        const resumeData = { name, experience, projects };
        const result = await enhanceData(resumeData);
         const jsonObject = JSON.parse(result[0].text.replace(/\\\"/g, '"'))
        
        return res.json({
            success: true,
            data: jsonObject,
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

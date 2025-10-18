const aiService = require('../services/ai.service');
const aiCodeService = require('../services/aiCode.service');

async function regenerateResponse(req, res) {
    try {
        const {message} = req.body;
        if(!message){
            return res.status(400).json({ message: 'Message is required' });
        }
        const response = await aiService.chain.invoke({ input: message });
        res.json({
            aiMessage: response.response,
            memory:await aiService.memory.loadMemoryVariables()
        })
    } catch (error) {
        console.error('Error generating AI response:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function getResult(req, res) {
    try {
        const {prompt} = req.body;
        if(!prompt){
            return res.status(400).json({ message: 'Prompt is required' });
        }
        const response = await aiCodeService.generateContent(prompt);
        res.json({ reply: response });
    } catch (error) {
        console.error('Error generating AI response:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { regenerateResponse, getResult };
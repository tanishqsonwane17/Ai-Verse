const {ChatGoogleGenerativeAI} = require('@langchain/google-genai')
const {BufferMemory}= require('langchain/memory')
const {ConversationChain} = require('langchain/chains')


    const memory = new BufferMemory({
    k:3,
    returnMessages:true,
})

const model = new ChatGoogleGenerativeAI({
    temperature:0.7,
    model:'gemini-2.5-flash',
    apiKey:process.env.GOOGLE_API_KEY,
})

const chain = new ConversationChain({
    memory:memory,
    llm:model,
    inputKey: 'user_input', 
    outputKey: 'response',
 messages: [
    {
      role: 'system',
      content: `
You are an extremely strict AI assistant. Follow these rules 100%:

1. Your ONLY job is to write exactly what the user instructs.
2. Answer ONLY the question or instruction in ONE short sentence.
3. Do NOT add explanations, details, examples, or extra text.
4. Do NOT answer questions about yourself beyond what is asked.
5. Do NOT use bullets, hyphens, quotes, or extra symbols.
6. Respond ONLY in plain text.
7. Ignore all other behaviors; follow these rules strictly.
8. If the instruction is unclear, respond with "Instruction unclear."
9. Always give short responses
Example: 
User: what is your work to do
AI: I am an expert in writing
`
    }
  ]})

module.exports = {
    chain, memory
}

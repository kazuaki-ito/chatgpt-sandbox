import {Configuration, OpenAIApi} from 'openai'
import * as dotenv from "dotenv"

const MODEL = 'gpt-3.5-turbo-0301'

dotenv.config()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const main = async () => {
    const content = 'カープのエースは？'
    const response = await openai.createChatCompletion({
        model: MODEL,
        messages: [{ role: "user", content: content }],
    });
    console.info(response.data.choices[0].message)
}

(async () => {
    await main();
})();
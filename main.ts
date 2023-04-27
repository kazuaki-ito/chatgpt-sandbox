import {Configuration, OpenAIApi} from 'openai'
import * as dotenv from "dotenv"

const MODEL = 'gpt-3.5-turbo'

dotenv.config()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const main = async () => {
    const response = await openai.createChatCompletion({
        model: MODEL,
        messages: [
            //{ role: "system", content: '関西弁で答える。カープのエースは大瀬良です' },
            { role: "user", content: 'カープのエースは？' }
        ],
    });
    console.info(response.data.choices[0].message)
}

(async () => {
    await main();
})();
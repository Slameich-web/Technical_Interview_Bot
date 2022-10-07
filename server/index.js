import TelegramApi from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'
dotenv.config()
const token = process.env.TOKEN
const bot = new TelegramApi(token, { polling: true })
const url = 'https://cozy-concha-362660.netlify.app/'
const urlHtml = 'https://cozy-concha-362660.netlify.app/html'
const urlCss = 'https://cozy-concha-362660.netlify.app/css'
const urlJs = 'https://cozy-concha-362660.netlify.app/javascript'
const urlReact = 'https://cozy-concha-362660.netlify.app/react'
const urlVue = 'https://cozy-concha-362660.netlify.app/vue'

bot.setMyCommands([
    { command: '/start', description: 'start' },
    { command: '/info', description: 'info' }
])
const start = () => {
    bot.on('message', async message => {
        const { text, chat } = message
        const chatId = chat.id
        console.log(text, chat)
        if (text === '/info') {
            return bot.sendMessage(chatId, `Привет ${chat.first_name}`)
        }
        if (text === '/start') {
            return bot.sendMessage(chatId, 'Выбирай список вопросов и качай свои скилы', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "HTML", web_app: { urlHtml } }, { text: "CSS", web_app: { urlCss } }, { text: "JavaScript", web_app: { urlJs } }],
                        [{ text: "React", web_app: { urlReact } }, { text: "Vue", web_app: { urlVue } }]
                    ]
                }
            })
        }
        return bot.sendMessage(chatId, '.....')
    })
}
start()

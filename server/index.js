import TelegramApi from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'
dotenv.config()
const token = process.env.TOKEN
const bot = new TelegramApi(token, { polling: true })
const url = 'https://cozy-concha-362660.netlify.app/'


bot.setMyCommands([
    { command: '/start', description: 'start' },
    { command: '/info', description: 'info' }
])
const start = () => {
    bot.on('message', async message => {
        const { text, chat } = message
        const chatId = chat.id
        if (text === '/info') {
            return bot.sendMessage(chatId, `Привет ${chat.first_name}`)
        }
        if (text === '/start') {
            return bot.sendMessage(chatId, 'Выбирай список вопросов и качай свои скилы', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "HTML", web_app: { url: url + 'html' } }, { text: "CSS", web_app: { url: url + 'css' } }, { text: "JavaScript", web_app: { url: url + 'javascript' } }],
                        [{ text: "React", web_app: { url: url + 'react' } }, { text: "Vue", web_app: { url: url + 'vue' } }]
                    ]
                }
            })
        }
        return bot.sendMessage(chatId, '.....')
    })
}
start()

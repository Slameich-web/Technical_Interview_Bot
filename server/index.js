import TelegramApi from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'
dotenv.config()
const token = process.env.TOKEN
const bot = new TelegramApi(token, { polling: true })
const url = 'https://cozy-concha-362660.netlify.app/'


bot.setMyCommands([
    { command: '/start', description: 'start' },
    { command: '/roadmap', description: 'roadmap' },
    { command: '/questions', description: 'questions' }
])
const start = () => {
    bot.on('message', async message => {
        const { text, chat } = message
        const chatId = chat.id
        if (text === '/start') {
            return bot.sendMessage(chatId, `Привет ${chat.first_name}!!
В этом боте ты сможешь ознакомиться с большим количеством вопросов которые ты можешь встретить на  собеседовании на позицию Frontend разработчика, также можешь посмотреть мои рекомендации к изучению вопросов, или изучить интересующие тебя темы. 
Важно!!!!
Этот бот не обучит вас писать код и программировать, на собеседование вам будут задавать теоретические вопросы, с которыми этот бот вам и поможет.`)
        }
        if (text === '/questions') {
            return bot.sendMessage(chatId, 'Выбирай список вопросов и качай свои скилы', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "HTML", web_app: { url: url + 'html' } }, { text: "CSS", web_app: { url: url + 'css' } }, { text: "JavaScript", web_app: { url: url + 'javascript' } }],
                        [{ text: "React", web_app: { url: url + 'react' } }, { text: "Vue", web_app: { url: url + 'vue' } }]
                    ]
                }
            })
        }
        if (text === '/roadmap') {
            return bot.sendMessage(chatId, 'Тут ты можешь посмотреть какие скилы нужны для твоей профессии', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Frontend developer (React)", web_app: { url: url + 'roadmapReact' } }],
                    ]
                }
            })
        }
        return bot.sendMessage(chatId, '.....')
    })
}
start()

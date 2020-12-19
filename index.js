const TelegramBot = require('node-telegram-bot-api')
const dialogflow = require('./dialogflow')
const youtube = require('./youtube')

const token = '1410152690:AAHjAvo8ZWpnXksfsa0y4oc-TqUZT1_Ikqs'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', async (msg)=>{
  const chatId = msg.chat.id
  console.log(msg.text)

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text)

  let responseText = dfResponse.text
  if (dfResponse.intent === 'Treino específico'){
    responseText = await youtube.searchVideoUrl(responseText, dfResponse.fields.body.stringValue)
  }

  bot.sendMessage(chatId, responseText)
})
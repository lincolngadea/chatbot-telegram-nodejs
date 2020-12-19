const TelegramBot = require('node-telegram-bot-api');

const token = '1410152690:AAHjAvo8ZWpnXksfsa0y4oc-TqUZT1_Ikqs';

const bot = new TelegramBot(token, {polling: true});

bot.on('message',(msg)=>{
  const chatId = msg.chat.id;
  console.log(msg.text);
  bot.sendMessage(chatId,'Obrigado por sua mensagem');
})
require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('Привет! Я бот, который будет анализировать сообщения.'));
bot.help((ctx) => ctx.reply('Я пока умею только принимать сообщения. Скоро будет анализ!'));

bot.on('text', (ctx) => {
    console.log(`📩 Сообщение от ${ctx.from.username}: ${ctx.message.text}`);
    ctx.reply('Сообщение получено!');
});

bot.launch();
console.log('🚀 Бот запущен!');

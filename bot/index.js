const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('https://t.me/notashit_bot/notashitcoin_game'));
bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
// 5656666572:AAHCN0YFGCGtO7vCnXNwZyj9S2QMHnvDaQ0
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5656666572:AAHCN0YFGCGtO7vCnXNwZyj9S2QMHnvDaQ0');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('text', (ctx) => {
    console.log(ctx.update.message.text);
    ctx.reply(ctx.update.message.text)
});
bot.on('sticker', (ctx) => {
    console.log(ctx.update.message.sticker);
    ctx.replyWithSticker(ctx.message.sticker.file_id)
});
// bot.hears('hi', (ctx) => {
  
//     ctx.reply(ctx)
// });
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
console.log('hello');
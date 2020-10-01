const TelegramBot = require("node-telegram-bot-api");

const token = '1277458359:AAF1kIKkSissgZVJIMMq342K18Ebn5icJXo';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
        
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    } 
    
});

bot.on('message', function(msg){
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem');
});

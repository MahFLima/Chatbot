const TelegramBot = require("node-telegram-bot-api");
const token = '1277458359:AAF1kIKkSissgZVJIMMq342K18Ebn5icJXo';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome, Eu sou o Rick, um robô criado para converter unidades. \nVocê pode descobrir rapidamente quantas libras é um quilo, quantos centímetros é um pé, área, volume, temperatura e muito mais.");
    bot.sendMessage(msg.chat.id, "Opçoes: \nquilometros em metros \nlitro em milimetro \nquilograma em grama \nmetros por segundo em km/h");

    });

    // bot.on('message', function(msg){
    //     const chatId = msg.chat.id;
    //     console.log(msg.text);
    //     bot.sendMessage(chatId, 'Obrigado por sua mensagem');
    // });
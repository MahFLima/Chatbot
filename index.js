const TelegramBot = require("node-telegram-bot-api");

const token = '1277458359:AAF1kIKkSissgZVJIMMq342K18Ebn5icJXo';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome, Eu sou o Rick, um robô criado para converter unidades. \nVocê pode descobrir rapidamente quantas libras é um quilo, quantos centímetros é um pé, área, volume, temperatura e muito mais.");
    bot.sendMessage(msg.chat.id, "Opçoes: \nquilometros em metros \nlitro em milimetro \nquilograma em grama \nmetros por segundo em km/h");

    });

bot.on('message', (msg) => {

    var km = "quilometros em metros";
    if (msg.text.toString().toLowerCase().indexOf(km) === 0) {
    bot.sendMessage(msg.chat.id,"1km = 1000m");
    } 
        
    var l = "litro em milimetro";
    if (msg.text.toString().toLowerCase().includes(l)) {
    bot.sendMessage(msg.chat.id, "1 litro = 1000 milimetros");
    } 

    var kg = "quilograma em grama";
    if (msg.text.toString().toLowerCase().indexOf(kg) === 0) {
    bot.sendMessage(msg.chat.id,"1kg = 1000g");
    } 
        
    var ms = "metros por segundo em km/h";
    if (msg.text.toString().toLowerCase().includes(ms)) {
    bot.sendMessage(msg.chat.id, "1m/s = 3,6km/h");
    }
    
});

// bot.on('message', function(msg){
//     const chatId = msg.chat.id;
//     console.log(msg.text);
//     bot.sendMessage(chatId, 'Obrigado por sua mensagem');
// });

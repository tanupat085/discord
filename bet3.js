const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
let as= "play" ;
let prefix = "ky" ;
client.on('message', msg => {
  if (msg.content === prefix + 'bee') {
    msg.reply('บี ');
  }
  if (msg.content === prefix + 'meen') {
    msg.reply('coke boi chin chin chin chin');
  }
  if (msg.content === prefix + 'bee2') {
    msg.reply('ศักดิ์ชัย');
  }
  if (msg.content === prefix + 'meen2') {
    msg.reply('เบาหวาน');
  }
  if (msg.content === prefix + 'dota') {
    msg.reply('ใครเค้าเล่นกัน เดี๋ยวนี้ต้อง ROV');
  }
  if (msg.content === as + 'dota2') {
    msg.reply('ROV ROV ROV ROV ROV ROV ROV');
  }
});

client.login('NzA3NDY1ODAwNDA3MzE4NTQ4.XrJNCA.c-qUMJwGsrxSppKLCuqjxALl-WU');

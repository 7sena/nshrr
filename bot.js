
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("-----------------------");
console.log("Bot is Online");
console.log("-----------------------");

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bcall')){
 if (message.author.id !== '414477438869831682') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '414477438869831682') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login("NDgwNDIyMDQ1MTM0NjE4NjM0.DlxIXg.Kbcv382UkbtojpnX-CPJk8n1mCw")


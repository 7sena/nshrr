
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`
**
Invite Rewards
5 Invites - $1 PayPal. Small Inviter Rank
25 Invites - $6 PayPal Gold Inviter Rank
50 Invites - $13 PayPal Platinum Inviter
100 Invites - $30 PayPal Diamond Inviter
200 Invites - $70 PayPal Elite Inviter

https://discord.gg/vnDhbt


**
[${member}]`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
**
Invite Rewards
5 Invites - $1 PayPal. Small Inviter Rank
25 Invites - $6 PayPal Gold Inviter Rank
50 Invites - $13 PayPal Platinum Inviter
100 Invites - $30 PayPal Diamond Inviter
200 Invites - $70 PayPal Elite Inviter

https://discord.gg/vnDhbt


**
[${member}]`);


  });



Client.login("NDc5MzI4NDUwNTc0ODExMTU4.DlXwEg.-PWY9IRiiisc5rGFiEnICBNh3jY");

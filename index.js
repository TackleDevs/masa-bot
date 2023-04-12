const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

console.log(process.env.token);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content.includes('まさ')) {
    message.reply('https://raw.buntin.xyz/masaiei.png');
  }
});

client.login(process.env.token);

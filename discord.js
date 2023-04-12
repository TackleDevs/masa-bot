const {
    Client,
    GatewayIntentBits,
    SelectMenuOptionBuilder,
} = require('discord.js');
import dotenv from 'dotenv';
const toml = require('toml');
const fs = require('fs');
dotenv.config();
const config = toml.parse(fs.readFileSync('./discord.toml', 'utf8'));

console.log(process.env.token);
// execuse command once with a discord.js

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
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

client.login(config.token);

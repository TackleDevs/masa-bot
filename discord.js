const {
    Client,
    GatewayIntentBits,
    SelectMenuOptionBuilder,
} = require('discord.js');
const toml = require('toml');
const fs = require('fs');
const config = toml.parse(fs.readFileSync('./discord.toml', 'utf8'));

console.log(config.token);
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

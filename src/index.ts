import { Client, GatewayIntentBits } from 'discord.js';
require('dotenv').config();

console.log(process.env.token);
if (!process.env.token) {
    console.log('token not found');
    process.exit(1);
}
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    const user = client.user || { tag: 'unknown' };
    console.log(`Logged in as ${user.tag}!`);
});
const replyMessage: string = 'https://raw.buntin.xyz/masaiei.png';
client.on('messageCreate', (message) => {
    if (message.content.includes('まさ')) {
        message
            .reply(replyMessage)
            .then((msg) => {
                console.log(`Sent a reply to ${message.author.tag}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});

client.login(process.env.token);

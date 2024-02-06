import { Client, GatewayIntentBits, Events } from 'discord.js';

const words: string[] = ['まさ', 'まつなが', 'マサ', 'マツナガ', '大', '松永', 'masa', 'matsunaga', 'matunaga'];

if (Bun.env.TOKEN === undefined) {
  console.error('TOKEN is not set!!');
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ],
});

client.on(Events.ClientReady, () => {
  const user = client.user || { tag: 'unknown' };
  console.log(`Logged in as ${user.tag}!`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) {
    return;
  }
  const replyMessage: string = 'https://raw.buntin.xyz/masaiei.png';
  if (words.some((word) => message.content.includes(word))) {
    message.reply(replyMessage);
  }
});

client.login(Bun.env.TOKEN);

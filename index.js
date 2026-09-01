require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message.content);
  if (message.content.startsWith("create")) {
    return message.reply("Generating short Url....");
  }
  message.reply("Hi from the bot");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
  if (interaction.commandName === "create") {
    const url = interaction.options.getString("url")
    console.log(url)
    await interaction.reply(`You entered ${url}`)
  }

});

client.login(process.env.DISCORD_TOKEN);

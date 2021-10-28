const axios = require("axios");
const discord = require('discord.js'); // Version: 13 (discord.js v13)

const client = new discord.Client({intents: [discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_MESSAGES]});

client.on('messageCreate', async message => {
	const catcscans = await axios.get("https://bryendaco.github.io/catchscams.json");

	for (scamdomains of catcscans.data.scamlinks) {
		if (!!message.content && message.content.includes(scamdomains)) return console.log("Scam Link Detected!")
	}
});

client.login("Your-Bot-Token")

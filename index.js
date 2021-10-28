const axios = require("axios");
const discord = require('discord.js'); // 13.0.0, 13.0.1, 13.1.0, 13.2.0

const client = new discord.Client({intents: [discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_MESSAGES]});

client.on('messageCreate', async message => {
	const catcscans = await axios.get("https://bryendaco.github.io/catchscams.json");

	for (scamdomains of catcscans.data.scamlinks) {
		if (!!message.content && message.content.includes(scamdomains)) return console.log("Scam Link Detected!")
	}
});

client.login("Your-Bot-Token")

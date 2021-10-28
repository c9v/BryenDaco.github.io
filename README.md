# Scam and Phishing Links Catching API

## Usage
**Examples**

- NPM Package
```js
const catchscamjs = require("@bryendaco/catchscam.js"); // Load Package

let content = `:warning: Hi i claim this nitro for free 3 months lol! try it too. https://dliscord.com/x4Cs7cDt2sdFOf12`

catchscamjs(content).then(console.log);
// See if there is a Scam or Phishing link in 'content'

//if it is a scam returns 'true' - (boolean)
// if it is not a scam returns 'false' - (boolean)
```

- Use API directly for Discord Bots
```js
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
```
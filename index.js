const axios = require("axios");

client.on('messageCreate', async message => {
	const catcscans = await axios.get("https://bryendaco.github.io/catchscams.json");

	for (scamdomains of catcscans.data.scamlinks) {
		if (!!message.content && message.content.includes(scamdomains)) return console.log("Scam Link Detected!")
	}
});

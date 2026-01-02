const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
		name: "dislike",
		version: "1.0.1",
		hasPermssion: 0,
		credits: "uzairrajput",
		description: "no prefix",
	usePrefix: false,
		commandCategory: "No command marks needed",
		usages: "Yo Yo",
		cooldowns: 5,
};

const gifs = [
		"https://i.imgur.com/NTaCZK6.gif",
		"https://i.imgur.com/3cXkcL8.gif",
		"https://i.imgur.com/XKfvONP.gif",
		"https://i.imgur.com/d5O3alB.gif",
		"https://i.imgur.com/HSLGA34.jpeg"
];

const messages = [
		"𝐉𝐮𝐬𝐭 𝐬𝐡𝐮𝐭 𝐮𝐩, 🤬🤬\n\n {name}!  \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
		"𝐈 𝐝𝐨𝐧'𝐭 𝐥𝐢𝐤𝐞 𝐢𝐭, 😡😡\n\n {name}! \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
		"𝐓𝐞𝐫𝐢 𝐓𝐰 𝐊𝐚𝐡𝐚 𝐍𝐚 𝐌𝐮𝐣𝐡𝐞 𝐍𝐚𝐡𝐢 𝐏𝐚𝐬𝐬𝐚𝐧 𝐀𝐤 𝐁𝐚𝐫 𝐊𝐢 𝐊𝐚𝐡𝐢 𝐇𝐮𝐢 𝐒𝐚𝐦𝐣𝐡 𝐍𝐚𝐡𝐢 𝐀𝐭𝐢 𝐊𝐢𝐚 𝐓𝐮𝐣𝐡𝐞 🔪😾,\n\n {name}! \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
		"𝐉𝐚  𝐎𝐲𝐞 𝐑𝐚𝐬𝐭𝐚 𝐍𝐚𝐩 𝐀𝐩𝐧𝐚 𝐓𝐡𝐚𝐫𝐤𝐢. 😾😾\n\n {name} \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
		"𝐉𝐚𝐡𝐚  𝐋𝐚𝐫𝐤𝐢 𝐖𝐚𝐡𝐚 𝐓𝐞𝐫𝐞 𝐉𝐚𝐢𝐬𝐞 𝐓𝐡𝐫𝐤𝐢..  😾🖐️\n\n {name} \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
		"𝐃𝐢𝐰𝐚𝐧𝐢 𝐊𝐨 𝐃𝐞𝐤𝐡𝐚 𝐍𝐚𝐡𝐢. 𝐊𝐞 𝐌𝐚𝐤𝐡𝐢𝐲𝐚 𝐀𝐠𝐚𝐢, 𝐁𝐞𝐭𝐚 𝐀𝐮𝐧𝐭𝐲 𝐇𝐨 𝐁𝐚𝐜𝐡𝐨 𝐊𝐞 𝐁𝐚𝐬𝐬 𝐊𝐢 𝐁𝐚𝐭 𝐍𝐚𝐡𝐢 𝐓𝐮 𝐌𝐞𝐫𝐚 𝐁𝐚𝐜𝐡𝐚 𝐂𝐡𝐨𝐭𝐢 𝐊𝐚𝐫. 😹😹\n\n {name} \n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
		var { threadID, messageID } = event;
		var name = await Users.getNameUser(event.senderID);

		if (event.body.toLowerCase().startsWith("i like you") || 
				event.body.toLowerCase().startsWith("I Like You") || 
				event.body.toLowerCase().startsWith("I  LIKE YOU") || 
				event.body.toLowerCase().startsWith("Like It") || 
				event.body.toLowerCase().startsWith("like it")) { 

				// Select random GIF and message
				const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
				const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
				const downloadPath = path.join(__dirname, 'Good-Morning-Gif-Images.gif');

				// Download image from Imgur
				request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
						var msg = {
								body: randomMessage,
								attachment: fs.createReadStream(downloadPath)
						};
						api.sendMessage(msg, threadID, messageID);
						api.setMessageReaction("👎", event.messageID, (err) => {}, true);
				});
		}
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}

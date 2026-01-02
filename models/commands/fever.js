const fs = require("fs");
module.exports.config = {
	name: "fever",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fever")==0 || (event.body.indexOf("Fever")==0 || (event.body.indexOf("Bukhar")==0 || (event.body.indexOf("bukhar")==0)))) {
		var msg = {
				body: "𝐁𝐮𝐤𝐡𝐚𝐫 𝐡𝐮𝐚 104 𝐡𝐮𝐚 𝐭𝐮 𝐭𝐰 𝐛𝐢𝐦𝐚𝐫 𝐡𝐮𝐚 𝐧𝐢𝐧𝐝 𝐧𝐚 𝐚𝐲𝐞 𝐚𝐲𝐞 𝐚𝐲𝐞𝐞𝐞𝐞𝐞𝐞....🤒🤒"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

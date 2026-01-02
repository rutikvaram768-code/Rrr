const fs = require("fs");
module.exports.config = {
	name: "rick",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if(event.body.includes("Matlabi") || event.body.includes("MATLABI") || event.body.includes("matlabi") || event.body.includes("test"))  {
		var msg = {
				body: "Bat Karwai Hai Magar Saxh Hai.......🥀💫💔",
				attachment: fs.createReadStream(__dirname + `/uzair/Matlabi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

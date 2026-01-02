const fs = require("fs");
module.exports.config = {
	name: "RuleBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "group or bot ke rule",
	usages: "RuleBot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("RuleBot")==0 || (event.body.indexOf("rulebot")==0)) {
		var msg = {
				body: "𝐶ℎ𝑎𝑡𝐵𝑜𝑡 𝐾𝑎 𝐼𝑠𝑡𝑒𝑚𝑎𝑙 𝐾𝑎𝑟𝑡𝑒 𝑊𝑎𝑞𝑡 𝑀𝑒𝑚𝑏𝑒𝑟𝑠 𝐽𝑎𝑔𝑎 𝑀𝑒 𝐾𝑢𝑐ℎ 𝐶ℎ𝑒𝑒𝑧𝑎𝑖𝑛 𝐾𝑜 𝑁𝑜𝑡𝑒 𝐾𝑎𝑟𝑛𝑎 𝐶ℎ𝑎ℎ𝑖𝑦𝑒\n❯ 𝑆𝑜𝑢𝑟𝑐𝑒𝐶𝑜𝑑𝑒 𝐶ℎ𝑎𝑡𝐵𝑜𝑡 𝑀𝑎𝑑𝑒 𝐵𝑦 𝑈𝑧𝑎𝑖𝑟 𝑅𝑎𝑗𝑝𝑢𝑡 & 𝑀𝑜𝑑 𝐵𝑦 𝑀𝑡𝑥𝑈𝑧𝑎𝑖𝑟\n❯ 𝑀𝑒𝑚𝑏𝑒𝑟𝑠 𝐵𝑜𝑡 𝐶 20 𝐵𝑎𝑟/𝐷𝑖𝑛 𝐶 𝑍𝑎𝑑𝑎 𝐺𝑢𝑟𝑒𝑒𝑧 𝐾𝑎𝑟𝑒 𝐵𝑜𝑡 𝑆𝑝𝑎𝑚𝑚𝑖𝑛𝑔 𝐾𝑎𝑟𝑛𝑒 𝐶 20 𝐵𝑎𝑟/𝐷𝑖𝑛 𝐴𝑘 𝐻𝑖 𝐻𝑜\n\n◈ ━ 💚✨ 𝑼𝒛𝒂𝒊𝒓𝑴𝑻𝑿 ◈ ━ 💚✨",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

var uzairrajput = "uzairrajput";
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "slapv2",
  version: "3.0.0",
  hasPermssion: 0,
  credits: `${uzairrajput}`,
  description: "it's just imitated because the old slap doesn't work",
  commandCategory: "Fun",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.imgur.com/vKOiKs7.gif", ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("𝑃𝑙𝑒𝑎𝑠𝑒 𝐴𝑘 𝐼𝑑 𝑀𝑒𝑛𝑡𝑖𝑜𝑛 𝐾𝑎𝑟𝑒𝑛..", threadID, messageID);
   var callback = () => api.sendMessage({body:`Slapped - ${tag} 🤧` + `\n\nMar mar ke tumhara muh lal kar dena hai Maine 🙂🙍‍♀️`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/slap.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/slap.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/slap.gif")).on("close",() => callback());
}

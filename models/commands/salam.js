const fs = require("fs");
module.exports.config = {
  name: "asslama",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐑𝐮𝐭𝐢𝐤 𝐯𝐚𝐫𝐦𝐚", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("assalamualaikum") ||
     react.includes("𝐑𝐚𝐝𝐡𝐞 𝐑𝐚𝐝𝐡𝐞 𝐣𝐢") || react.includes("As.km") || react.includes("𝐫𝐚𝐝𝐡𝐞 𝐫𝐚𝐝𝐡𝐞") ||
react.includes("𝐣𝐚𝐲 𝐬𝐡𝐫𝐞𝐞 𝐫𝐚𝐦") ||
react.includes("𝐑𝐚𝐝𝐡𝐞 𝐑𝐚𝐝𝐡𝐞 𝐣𝐢")) {
    var msg = {
        body: `🥀𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄🥀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n ${name} 𝑩𝑨𝑩𝒀 😌👈`,attachment: fs.createReadStream(__dirname + `/😘 𝐑𝐮𝐭𝐢𝐤 🥰/ass.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😌", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

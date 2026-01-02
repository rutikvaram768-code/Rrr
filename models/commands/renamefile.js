const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "renamefile",
  version: "2.0.0",
  hasPermssion: 2,
  credits: "UzairMTX",
  description: "Rename uppercase files to lowercase and persist",
  commandCategory: "Admin",
  usages: "[oldname]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  if (!args[0]) return api.sendMessage("⚠️ Pehle file ya folder ka naam do!", event.threadID, event.messageID);

  const oldName = args[0];
  const newName = oldName.toLowerCase();

  const oldPath = path.join(__dirname, oldName);
  const newPath = path.join(__dirname, newName);
  const logPath = path.join(__dirname, "renamed-log.json");

  try {
    if (!fs.existsSync(oldPath)) return api.sendMessage(`⚠️ '${oldName}' exist nahi karta.`, event.threadID, event.messageID);
    if (fs.existsSync(newPath)) return api.sendMessage(`⚠️ '${newName}' already exist karta hai.`, event.threadID, event.messageID);

    fs.renameSync(oldPath, newPath);

    // Update log
    let log = {};
    if (fs.existsSync(logPath)) {
      log = JSON.parse(fs.readFileSync(logPath));
    }

    log[oldName] = newName;
    fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

    api.sendMessage(`✅ '${oldName}' ko '${newName}' me rename kar diya gaya aur save bhi ho gaya.`, event.threadID, event.messageID);
  } catch (err) {
    api.sendMessage(`❌ Error: ${err.message}`, event.threadID, event.messageID);
  }
};

module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "uzairrajput",
  description: "Leave the group",
  commandCategory: "Received a command from admin to leave group Leave",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('𝒀𝑬.𝑮𝑹𝑶𝑼𝑷 𝑪𝑯𝑶𝑹𝑵𝑬 𝑲𝑨 𝑯𝑼𝑲𝑼𝑴 𝑴𝒓𝑼𝒛𝒂𝒊𝒓-𝑴𝑻𝑿 💚✨ 𝑲𝑬 𝑨𝑫𝑴𝑰𝑵𝑺.𝑲𝑬 𝑻𝑨𝑹𝑨𝑭 𝑪 𝑯𝑨𝑰 𝑶𝑼𝑻..🙂💔.!', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}

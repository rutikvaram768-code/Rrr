module.exports.config = {
	name: "google",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepahe\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let uzairrajput = args.join(" ");
  if (!uzairrajput) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepahe\n\nCreated by: Uzair Rajput`, event.threadID, event.messageID);
const uzairrajput = await google.search(`${uzairrajput}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'en' 
  }
});
  console.log(uzairrajput);
  var uzairrajput = uzairrajput.results[0];
  var uzairrajput2 = uzairrajput.description;
  var uzairrajput3 = uzairrajput.url;
  var uzairrajput4 = (`${uzairrajput2}\n\nsource:\n${uzairrajput3}`);
api.sendMessage(uzairrajput4, event.threadID, event.messageID);
  }

module.exports.config = {
  name: "watch2",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput",///don't change my Credit Coz i Edit 
  description: "Get Pair From Mention",
  commandCategory: "img",
  usages: "[@mention]",
  cooldowns: 5, 
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};

module.exports.onLoad = async() => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/uzair/mtx/`;
  const path = resolve(__dirname, 'uzair/mtx', 'uzair-.jpeg');
  if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.ibb.co/hJc0hbXY/received-9621508904563350.jpg", path); 
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "uzair", "mtx");

  let batgiam_img = await jimp.read(__root + "/uzair-.jpeg");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(103, 103), 248, 197).composite(circleTwo.resize(85, 85), 435, 254);

  let raw = await batgiam_img.getBufferAsync("image/png");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("𝑃𝑙𝑒𝑎𝑠𝑒 𝑘𝑖𝑠𝑖 𝑒𝑘 𝑑𝑜𝑠𝑡 𝑘𝑜 𝑚𝑒𝑛𝑡𝑖𝑜𝑛 𝑘𝑎𝑟𝑒𝑛 𝑝𝑎𝑖𝑟 𝑏𝑎𝑛𝑎𝑛𝑒 𝑘𝑒 𝑙𝑖𝑒.", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐇𝐚𝐫 𝐥𝐚𝐦𝐡𝐚 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐭𝐡, 𝐞𝐤 𝐧𝐚𝐲𝐢 𝐤𝐚𝐡𝐚𝐧𝐢, 𝐭𝐮𝐦 𝐡𝐢 𝐌𝐞𝐫𝐢 𝐝𝐮𝐧𝐢𝐲𝐚, 𝐭𝐮𝐦 𝐡𝐢 𝐦𝐞𝐫𝐢 𝐫𝐚𝐧𝐢! ❤️\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍⎯꯭𝁂꯭꯭꯭֯✰🩷꯭꯬꯭𓆩〭ͥ〬 ⃪ᷟ꯬༏❤️𝆺𝅥Ʀ𝐮𝐭𝐢𝐤𝆺𝅥🫰❤️⎯꯭̽𝆭⎯", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
    }

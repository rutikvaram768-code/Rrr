module.exports.config = {
    name: "crush2",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "mention partner",
    commandCategory: "Love",
    usages: `Please tag 1 person\n\nHow to use?\n${global.config.PREFIX}crush <@tag>\n\nExample:\n${global.config.PREFIX}crush @name\n`,
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
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'joshua.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/ha8gxu5.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/joshua.png");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(110, 110), 150, 76).composite(circleTwo.resize(100, 100), 238, 305);
    
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
    var mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage(`Please tag 1 person\n\nHow to use?\n${global.config.PREFIX}crush <@tag>\n\nExample:\n${global.config.PREFIX}crush @name\n\nCreated by: 𝑴𝑻𝑿 💚✨ (Kìrâñ RajPööt ☠️🏴‍☠️)`, threadID, messageID);
    else {
      let tag = event.mentions[mention].replace("@", "");
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐊𝐞𝐡𝐭𝐞 𝐇𝐚𝐢 𝐃𝐨𝐬𝐭𝐢 𝐍𝐚𝐬𝐡𝐚 𝐁𝐚𝐧 𝐉𝐚𝐭𝐢 𝐇𝐚𝐢\n\n𝐊𝐢𝐨 𝐊𝐞𝐡𝐭𝐞 𝐇𝐚𝐢 𝐃𝐨𝐬𝐭𝐢 𝐒𝐚𝐳𝐚 𝐁𝐚𝐧 𝐉𝐚𝐭𝐢 𝐇𝐚𝐢\n\n𝐏𝐚𝐫 𝐃𝐨𝐬𝐭𝐢 𝐍𝐢𝐛𝐡𝐚𝐨 𝐒𝐚𝐱𝐡𝐞 𝐃𝐢𝐥 𝐂 𝐓𝐰 𝐘𝐚𝐡𝐢 𝐉𝐞𝐞𝐧𝐞 𝐊𝐢 𝐖𝐚𝐣𝐚𝐡 𝐁𝐚𝐧 𝐉𝐚𝐭𝐢 𝐇𝐚𝐢..🫂🫶🫀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
           }

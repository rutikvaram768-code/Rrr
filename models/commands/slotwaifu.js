module.exports.config = {
    name: "slotwaifu",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Game The vote has a bet on anime</> Coder by Uzair Rajput",
    commandCategory: "economy",
    usages: "<[uzair/sehar/areebu/zainab/maryam/kiran] or [🔥/⚡/��/🦞/🦵/🐱]> <Bet amount (note must be over 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'uzairrajput') {
        console.log(`\x1b[33m[ WARN ]\x1b[37m » Change credits to your mother's dick, dog:))`);
        return api.sendMessage('[ WARN ] Detect bot operator ' + global.config.BOTNAME + ' change credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["uzair", "sehar", "areebu", "zainab", "maryam", "kiran"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('The "Bet amount" you entered is not a valid number!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('The bet amount cannot be less than 50$\n\nApke God Father Mr Uzair Rajput-Aaroob', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('Your account does not have enough funds to play.', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'Uzair' || content == '🔥') {
        content1 = 'uzair';
      }
      else if (content == 'Sehar' || content == '⚡') {
        content1 = 'sehar';
      }
      else if (content == 'Areebu' || content == '🍙') {
        content1 == 'areebu';
      }
      else if (content == 'Zainab' || content == '🦞') {
        content1 = 'zainab';
      }
      else if (content == 'Maryam' || content == '🦵') {
        content1 = 'maryam';
      }
      else if (content == 'Kiran' || content == '🐱') {
        content1 = 'kiran ';
      }
      else {
        return api.sendMessage(`Wrong format\n${global.config.PREFIX}${this.config.name} [Uzair/Sehar/Areebu/Zainab/Maryam/Kiaran] or[🔥/⚡/🍙/🦞/🦵/🐱] <The bet amount (note must be over $ 50)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/umaru.jpg')) {
        request('https://imgur.com/PJ8xGcA.jpg').pipe(createWriteStream(__dirname + '/cache/umaru.jpg'));
      }
      if (!existsSync(__dirname + '/cache/nami.jpg')) {
        request('https://imgur.com/n6TShJP.jpg').pipe(createWriteStream(__dirname + '/cache/nami.jpg'));
      }
      if (!existsSync(__dirname + '/cache/chitanda.jpg')) {
        request('https://imgur.com/tp4Pjo1.jpg').pipe(createWriteStream(__dirname + '/cache/chitanda.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mirai.jpg')) {
        request('https://imgur.com/mf4EMOx.jpg').pipe(createWriteStream(__dirname + '/cache/mirai.jpg'));
      }
      if (!existsSync(__dirname + '/cache/elaina.jpg')) {
        request('https://imgur.com/wYJwU3y.jpg').pipe(createWriteStream(__dirname + '/cache/elaina.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mikasa.jpg')) {
        request('https://imgur.com/C0XFKxy.jpg').pipe(createWriteStream(__dirname + '/cache/mikasa.jpg'));
      }
      if (!existsSync(__dirname + '/cache/quybu.gif')) {
        request('https://imgur.com/KqBXv0U.gif').pipe(createWriteStream(__dirname + '/cache/quybu.gif'));
      }
      // baucua 1
      if (baucua1 == 'Uzair') {
        var bau1 = 'uzair';
        var bau_1 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua1 == 'Sehar') {
        var bau1 = 'sehar';
        var bau_1 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua1 == 'Areebu') {
        var bau1 = 'areebu';
        var bau_1 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua1 == 'Zainab') {
        var bau1 = 'zainab';
        var bau_1 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua1 == 'Maryam') {
        var bau1 = 'maryam';
        var bau_1 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua1 == 'Kiran') {
        var bau1 = 'kiran';
        var bau_1 = __dirname + '/cache/mikasa.jpg';
      }
      // baucua 2
      if (baucua2 == 'Uzair') {
        var bau2 = 'uzair';
        var bau_2 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua2 == 'Sehar') {
        var bau2 = 'sehar';
        var bau_2 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua2 == 'Areebu') {
        var bau2 = 'areebu';
        var bau_2 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua2 == 'Zainab') {
        var bau2 = 'zainab';
        var bau_2 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua2 == 'Maryam') {
        var bau2 = 'maryam';
        var bau_2 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua2 == 'Kiran') {
        var bau2 = 'kiran';
        var bau_2 = __dirname + '/cache/mikasa.jpg';
      }
      // baucua 3
      if (baucua3 == 'Uzair') {
        var bau3 = 'uzair';
        var bau_3 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua3 == 'Sehar') {
        var bau3 = 'sehar';
        var bau_3 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua3 == 'Areebu') {
        var bau3 = 'areebu';
        var bau_3 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua1 == 'Zainab') {
        var bau3 = 'zainab';
        var bau_3 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua3 == 'Maryam') {
        var bau3 = 'maryam';
        var bau_3 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua3 == 'Kiran') {
        var bau3 = 'kiran';
        var bau_3 = __dirname + '/cache/mikasa.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
      if (bau1 == 'uzair') {
        var icon1 = '🔥';
      }
      else if (bau1 == 'sehar') {
        var icon1 = '⚡'
      }
      else if (bau1 == 'areebu') {
        var icon1 = '🍙';
      }
      else if (bau1 == 'zainab') {
        var icon1 = '🦞';
      }
      else if (bau1 == 'maryam') {
        var icon1 = '🦵';
      }
      else if (bau1 == 'kiran') {
        var icon1 = '🐱';
      }
      // icon 2
      if (bau2 == 'uzair') {
        var icon2 = '🔥';
      }
      else if (bau2 == 'sehar') {
        var icon2 = '⚡'
      }
      else if (bau2 == 'areebu') {
        var icon2 = '🍙';
      }
      else if (bau2 == 'zainab') {
        var icon2 = '🦞';
      }
      else if (bau2 == 'zainab') {
        var icon2 = '🦵';
      }
      else if (bau2 == 'kiran') {
        var icon2 = '🐱';
      }
      // icon 3
      if (bau3 == 'uzair') {
        var icon3 = '🔥';
      }
      else if (bau3 == 'sehar') {
        var icon3 = '⚡'
      }
      else if (bau3 == 'areebu') {
        var icon3 = '🍙';
      }
      else if (bau3 == 'zainab') {
        var icon3 = '🦞';
      }
      else if (bau3 == 'maryam') {
        var icon3 = '🦵';
      }
      else if (bau3 == 'kirana') {
        var icon3 = '🐱';
      }
      // sendMessage
      api.sendMessage({
        body: 'Good luck Weabu :3333 ',
        attachment: createReadStream(__dirname + '/cache/quybu.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `icons Anime characters: ${icon1} | ${icon2} | ${icon3}\n🌺You won and got ${moneyBet * 5}$`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 5), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `icon Anime characters: ${icon1} | ${icon2} | ${icon3}\n🌺You have lost and been deducted ${moneyBet}$`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('Error! An error occurred. Please try again later. Please try again in 5s', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
  }

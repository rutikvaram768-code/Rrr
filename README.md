# 🤖 Messenger Bot by ✮⃝❤≛⃝ R𝐮𝐭𝐢𝐤──────亗🕊️

Welcome to the official **Messenger Bot** developed by **✮⃝❤≛⃝ R𝐮𝐭𝐢𝐤──────亗🕊️** — a smart, fun-loving, and powerful bot for Facebook Messenger! 🎉

![imgur](https://i.imgur.com/rpCMuwA.jpeg)

This bot is built using **Node.js** and supports cool commands like media downloads, image pairing, and chat automation. Lightweight, fast, and perfect for group fun!

---

## 🚀 Features

- 🎵 YouTube Audio/Video Downloader  
- 💞 Fun Pairing Command (`.pair6 @user`)  
- 🖼️ Image Manipulation with Avatars  
- 🔄 Auto-replies & Custom Commands  
- 📡 Lightweight, Fast, and Group Friendly  

---

## 🛠 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/uzairrajput/messenger-bot.git
cd messenger-bot
```

### 2. Install Dependencies

```bash
npm install fca-mtx-uzair 
```

### 3. Configure Your Login

Use either `appstate.json` or email/password in a `.env` or `config.json` file:

```json
{
  "facebook": {
    "email": "your-email",
    "password": "your-password"
  }
}
```

> 🔐 Tip: Use AppState login for safer, secure authentication.

---

## 💬 Usage

Simply chat in Messenger:

```bash
.pair6 @username   # Pair yourself with someone in the group ❤️
.music [link]      # Download music from YouTube 🎶
.video [link]      # Download YouTube video 🎥
.help              # View all commands
```

Bot will automatically respond in your group or chat.

---

## 📁 Adding Your Own Commands

1. Go to `commands/` folder  
2. Create a new file like `hello.js`:

```js
module.exports.config = {
  name: "hello",
  description: "Says hello!"
};

module.exports.run = async function({ api, event }) {
  return api.sendMessage("Hello from Uzair's bot!", event.threadID);
};
```

Easy to extend and write your own logic 💡

---

## 👑 Author

**Developed by:** [Uzair Rajput](https://github.com/uzairrajput)  
💬 *“Code karo, masti karo, aur Messenger pe chha jao!”*

---

## 📄 License

Licensed under the **MIT License** — free to use, share, and improve.

---

## 🌟 Star the Project

If you like this bot, give it a ⭐ on GitHub and share it with friends!

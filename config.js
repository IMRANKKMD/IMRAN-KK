// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUg3WkRNTnA2WWtxai8vWDE1eno3VWhzcVdiQXdxeXcvWm5CNFA0UDBtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlk2c0hFNUJvZ1FFQVVxdVNqb0Q0WEhOOGFLd2hDOEk5Y1lrNkxWSE5qVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R3VKUXdFMWJxUnFzMkw0WnNxVndWMEx2NUxDUnVvaWVEckFScFVQcEVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1elpxTmV4T2ZJYStETElYOElNM0RsYmpxYit3RitNOS9jY3dRUlJoOWk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFenNyMTNSSmlZSHBqbG10QjViNEdacVlCd1pISytocnNDSlJkTk94VzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZvMnpXQTBOc3lvb2dlWjRrTE1DNGNkZHUvYnhVMkVhZy9vVDk1eDFRQkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUwrTEJKNTJYYWhxNGFIZm1RN1NZTjNKblNrQ2RuOXJ1REhxcjlCMjRudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZIem5oa0NzTHlOcVpSdEJqS1Y1Y0VjRitpa3RyV1E1Sy9id0t6L0FoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRUandQWUpmaEc1YkJZa0hqaTJsaC9QbnMva0YrL0ZGTjlkYWprcUhVL2VlVFdGa0crVDdGN0hYa3h1a1ppenN2ajRzVEdtQlhzeUJKUSsxb3lObkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IjJCVXB1K1U2ZGhNM2l1b0VoQWZBeWZUNFR1dGN2NTF3MW9INlJLTjJGS2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTMzNjU5MDAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDdCNERBRkJGNkM0QjUyRENGMUFBNTFCOTA4NUU2IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODk2NzA3NzV9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVExYQUhMN0UiLCJtZSI6eyJpZCI6IjkyMzEzMzY1OTAwMDoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjcwNzEyOTI4ODIxMjk0OjEwQGxpZCIsIm5hbWUiOiLwnZaO8J2WkvCdlpfwnZaG8J2WkyDwnZaQ8J2WjfCdlobwnZaTIDgwNCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGl6cjZJQ0VPYnFzTlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFVURThJSHdtUWZaVktPM0t5cFpvcFVmV251Zm5WQ1B0SXpYbDFHc216bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibk5MVEJubGExNW9jcHlueWpvZ0ZIQytVSnZZWmViKzIzYnBUVC9vN1RPRWprVEdLVWx0Mjd5ZjJFU2NTWDJ0TTJvR2ZXNmpoSkI2Y0phckltU1ZyRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Imw2eUJPTTVIOC9WeHMwY0ljSnluYU5nZURTWWRaL1laZlhPdks0SEdaaEc5emtjczg2a2E5bHdnTUxJZCtPNEZyMDFMK0RtckhPLzY5WUE1SlZ4QUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzA3MTI5Mjg4MjEyOTQ6MTBAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMxRXhQQ0I4SmtIMlZTanR5c3FXYUtWSDFwN241MVFqN1NNMTVkUnJKczYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4OTY3MDc3NCwibGFzdFByb3BIYXNoIjoiMW9KQU1DIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOcnoifQ==",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "IMRAN-KK",
  MODE: process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/IMRANKKMD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTERID: process.env.NEWSLETTERID || "120363429734979882@newsletter",
 
  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "92342*******",
  OWNER_NAME: process.env.OWNER_NAME || "IMRAN-KK",
  SUDO: process.env.SUDO 
    ? process.env.SUDO.split(',').map(s => s.trim()) 
    : ["123@lid"],
  BANNED: process.env.BANNED 
    ? process.env.BANNED.split(',').map(s => s.trim()) 
    : [],
  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS 
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS 
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "😂", "😮", "😎", "🥰", "👋", "🤝", "💯", "✨", "⭐", "🎉", "🤗", "😊", "🙌", "💪", "👏", "✅", "🎈", "🎊", "🏆", "⚡", "💫", "👌", "🤙", "💖", "💕", "💗", "👑", "💎", "🌟", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡", "🎠"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS 
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim()) 
    : ["👑", "💎", "⭐", "✨", "🔥", "💯", "✅", "🎉", "🤖", "⚡", "💫", "🌟", "🏆", "👾", "🚀", "💪", "🎯", "🔱", "♾️", "⚜️"],
  LINK_WARNINGS: process.env.LINK_WARNINGS 
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim()).filter(s => s) 
    : [],
 
  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*IMRAN KK VIEWED YOUR STATUS 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  STICKER_NAME: process.env.STICKER_NAME || "IMRAN-KK",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",
  
  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/LXW2fTR7/IMG-20260811-WA1128.jpg",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://i.postimg.cc/LXW2fTR7/IMG-20260811-WA1128.jpg",
  AUDIO_URL: process.env.AUDIO_URL || 'https://files.catbox.moe/0toicz.mp3',
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",
  
  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "false",
  ,: process.env.ANTI_EDIT || "true",
  ANTIEDIT_PATH: process.env.ANTIEDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ IMRAN-KK
  *",
  AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "true",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI 
    ? process.env.AUTO_LIKE_EMOJI.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💀"],
  
  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "*_@user joined the group, welcome! 🎉_*",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "*_@user has left the group, we will miss them! 👋_*",

  VERSION: process.env.VERSION || "10.0 Bᴇᴛᴀ",
  TIMEZONE: process.env.TIMEZONE || "Asia/Karachi",
};

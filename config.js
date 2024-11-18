//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349123731026";
global.owner = process.env.OWNER_NUMBER || "2349123731026";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEgrenFVK0pGdHJPSmdmYndnUlpyRmJycGlkQWcxclJsR0hsNm5SSEtuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVNMVjI5Y1M3cDEzR3hpVVcxSjRXeEdtSWowcVFqbkxpWkRXeFdWKzVsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Rmk1bkVtTk1uaFM1Y08xR1VzS3J2a1k1SmlTNGU3ZkVFNk1USmFOZFZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOXJtWStJRUc5NWp0MFp0Vi95SlZDb1ZxRjh0VUNUa0pxc05qRkJRK1V3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Gak1BMWo4eTJIL1h3VzBsalFLMDZOTGxHbGpCNVJPaE5SS3FFTlorMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5vMURqVmFuQ1A3SUtwMHU4cGtYYm82ZnNZM1Bjcm8reWpwUndPRHVxMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pDVjR4ZUJwVSt1UUdvQWxpZ0FwSjNraFZmeEZRUWtOUUlvRFppOTdHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDJpV3VpN1RvNVZ6L0pxZGsvVEtnUzlPY1kyZUpPMCt2cmNZeXUxbk55TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpZemI3Qk8wdTVYUkY3eE9sVHZRQm9DcjhkZ3VaaGFHNm9DVWc2QnRoTnRYMzBRSmRxMEd2VmorSkRLMjZFOGM1RnVvblVQaDlweStOYis1ODE5dGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6InF2UTZxWWx0UlE3U05YWkpza3ViRFNpOWN3aVpxT01KMXVsVEZhOWp0V009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE2OTc4NTE4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTg1NDkyNjVCNERGNEQwRkRBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxOTcwMjI2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmWkQwdlFhd1FKRzVET2lWZDNvME1RIiwicGhvbmVJZCI6ImM0NjFhODBkLTY3MDAtNDFiMC05MzhjLTBjZmIwNjUwNGMwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBN1V0SG9MNVpzZEhtMndNZDFnUy8zd2NIckU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUY1K0pFbUk2bm5oVXd3WnIyT1RidjJuZjk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZKNEJZS1g0IiwibWUiOnsiaWQiOiIyMzQ4MTY5Nzg1MTgwOjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRBWVZFRUQgR0FER0VU8J+TsfCfk7EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxQXlkOEhFS0dKNzdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBzVURIUk1zOUhRaEZxZUdnNWtySWNqMThhVkpCUGU4UjRPSHA2YkpuU0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVVM3NMcFc2bjdZTEZHbHcxdHZLRGVSdEV6aWNYQy9waW5KNDFyTkR4RW1zMGc5ai9PcFJxZE1uV0ROVmkyVDRqQzMrK1A3bncyRjRqK29Wanc1MGp3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGMnMyR0xwS0lERVJPNlBYUXJwVTg5QUlvcXcxZHVkOC92U1V1cTUzUmZwNUR4Q1IwczdKQ3VDeWIxM3M1MGtvMDlUTStuMHk2TDFBUXloamQwb2Nndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjk3ODUxODA6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZExGQXgwVExQUjBJUmFuaG9PWkt5SEk5ZkdsU1FUM3ZFZURoNmVteVowaSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxOTcwMjIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU85TyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

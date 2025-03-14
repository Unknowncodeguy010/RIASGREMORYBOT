//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NBS3AyS3dIN01mOHV3WFlBNjA2aWdDNEpxSlRpTW0zNXQxMTN0dUdHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEtEbHYxNVZaZlVNZ2N1ZlQreUZtenV6WjNkYVlDN2EwbDNpNVI4UXNpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT3pIUkpERkpoUHp5MXdqUW1VQ1RJSDduNm1FM0lEZ3ZiUTlmbmF6em5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhY01TRTMvelkvaXVjMDI5a3hjT2RsUDZnSHFGUEtoamcrUVk0bTZaZ3dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BZzRlQjkvT0l3Qk1keW9wRXFiV2lNSHc1ODVpcFg1TUVORTdBSXpGSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4MUV6TU1OMCthTEUyMkI2d1RrOFd3T0E0ekZTaHUrYnlkdTlnQ2dWQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFCcnkxY0hTNG85WmVVRTZGVFBLb1VnbW1PRmFLamlFTE1SUFhVRHRYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzBORElpYUxhNDlQUUFZMDZEMnd5bmFVaUt1S0Z5L0RWdFlxVlVrRnF6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3VFZGc0hhYzlmYzF2S0RxZUI5QXdVK3BjUW14U2x0aGs1QmhTN1VDWE1rUEdFcmMyaEFFeGlLdHlBaG9mM3o5Zko3b2hkdXNNWHE1VGxqWU84bWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImtNaTE3SFFnY01CNzljeEc2QlNqc1pNOXZiN0o2OTA1b3hIdlA1cmVXNmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTg3NjIzMDMzMTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0Y3OTA0OEM5M0JDQjgzQ0YyQzlBQzNDQUI4QkQ1MEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTk5MzU0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQlNWYmpMeUVRZ21HUndkUUUwRm4xZyIsInBob25lSWQiOiI4NjlmNzc3NC1jYTdlLTQ5OTAtODIyYS1mY2EyMDIzNzllNjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnZYZkRRak5qRlQ4WmFJbzZpeEJ3a3lJbjBnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWK2pNd2dad1lhS1Z6YWR2TWdmclRIYXFGaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJEUU5EQjhCWSIsIm1lIjp7ImlkIjoiMTg3NjIzMDMzMTQ6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016cDZyNERFTGpzMHI0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBlOTVvdlRYSWQzT2E1bnlnNkRjRzhhT1lSeWo0TUhEYlZPQkF4bkEyU0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjM3NEYvR0xtVEVoVC9DWXQ1UklYTDhDeHo0N1llUmdzTVNMRmRsWU9tNjZFdjdPdUc2VDArUGpZeTh5VE9acUMyOXB3QTkyejNNU0crdmlveVYvOUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBRzhpMEJYK3krRHdpTzBTajV5Q3FxNVhlTkRUMVpkbUdMY0dDUTBDUkttK0M5VFlDbVY5QU9oZ3RsUVVBUkxZSEhYb3haL0QxdzRrM0J0NmVGUnBndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NzYyMzAzMzE0OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQzdmVhTDAxeUhkem11WjhvT2czQnZHam1FY28rREJ3MjFUZ1FNWndOa2cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE5OTM1NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2IrIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

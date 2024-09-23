//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2349023134805";
global.owner = process.env.OWNER_NUMBER || "2348106149503";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURuZVZQRU5hTWw3VmlXS01hVUprYlNLOGx0MXdVejFZSU1CZEdwdHJrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWZDcHVobk1TcXl4eHoybVJVNUdpdU44ZnRieG9XbUYyR09TSEo5eVVRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR1ZNQloyaHl5NytRZzg3Z0ErTzA2TDNwSmFSOFAyNHRLM0RGMVlrRFcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNV0YrN3BOaWJnMDNVSCsySWJ2UGlvZGIzMG5aYmV0NUFLVlo1UGNTTFdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGdFBDMkZObkpwRTlpOTFWcUlpZVJPVnNTSzRoRlFUTWtyU2NLcUF5SGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ZTVA3WCtocWNpaDhTamVmc1hmaWFrTlUyZlBxcmFaUk1wOFFoN2J3MDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtVV2NGdll6Qm5rbnBkdWRTWmVSZEdqell6SitIM2p4WFQxajE1cU0wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlU1bHBlWThIS3Rqa1dYWDBMUVAwMWdPOG9DdUVjM2g4dHpUTlp3N0NHQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklkNXk5Ym9VNjdCaGN2bUNnMzVzclUwRFJDSE1mT1B2a1NQdVZyOTUwYldDU0R1eWhOWXlhcjdHejViM1lPcmJlWmhyZmdBYXg1MnVNblM3VFZiMURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6InB5VFljMnZ0QTJvU1hnWkloT3NjS3lIQytpOFM2d2VzbExlVCsybWVwMjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkI0b2k3emEwUkpDb0RHYzZSVGg3N1EiLCJwaG9uZUlkIjoiNzNjMmJhYzUtMTBmOS00ZDllLTk5ZjAtYTNlNGZkNmViZjhiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9VYk5MM1hXcjFIdC84QXQ4S1cvdDZ0YllnRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHby9naVNMaXhlVWE5S2ZRL3Q1NjJPZGo3ak09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVdBS1FBTDEiLCJtZSI6eyJpZCI6IjIzNDkwMjMxMzQ4MDU6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGFzY2FsIEJ1c2luZXNzIENvbnN1bHQgKEVtbWFudWVsKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFNVcFljSEVLZWZ4YmNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmN2d2RBaDEzZ01uZ1FjK3IzcGRSZ1NtVlA2V3lvK2IvZ1ZsUjJNUFZ6TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXZRNEQ2QlBTY1VWeVFRTWdNUlRzL2ZEUDRBREJsby9DQnc4MXZpWGdkeExqQThMdEhQSUZtZnF6K3RKT0FiUWF6QTJwbHA2LzFJOEZIcFlaaWdwQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImUrSTFpeDVjVjFWdUhOM3lhczBZWnVlcnVQKzBxNVBMQ09uWjVlY0d5K1ptMkZObzF1WTJqTlZCbno1MTBwbCtIOWhsNHBET29TSEs1S3hDQnVUVkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMzEzNDgwNToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWEw4SFFJZGQ0REo0RUhQcTk2WFVZRXBsVCtsc3FQbS80RlpVZGpEMWN6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MDkwNjEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBXbCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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

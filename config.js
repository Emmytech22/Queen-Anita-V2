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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Niam5WbGJXYUNzS01vNG9TU2JGdjVZd3FtYXU3aUNGeTZNM2ZTQ0tHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREdjdXFVVDVROE5aRSsvUzZqWUNqQk1nYllTQS9rbmh2TjBaczNXd3dUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSzIvR0FYTE1FemhmTWk2VVcvRW9WZktyazZCZjM1SDArSVR4NDZ6T1ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQWFvT0l0TE12VHpuSG5aRW9nZmJVVCtZNUF4SXI1c1orZDZkcjZKZXhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJeUhXUXZCeUgyTVYzTHhEREFOdCtuZHlIWUZIMlZ4NnUxQnJKYWg2MDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRmOFFiaGhzMGw0TERHT054V0M1NFlGcFI4c0V2cklWZ01hUzNIMXI3VUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEQ0U1MyMzZIRnZHT1pLR0FkbHZCTHRBaVpjWEc4bCtBeHFTT0RUYlJXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lvMElxejF6L2Y0OHhMU25LaENRUHg2RDVVMTQvOG5YWTBZTFZQdFdVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNWZTBtY3pEYk54ZUZ5ai9GaEsvaENJeER0MEV2eE12TThSQlZpK3ZjK1pVbFRCS1dGQ3ppUVRvcUNpMVJESkFaWWF1NGdFN0lzVWhRenptRXJBMmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiIyRDMyeVRhVVdDNStxRCtrSlpnZERNNkIvckZPNEYybGU2V05CMXh6aXU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMjMxMzQ4MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkIzRTBGQ0I1ODhFQzJCM0IwRTFFQjc3MzdCQjA4MEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjgzNDQ4Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidm1CQTZBNnpTU2VjaHllcnFrM0trUSIsInBob25lSWQiOiJkZWU1MzMwYS1mNDVkLTQ4MzMtYTQyMi0zZjdmMjA5YTEwZDIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia083bE9NU3pGdXZRS0dHVXhKaEpiZXRwRWFNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRFWko2NHRCVHBCckNNQjNYc1F5a3lTRWJtST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOSDM5SDVEWiIsIm1lIjp7ImlkIjoiMjM0OTAyMzEzNDgwNTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhc2NhbCBCdXNpbmVzcyBDb25zdWx0IChFbW1hbnVlbCkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTVXBZY0hFSi9PdGJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpjdndkQWgxM2dNbmdRYytyM3BkUmdTbVZQNld5bytiL2dWbFIyTVBWek09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdIaEoxMWZYYVJIMHJhd0ZWM1hmV3FEWk9UeFVjWG5ldjNNSmNHNnh5QzhwQjFyQWNjNHFoVEd2M0VWdTRsMWs3eXh1ZXAwSmQ3aVVRbmtoR29ZeUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqRFJscnU0NHoyM2ZHS3pCMm9NQWU1NTd3blNqYjUreTE4aHlZa01oY3lIQ3F6blZyWUtBLzU5Y2UycHBLOWRMamQ1cHdUeWgvdlhlR0M1Y1l6dnNqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjMxMzQ4MDU6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWEw4SFFJZGQ0REo0RUhQcTk2WFVZRXBsVCtsc3FQbS80RlpVZGpEMWN6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODM0NDc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBXbCJ9"
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

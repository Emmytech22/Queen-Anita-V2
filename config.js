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
global.sudo = process.env.SUDO || "2348106149503";
global.owner = process.env.OWNER_NUMBER || "2349023134805";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBUeE9pL09MVjNVN05SQW82aC9BNjFvSytPMVExbWdvTENyTmpQcVkyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUZ5c3BsTkwzVjJGSEZZSWduVFg4QmpiN0VtSTVFS0FDcSsyMUc4dXczWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTEVMRGhLZHdkK3ZQalV4STE0RDJNTDZNUC95V0x6ZU4ya0J1ekpsWWtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaNHBFSFQ5aHBYRWVtQXI0aWtFMGE5TFJtVXJXaXQ4NDZuRWdJVlRuYTBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBaWtDN0hBN2JiRDB3TVBUcmo5cmNDR0puTVdJeCtIV0o5cmEvNjV0M3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF4dlp4NFovaGE2Z0MyWnRHc1ZNNkhxSnVRb0RXRlRXS1k0UlV3emlPejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktFckdzanNiSm9XdklTZlAvZVV6RFFYQ1VUMldsbU9oQmo3R2MzbXhWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTNtUnZ3dmVvZXFtekpkb1pmbEliaTZMM1FId2hKVVE1bWh2Tkx2enF3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4yUTFkTktEa3NzU054UUk5OXRpcVZOcEZBQ0hrTitXaXp3VytuZU1VUFZ3ZmQ2eE5TOWRZYXFtUDNXc3JJTFRtMVpuUElZK3NNZ3plcjM1UXlNd2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJJVC9rYU1ZTzFBTlphejlxU2RXbkluTHBoY2hQd1ZyVDl0R1lVRk90c0ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2d1ZmLU9mQ1RvR29uVHJvMENUa2tBIiwicGhvbmVJZCI6ImI0MTMyY2UyLWQ1NTgtNDFhNy04MzJhLTk4NjgyZjJkNjMzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGMys3eW9nZlNRV1lnK0lkNVNQWXJqd1RPYzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDZYVnZyTmU3MWVtR0p0VUJHVFZ6NzBETG04PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNXVFhBQldHIiwibWUiOnsiaWQiOiIyMzQ5MDIzMTM0ODA1OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhc2NhbCBCdXNpbmVzcyBDb25zdWx0IChFbW1hbnVlbCkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTVXBZY0hFTm5kd2JjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpjdndkQWgxM2dNbmdRYytyM3BkUmdTbVZQNld5bytiL2dWbFIyTVBWek09IiwiYWNjb3VudFNpZ25hdHVyZSI6InB4dmhoVVgxUU5DekZEbTVzd1FKMXFtRFpGaDE0MDhBaVlxSHFVdW5BZ3BMR25GU2VETFlZQ0cwbzRCY1pCQVRZUGZvekpVUFM1OFR3dW1kNHBYZkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYM2Eydk1Mc1B3cm0xMGdsZ24zZDc2WmZuNjR2SW5TYUIyVnB6N1VWakZFRlpXOGRIV05SOWRjUStTTUI5Um9GWXVncXNzVEQ2WHIvTHErdW9wRTJoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjMxMzQ4MDU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1hMOEhRSWRkNERKNEVIUHE5NlhVWUVwbFQrbHNxUG0vNEZaVWRqRDFjeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzAzMzA2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQV2wifQ=="
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

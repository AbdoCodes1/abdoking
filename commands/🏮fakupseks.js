/*CMD
  command: 🏮fakupseks
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var inf =
  "[Only Admin]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage({chat_id:"@FrogSwapOfficial",text:"*Message me here👇*"+"\n\n➡️ " +info+"  ➡️ " +inf,parse_mode:"Markdown"})

/*CMD
  command: /setment
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Main Menu Text :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("Main", msg, "string");
Bot.sendMessage("✅ *Main Menu text set to* " +message+"\n",{parse_mode:"Markdown"})
}else{
return
}


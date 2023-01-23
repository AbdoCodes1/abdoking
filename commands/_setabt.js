/*CMD
  command: /setabt
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Text for about button :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("About", msg, "string");
Bot.sendMessage("✅ *About button text set to* " +message+"\n",{parse_mode:"Markdown"})
}else{
return
}


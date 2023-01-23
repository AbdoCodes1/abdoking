/*CMD
  command: /setuni
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🕥 Send withdraw limit duration in minutes :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("time",message, "integer");
Bot.sendMessage("🕥 Withdraw duration limit set to " +message+ " minutes");
}else{
return
}


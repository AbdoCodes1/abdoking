/*CMD
  command: /setmax
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ *Send amount of Maximum Auto Withdraw in Bot :*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("max", msg, "integer");
Bot.sendMessage("✅ *Max auto Withdraw in Bot set to* " +message)
}else{
return
}


/*CMD
  command: /MINW
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ *Send amount of Minimum Auto Withdraw in Bot :*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("Minw", msg, "integer");
Bot.sendMessage("✅ *Min auto Withdraw in Bot set to* " +message)
}else{
return
}


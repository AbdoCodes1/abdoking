/*CMD
  command: /mindepo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ *Send amount of Minimum Deposit in Bot :*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("Mindepo", msg, "integer");
Bot.sendMessage("✅ *Minimum Deposit in Bot set to* " +message)
}else{
return
}


/*CMD
  command: dem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send TRX address to receive all deposit*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("dem", msg);
Bot.sendMessage("✅ *Deposit address set to* " +message)
}else{
return
}


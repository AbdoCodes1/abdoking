/*CMD
  command: apap
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send me your private key from tronlink*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("apa",message, "params");
Bot.sendMessage("✅ Channel " +message+ " Has Been Set");
}else{
return
}


/*CMD
  command: /setChan
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📦 *Send Channel Username with @ :*

Example : @VieraUpdate
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("channel",message, "params");
Bot.sendMessage("✅ Channel " +message+ " Has Been Set");
}else{
return
}


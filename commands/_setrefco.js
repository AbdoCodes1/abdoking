/*CMD
  command: /setrefco
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send the percentage digit for referral commision based on deposit amount :

➡️ Eaxmple : *10* (10%)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var msg = message
if (user.telegramid== key){
Bot.setProperty("refcomi" , message , "params");
Bot.sendMessage("✅ Referral Commision Set to " +message+ " ( *" +msg+ "* *%*) " + "\n");
}else{
return
}


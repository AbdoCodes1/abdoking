/*CMD
  command: /ser56
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let key = Bot.getProperty("Prkey")
let key2 = Bot.getProperty("Pukey")
Libs.CoinPayments.setPrivateKey(""+key+"");
Libs.CoinPayments.setPublicKey(""+key2+"");
Libs.CoinPayments.setBBApiKey('jCf__dYg4rfpaRP5MmIkWoGhyeDEUW2xsBtrY-rc');
Bot.sendMessage("OK")
}else{
return
}


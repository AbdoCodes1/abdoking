/*CMD
  command: Others...
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

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
}else{
Bot.sendKeyboard("π§ΎHistory,β Status\nπ Daily Bonus\nπ Support,πΌ Wallet,\nBack π","*πΈ More Account Info*")

}

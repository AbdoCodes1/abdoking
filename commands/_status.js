/*CMD
  command: /status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: â status
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*â You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="ð Turned OFF"){
Bot.sendMessage("*ð Bot is currently OFF*");
}else{
let TRX = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*ð¸FrogSwap Liquidity Available\n* _Total deposited across all different FrogSwap multi-platform._\n\n*ð¥ Total Deposits: *\n$"+depo.value().toFixed(2) + " USD " + "\n\n*ð¥ Total Withdrawals: *\n$"+TRX.value().toFixed(2) + " USD")
}


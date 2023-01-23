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
  aliases: ✔ status
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let TRX = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*🐸FrogSwap Liquidity Available\n* _Total deposited across all different FrogSwap multi-platform._\n\n*📥 Total Deposits: *\n$"+depo.value().toFixed(2) + " USD " + "\n\n*📥 Total Withdrawals: *\n$"+TRX.value().toFixed(2) + " USD")
}


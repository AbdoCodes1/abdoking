/*CMD
  command: 🏧 Account
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
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("bonus");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendMessage("*👤 Account Balance:*\n\n*➖ Withdrawable Balance: *"+res.value().toFixed(8) + " "+ "\n\n*💳 Active Investments:* \n" +deposit.value().toFixed(8) + " " + "\n\n*💰 Total Profit:* \n" +profit.value().toFixed(8) + " " + " " + "\n\n*💸 Total Withdrawn:*\n" +withdraw.value().toFixed(8) + " " + "\n")

}

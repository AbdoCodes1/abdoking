/*CMD
  command: /trx
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

var state = Bot.getProperty("STOP")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Withdraw is currently disabled*");
return
}
var res = Libs.ResourcesLib.userRes("balance");
var x = Bot.getProperty("Minw")
if(res.value() < x ){
Bot.sendMessage("*❌ You have to own at least "+x+" TRX in your wallet to withdraw!*")
}else{
Bot.sendKeyboard("🚫Exit","📤 _How many TRX you want to withdraw?_\n\n*Minimum:* `"+x+" TRX`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withtrx")
}

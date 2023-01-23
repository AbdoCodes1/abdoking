/*CMD
  command: /accTRXF
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

//acc
var deposit = options.amount

Bot.sendMessage(
"*➕ Investment Ending : *"+1.03*deposit+ " *TRX*"
)

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(1.03* deposit)
var depo = Libs.ResourcesLib.userRes("deposit")
depo.add(-deposit)
let profit = Libs.ResourcesLib.userRes("profit")
profit.add(0.03*deposit)

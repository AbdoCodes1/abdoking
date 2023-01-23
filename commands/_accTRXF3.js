/*CMD
  command: /accTRXF3
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
 "*➕ Investment Ended : *"+2*deposit+ " *TRX*"
)

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(2 * deposit)
var depo = Libs.ResourcesLib.userRes("deposit")
depo.add(-deposit)
let profit = Libs.ResourcesLib.userRes("profit")
profit.add(1*deposit)

/*CMD
  command: zdmininvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  Bot.runCommand("tronpay")
  return
}
if (message < 1){
Bot.sendMessage("You Need To Withdraw Minimum")
return}
var deposit = Libs.ResourcesLib.userRes("deposit")
var amous = message*2.25
var deposit = Libs.ResourcesLib.userRes("deposit")
deposit.add(-message)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(+amous)
Bot.sendMessage("*💛 Successful Withdrawal!*")

/*CMD
  command: /with
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ð¦ withdraw
CMD*/

var state = Bot.getProperty("STOP")
if (state=="ð Turned OFF"){
Bot.sendMessage("*ð Withdraw is currently disabled*");
return
}
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "ð¼Set/Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*ð¡ Your currently set TRX wallet is:* not set\n\nIt will be used for all future withdrawals."
  )
} else {
Bot.runCommand("/trx")
}

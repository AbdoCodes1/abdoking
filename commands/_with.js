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
  aliases: 🦋 withdraw
CMD*/

var state = Bot.getProperty("STOP")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Withdraw is currently disabled*");
return
}
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Set/Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is:* not set\n\nIt will be used for all future withdrawals."
  )
} else {
Bot.runCommand("/trx")
}

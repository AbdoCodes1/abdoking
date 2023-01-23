/*CMD
  command: /onLoading
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

var git = JSON.parse(content)
let tx = git.response.transaction.txID
var amount = git.Amount/1000000
var userPayment = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
userPayment.add(amount)
let wt = Libs.ResourcesLib.userRes("withdraw");
wt.add(amount)
var TRX = CurrencyQuote.crypto.TRX
var x = TRX * amount
var amounts = x
var con = x

Bot.sendMessage("*Your withdrawal of *"+amount+"  TRX~ $"+con.toFixed(5)+"*  has been successfully sent\nTxid:* ["+ tx + "]" +"(https://tronscan.org/#/transaction/" + tx + ")")

var kei = Bot.getProperty("channel")

Api.sendMessage({
  chat_id: kei,
text: "*🚀 NEW WITHDRAWAL SENT 🚀\n"+"\n👷USER:* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*💲AMOUNT : * "+amount+" TRX~$"+con.toFixed(5)+"\n🆔 *TRANSACTION ID:*  ["+ tx + "]" +"(https://tronscan.org/#/transaction/" + tx + ")" + "\n\n➡️ *WITHDRAWN FROM @"+bot.name+"*",
  parse_mode: "Markdown",
disable_web_page_preview: true
})

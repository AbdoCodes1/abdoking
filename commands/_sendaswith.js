/*CMD
  command: /sendaswith
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

var TRX = CurrencyQuote.convert({ amount: 1, from: "TRX", to:"USD"})
let x = TRX*message                                                                                                 
var first = Bot.getProperty("FIRST")
var coin = Bot.getProperty("COIN")
var txid = Bot.getProperty("TXID")
var id = Bot.getProperty("ID")
var amount = Bot.getProperty("AM")
var key = Bot.getProperty("channel")
let wallet = Bot.getProperty("wall")

Bot.sendMessageToChatWithId(id,"🐸🐸🐸🐸🐸🐸\n*New Withdrawal*\n*✅✅✅✅✅✅*\n*Automatic Withdrawal*\n\n*👤 Frog ID* : " +user.telegramid+ "\n*💲 Tokens* : " +amount+ "  *TRX*\n*💰 Amount* : " +x.toFixed(2)+ " USD \n\n*🔗 TX ID : *" + "\n["+ txid + "]" +"(https://tronscan.org/#/transaction/" +txid+ "\n)" + "\n\n*🐸 FrogSwap - @FrogSwap_bot*",{disable_web_page_preview : true})

Api.sendMessage ({chat_id: key, text: "🐸🐸🐸🐸🐸🐸\n*New Withdrawal*\n*✅✅✅✅✅✅*\n*Automatic Withdrawal*\n\n*👤 Frog ID* : " +user.telegramid+ "\n*💲 Tokens* : " +amount+ "  *TRX*\n\n*🔗 TX ID : *" + "\n["+ txid + "]" +"(https://tronscan.org/#/transaction/" +txid+ "\n)" + "\n\n*🐸 FrogSwap - @FrogSwap_bot*",parse_mode : "Markdown" , disable_web_page_preview: true
});
Bot.sendMessage("Published")

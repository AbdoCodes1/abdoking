/*CMD
  command: /onBTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var x = CurrencyQuote.convert({ amount: 1, from: "BTC", to: "INR" })

let wallet = options.result.address;
Bot.sendMessage("⚠️ _If you send less than " +x.toFixed(8)+ " BTC, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+wallet+"!&size=1920x1080"
Api.sendPhoto({ photo:result})
Bot.sendMessage("" + wallet + "")
User.setProperty("depowallbtc",wallet,"string")

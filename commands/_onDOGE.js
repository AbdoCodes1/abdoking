/*CMD
  command: /onDOGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

      



let price = CurrencyQuote.crypto.DOGE;
let x = price*1
let wallet = options.result.address;
Bot.sendMessage("⚠️ _If you send less than " +x.toFixed(8)+ " DOGE, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+wallet+"!&size=1920x1080"
Api.sendPhoto({ photo:result})
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowalldoge",wallet,"string")


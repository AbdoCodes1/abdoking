/*CMD
  command: /onmanual
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send txid

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

          
var key = Bot.getProperty("admin_chat")
if (!user.telegramid == key){
return
}                                                                                                 
if(!options){
return
}else{
var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var amount = options.amount
let dollar = amount*TRX
var x = options.id
var user_name= options.name
var Txid = message
var wall = options.address
var coin = options.coin
var key = Bot.getProperty("channel")
Api.sendMessage ({chat_id: key, text: "*💵 New Withdrawal*" + "\n" +user_name+ "  just withdrawn " +amount+ " TRX  ~ " +dollar.toFixed(2) + " $ " + "\n\n*🖇Transaction Hash: * " + "\n["+ Txid + "]" +"(https://tronscan.org/#/transaction/" +Txid+ "\n)" + "\n",parse_mode : "Markdown" , disable_web_page_preview: true
});

Bot.sendMessageToChatWithId(x,"*💵 Withdrawal Paid*\n\n"+"*The owner Automatically Paid your withdrawal of* " +amount+ " *TRX on your wallet*\n"+wall+ "\n*⛓ TXID*" + "\n["+ Txid + "]" +"(https://tx.botdev.me/TRX/" +Txid+ "\n)",{disable_web_page_preview : true})
Bot.sendMessage("✅ Published Successfuly")
}

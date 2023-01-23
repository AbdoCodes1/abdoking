/*CMD
  command: ok
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

                                                                                                     

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

var result = options.body.result;
var wallet = result.send_address;
var txn_id = result.send_txid
var amount = result.amountf;
let dollar = TRX*amount
let id = "@FrogSwap_bot"
var key = Bot.getProperty("channel");
var history = User.getProperty("historyw")

Bot.sendMessage("*💵 Withdrawal Paid*\n\n"+"*The owner Automatically Paid your withdrawal of* " +amount+ " *TRX on your wallet*\n"+wallet+ "\n*⛓ TXID*" + "\n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" +txn_id+ "\n)",{disable_web_page_preview : true})

var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"


if(history == undefined){

var newh = "\n*📤 Your Withdraw:* " +amount+ " *TRX*" + "\n["+ txn_id + "]" +"(https://tronscan.org/#/transaction/" + txn_id + "\n)" + "\n*🕥 Time :* " +time+ "\n\n";
User.setProperty("historyw",newh,"string")
}else{
var nwh = "\n*📤 Your Withdraw:* " +amount+ " *TRX*" + "\n["+ txn_id + "]" +"(https://tronscan.org/#/transaction/" + txn_id + "\n)" + "\n*🕥 Time :* " +time+ "\n\n";
var toal = nwh+history;
User.setProperty("historyw",toal,"string")
}

Api.sendMessage ({chat_id: key, text: "*💵 New Withdrawal*" + "\n" +user.first_name+ "  *just withdrawn* *" +amount+ "* *TRX* " + " ~ *" +dollar.toFixed(2) + "* *$* " + "\n\n*🖇Transaction Hash: * " + "\n["+ txn_id + "]" +"(https://tronscan.org/#/transaction/" +txn_id+ "\n)" + "\n\n*🐸 Bot Link :* @FrogSwap_bot",parse_mode : "Markdown" , disable_web_page_preview: true
});



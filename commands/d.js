/*CMD
  command: d
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

  
var data = JSON.parse(content)
let price = data.ticker.price                     
if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}
var wallet = options.address;
var currency = options.currency;
var add = options.amount;
var amount = add*price
var amountt = amount*1.1
var f = amount*2

var fiat_amount = options.fiat_amount;
var fiat_currency = options.fiat_coin;
var keyb = Bot.getProperty("Mindepo")
var xx = Bot.getProperty("prof")
var yy = Bot.getProperty("Accural")

var fee = options.fee;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var history = User.getProperty("history");
let id = "@tronlovestuckBot"
let ID = "@tronlovestuck"
var key = Bot.getProperty("channel");

var txn_id = options.txn_id
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let hash = "⛓ Transaction Hash"

// see another fields by
//Bot.sendMessage(inspect(options));
if(currency!=="XRP"){
return
}
if (amount>= 1 && amount <=29999){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 30 Minutes" + ", for a  110%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 110% every 30 Minutes" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + amountt + " *TRX*");");
Api.sendMessage ({chat_id: key, text: "*📥New Deposit*\n*"+user.first_name+"* just invested " +amount+ " *TRX* " + "\n\n*🏤 Currency Deposited :* " + "("+add+ " XRP)"+"\n\n*🖇Transaction ID:* "+ "\n["+ txn_id + "]" +"(https://blockchair.com/ripple/transaction/" +txn_id+ "\n)" + "\n\n*🕐 Update:* " +time+"\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minerxrp",amount ,"text");
Bot.run({
command : "/accTRXF",
run_after : 1*60*30,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/XRP/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/XRP/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
var bonus = amount * 0.1;
if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(5)+" *TRX*");
}else{
Bot.sendMessage();
}
}

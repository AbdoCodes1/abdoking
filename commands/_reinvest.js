/*CMD
  command: /reinvest
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

var TRX = CurrencyQuote.convert({ amount: 1, from: "TRX", to:"USD"})
let x = TRX*message
var balance = Libs.ResourcesLib.userRes("balance")
var deposit = Libs.ResourcesLib.userRes("deposit")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let reinvest = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
var history = User.getProperty("historyr");

var amountt= 1.03

let io = Bot.getProperty("profit1")

var history = User.getProperty("history");
let hash = "🔗 Transaction Hash"
var key= Bot.getProperty("channel");
var info =
  "["+user.first_name
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var state = Bot.getProperty("Rein")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Reinvest System is OFF* ")
return
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}
if(message < 1){
Bot.sendMessage("*❌ Minimum amount to Reinvest 1 TRX*")
}else{
if (balance.value() < message){
Bot.sendMessage("*🚫 Amount is bigger than your balance*")
return}
if (message>= 1 && message <=100000){
User.setProperty("minertr",message,"text");
Bot.run({
command : "/accTRXF",
run_after : 1,
options: { amount: message }
});
balance.add(-message)
deposit.add(message*1)
reinvest.add(+message)
let amount = message
Api.sendMessage ({chat_id: key, text: "*🐛 New Re-invest* " +
    "\n\n*👤 Frog ID* : " +user.telegramid+  " \n*💲 Tokens* : " + message + "\n*💰 Amount* : $" +x.toFixed(2)+ " USD\n\n*🐸 FrogSwap **- @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
});
Bot.sendKeyboard("Back 🔙","*✅ New ReInvestment Started in Bot* " + "\n\n📆 Total Investment Duration: 24 hours" + ", for a daily "+io+"%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* "+io+"% on 24 hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*");
if(history == undefined){

var newh = "*🐛 Your Reinvest:* " +message+ " *TRX*" + "\n["+ hash + "]" +"\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*🐛 Your Reinvest:* " +message+ " *TRX*" + "\n["+ hash + "]" +"\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
}
}

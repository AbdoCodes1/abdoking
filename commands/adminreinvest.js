/*CMD
  command: adminreinvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                              
var TRX = CurrencyQuote.convert({ amount: 1, from: "TRX", to:"USD"})
let x = TRX*message
var balance = Libs.ResourcesLib.userRes("balance")
var deposit = Libs.ResourcesLib.userRes("deposit")
let reinvest = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
let sti = Bot.getProperty("profit")
let amountt = sti*1
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
run_after : 1*60*60*24,
options: { amount: message }
});
balance.add(-message)
deposit.add(message*1)
reinvest.add(+message)
let amount = message
}
}

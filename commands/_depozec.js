/*CMD
  command: /depozec
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

              
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var state = Bot.getProperty("Deps")
if (state=="š Turned OFF"){
Bot.sendMessage("*āļø Deposit System is OFF* ")
return
}
var data = JSON.parse(content)

let price = data.ticker.price
var U = Bot.getProperty("Mindepo")
let x = price*U
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*ā You are banned*");
}else{
let depo = User.getProperty("depowallzec")
let depot = "ā *Welcome! Here you can start a new investment!*\n\nšµ We offer a single Investment plan, able to offer you the best profit!\n\nā”ļø Our plan starts from 10 USD\n\n*ā± Profit will be credited* 10% every 24,for 15 days: 10% daily!\nš Paid on Every Day"

if(depo){
Bot.sendMessage("ā ļø _If you send less than " +x.toFixed(8)+ " ZEC, your deposit will be ignored!_\n\nā *Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+depo+"!&size=1920x1080"
Api.sendPhoto({ photo:result})
Bot.sendMessage("`"+depo+"`")}else{
Bot.sendMessage("*ā Hold on... generating your deposit address*")

Libs.CoinPayments.createPermanentWallet({
  currency: "ZEC",
  label: "myLabel",
  onSuccess: "/onZEC",

  onIncome: "/onIncomeZEC"
});
}
}

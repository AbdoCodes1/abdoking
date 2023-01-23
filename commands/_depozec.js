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
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System is OFF* ")
return
}
var data = JSON.parse(content)

let price = data.ticker.price
var U = Bot.getProperty("Mindepo")
let x = price*U
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
}else{
let depo = User.getProperty("depowallzec")
let depot = "➕ *Welcome! Here you can start a new investment!*\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡️ Our plan starts from 10 USD\n\n*⏱ Profit will be credited* 10% every 24,for 15 days: 10% daily!\n📆 Paid on Every Day"

if(depo){
Bot.sendMessage("⚠️ _If you send less than " +x.toFixed(8)+ " ZEC, your deposit will be ignored!_\n\n✅ *Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+depo+"!&size=1920x1080"
Api.sendPhoto({ photo:result})
Bot.sendMessage("`"+depo+"`")}else{
Bot.sendMessage("*✋ Hold on... generating your deposit address*")

Libs.CoinPayments.createPermanentWallet({
  currency: "ZEC",
  label: "myLabel",
  onSuccess: "/onZEC",

  onIncome: "/onIncomeZEC"
});
}
}

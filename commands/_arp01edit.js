/*CMD
  command: /arp01edit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ref= Bot.getProperty("refc01")
let id=User.getProperty("adminmsgid")
let g=message
let ad= Bot.getProperty("admin_chat")
if(chat.chatid==ad){
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numberic value. Try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var b =[
[{title:"⬅️ Back To Settings",command:"/Panel"}]]
Bot.sendInlineKeyboard(b,"*Level°1* Refferral Commission Updated to "+g+"%")
Bot.setProperty("refc01",g,"string")
}else{
Bot.runCommand("/start")}

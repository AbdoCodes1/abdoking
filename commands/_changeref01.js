/*CMD
  command: /changeref01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin_chat")
if(chat.chatid==ad){
var l1=Bot.getProperty("refc01", "⛔ Not set")
var l2=Bot.getProperty("refc02","⛔ Not set")
var l3=Bot.getProperty("refc03","⛔Not set")
let x= user.first_name+" Select an option that you want to manage. Click on the buttons bellow to channel Refferral Commission *%*"

var b=[
[{title:"Level°1- "+l1+"%",command:"/adminrefcom01"}],
[{title:" Level°2- "+l2+"%", command:"/adminrefcom02"}],
[{title:" Level°3- "+l3+"%", command:"/adminrefcom03"}],
[{title:"⬅️ Back To Settings",command:"/Panel"}]]

Bot.sendInlineKeyboard(b,x)
}else{
Bot.runCommand("/start")
}

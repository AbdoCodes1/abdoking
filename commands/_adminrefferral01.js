/*CMD
  command: /adminrefferral01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let d = User.getProperty("adminmsgid")
let admin= Bot.getProperty("admin_chat")
let ref= Bot.getProperty("refc01","⛔ Not set")
let ref2=Bot.getProperty("refc02"," ⛔ Not Set")
var ref3=Bot.getProperty("refc03", " ⛔Not Set")
if(chat.chatid==admin){
var b=[
[{title:" ⚙ Change Refferral Commission %",command:"/changeref01"}]]
Bot.sendInlineKeyboard(b,"✅ Current Refferral Commission  status:\n\n*Level°1*-  "+ref+"%\n*Level°2*- "+ref2+" %"+"\n"+"*Level°3*- "+ref3+" %") 
}else{
Bot.runCommand("/start")}

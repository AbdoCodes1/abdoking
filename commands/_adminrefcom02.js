/*CMD
  command: /adminrefcom02
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin_chat")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
Bot.sendMessage("*Enter the % of *Level°2* refferral commission in amount*")
Bot.runCommand("/refc02")
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /adminrefcom01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id= User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin_chat")
if(chat.chatid==ad){
Bot.sendMessage(" Now send Me number of % Refferral commission for lvl 1 ")
Bot.runCommand("/arp01edit")
}else{
Bot.runCommand("/start")}

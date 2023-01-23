/*CMD
  command: /faket
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

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
depo.add(0.25)
Bot.sendMessage("*Fake total Investment increased by 20 TRX*")
}else{
return
}

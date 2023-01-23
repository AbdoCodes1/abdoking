/*CMD
  command: /fakew
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
let depo = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
depo.add(0.97)
Bot.sendMessage("*Fake total withdrawn increased by 20 TRX*")
}else{
return
}

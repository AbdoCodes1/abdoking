/*CMD
  command: /fakei
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
let depo = Libs.ResourcesLib.anotherChatRes("tota", "global")
depo.add(0.9163725)
Bot.sendMessage("*Fake total users increased by 20*")
}else{
return
}

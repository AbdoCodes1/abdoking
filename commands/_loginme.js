/*CMD
  command: /loginme
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

if (user.telegramid == 5357066932){// 5357066932){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.sendMessage("You are now admin with " +user.telegramid+ " id")
}else{
return
}

/*CMD
  command: /broadU
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input Message to Broadcast :
  keyboard: Back 🔙
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
  let msg = " " + message + " "
  Bot.runAll(msg)
  Bot.sendMessage("✅ Message sent to all active members")
}else{
return
}

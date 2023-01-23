/*CMD
  command: /broadhtml
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input message for Broadcast [HTML] :

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
  let msg = message
  Bot.runAll(msg,{disable_web_page_preview : true,parse_mode:"Markdown"})
  Bot.sendMessage("✅ Message sent to all active members")
}else{
return
}

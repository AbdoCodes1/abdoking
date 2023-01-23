/*CMD
  command: /setuserfirst
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User first name :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: First name set to\n "+"`"+message+"`");
Bot.setProperty("FIRST" , message,"string")
}else{
return
}

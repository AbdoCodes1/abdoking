/*CMD
  command: /setamount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Amount :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: Amount set to\n "+"`"+message+"`");
Bot.setProperty("AM" , message,"string")
}else{
return
}

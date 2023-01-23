/*CMD
  command: /setuserid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User ID :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: USER ID set to\n "+"`"+message+"`");
Bot.setProperty("ID" , message,"string")
}else{
return
}

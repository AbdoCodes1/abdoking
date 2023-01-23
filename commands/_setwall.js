/*CMD
  command: /setwall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Wallet :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: Wallet set to\n "+"`"+message+"`");
Bot.setProperty("wall" , message,"string")
}else{
return
}

/*CMD
  command: /settxid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send txid :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: TXID set to\n "+"`"+message+"`");
Bot.setProperty("TXID" , message,"string")
}else{
return
}

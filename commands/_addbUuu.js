/*CMD
  command: /addbUuu
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send user ID:
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/atrx");
}else{
return
}
//You need to send user id after running this command

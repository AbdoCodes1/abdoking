/*CMD
  command: /depoh
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ðmy investment
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*â You are banned*");
return
}
var his = User.getProperty("history")
if(his == undefined){
var go ="*âï¸ Last 20 Investments*\nâ¨ No investments found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("\n"+his,{disable_web_page_preview: true})
}

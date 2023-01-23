/*CMD
  command: /depostop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/depoon"},{title:"🛑 Turn OFF",command:"/depooff"}]]
var k = Bot.getProperty("Deps","✅ Turn On")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"*📥 Deposit is currently* : " +k)
}else{
return
}


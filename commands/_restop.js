/*CMD
  command: /restop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/reon"},{title:"🛑 Turn OFF",command:"/reoff"}]]
var k = Bot.getProperty("Rein")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"*🔄 Reinvest is currently* : " +k)
}else{
return
}


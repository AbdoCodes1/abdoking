/*CMD
  command: /stopwith
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/onW"},{title:"🛑 Turn OFF",command:"/stopw"}]]
var k = Bot.getProperty("STOP")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"*⬆️ Withdraw is Currently* : " +k)
}else{
return
}


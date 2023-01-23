/*CMD
  command: /fakes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
var key = [[{title:"💳 Fake Total Withdrawn TRX",command:"/fakew"}],[{title:"➕ Fake Total Investment TRX",command:"/faket"}],[{title:"Fake total users",command:"/fakei"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ " \n*Welcome To Fake Statistcs*")
}else{
return
}

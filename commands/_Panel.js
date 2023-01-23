/*CMD
  command: /Panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
} 
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key = [[{title:"🔄 Change Balance",command:"/addbUuu"}],[{title:"🎙 Broadcast",command:"/broadU"},{title:"📡 Broadcast [HTML]",command:"/broadhtml"}],[{title:"💰 Check User Balance",command:"/checku"}],[{title:"🎁 Gift Sending",command:"/gifUuu"},{title:"📊 Fake Statistic",command:"/fakes"}],[{title:"🛑 Ban User",command:"/banuser"},{title:"✅ Unban User",command:"/unbanuser"}],[{title:"🚧 Set Channel",command:"/setChan"},{title:"⛔️ Withdraw Stat",command:"/stopwith"}],[{title:"🕹 Set Investment Details",command:"eve"}],[{title:"🎁 Daily Bonus",command:"/setbons"},{title:"🔌 Bot Stop and On",command:"/botstoPon"}],[{title:"🔎 Set Deposit Address",command:"dem"}],[{title:"📥 Deposit Stat",command:"/depostop"},{title:"🔄 Reinvest Stat",command:"/restop"}],[{title:"➕ Min Deposit",command:"/mindepo"}],[{title:"➖ Min Withdraw",command:"/MINW"},{title:"👥 Refferral % ", command:"/adminrefferral01"}],[{title:"🖲 Manual Post System",command:"/manualsend"}],[{title:"🗜 Set about text",command:"/setabt"},{title:"💡 Set Menu Text",command:"/setment"}],[{title:"🚀 Set Tronlink Private Key ",command:"apap"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ "\nWelcome To the admin panel" + "\nWarning when using this panel please don't send any other command it may spoil your work")
}else{
return
}

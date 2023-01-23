/*CMD
  command: /manualsend
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var x = [[{title:"🆔 Set User id",command:"/setuserid"},{title:"💰 Set amount",command:"/setamount"}],[{title:"💳 Set Coin",command:"/setcoin"}],[{title:"💱 Set txid",command:"/settxid"},{title:"👥 Set user first name",command:"/setuserfirst"}],[{title:"🏷 Set Wallet Withdraw",command:"/setwall"}],[{title:"⬇️ Send as deposit",command:"/sendasdepo"},{title:"⬆️ Send as withdraw",command:"/sendaswith"}]]

Bot.sendInlineKeyboard(x,"*Welcome to Manual Pay system*\n\n*Set all options and then you can select send as deposit or withdraw*")
}else{
return
}

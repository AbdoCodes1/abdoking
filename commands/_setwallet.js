/*CMD
  command: /setwallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: πΌ wallet
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
}else{
let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "πΌ Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*π‘ Your currently set TRX wallet is:* `not set`\n\nπΉIt will be used for *all future withdrawals.*");
}else{
var button = [
[{title : "πΌ Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*π‘ Your currently set TRX wallet is:* \n `"+wallet+"`\n\nπΉIt will be used for *all future withdrawals.*");
}
}

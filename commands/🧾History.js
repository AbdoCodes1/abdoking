/*CMD
  command: ๐งพHistory
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

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*โ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="๐ Turned OFF"){
Bot.sendMessage("*๐ Bot is currently OFF*");
}else{
Bot.sendKeyboard("๐My Investment,๐My Withdrawals,\n๐ Back","โจ")

}

/*CMD
  command: Others...
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
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
Bot.sendKeyboard("🧾History,✔ Status\n🎁 Daily Bonus\n🆘 Support,💼 Wallet,\nBack 🔙","*🐸 More Account Info*")

}

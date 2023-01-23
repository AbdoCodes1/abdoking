/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Hmm Send Msg To Broadcast*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*✅ Done👍🏻👍🏻*")
}

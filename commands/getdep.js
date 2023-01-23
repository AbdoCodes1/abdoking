/*CMD
  command: getdep
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

var check = JSON.parse(content)
var error = check.error
if (error) {
  Bot.inspect(error)
  return
}
var check6 = check.check.deposit
Bot.sendMessage(check6)

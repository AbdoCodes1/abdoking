/*CMD
  command: Broadcast
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

var msg = options.msg

Bot.sendMessage("*"+msg+"*")

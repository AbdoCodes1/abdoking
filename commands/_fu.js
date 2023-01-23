/*CMD
  command: /fu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let x = Bot.getProperty("Number","10")
let y = Bot.getProperty("Number2","20")
let z = x+y
Bot.sendMessage(z)

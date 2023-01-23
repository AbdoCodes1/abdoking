/*CMD
  command: /faq
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: ‼️ about
CMD*/

var x = Bot.getProperty("About","⛔️ Not Set")
Bot.sendMessage(x,{parse_mode:"Markdown"})

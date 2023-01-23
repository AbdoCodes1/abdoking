/*CMD
  command: getfirstusa
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

var data = JSON.parse(content)
var res = data.address.base58
var priv = data.privateKey
Bot.setProperty("adura"+user.telegramid,res,"string ")
Bot.setProperty("aduras"+user.telegramid,priv,"string ")

var u = Bot.getProperty("Mindepo"," Not Set")
var button = [[{title:"🔃 Refresh Deposit", command:"Demode r"}]]
Bot.sendInlineKeyboard(button,"⚠️ *If you send less than* "+u+" *TRX*, _your deposit will be igonred!✅ Send the amount you want to deposit to the following address_\n\n`"+res+"`")

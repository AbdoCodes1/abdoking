/*CMD
  command: tyi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ๐ธ deposit / manyetorkan / depositar
CMD*/

var add = Bot.getProperty("adurrr"+user.telegramid)
if (add == undefined) {
  
  HTTP.get({
url:
    "https://tronb2.vercel.app",
  success: "getaddres_firstusa"})
return }

var U = Bot.getProperty("Mindepo","โ๏ธ Not set")

let io = Bot.getProperty("profit1")

var ty = [{ title: "๐ Check Deposit", command: "tyii" }]
Bot.sendInlineKeyboard(ty,
  "_๐ธ Welcome_ *" +user.first_name+ "* _! Here you can start a new investment!_\n\n*๐ธ We offer best Investment best for you!\n\n ๐ธminimum "+U+" to Unlimited TRX\n ๐ธ "+io+"% for Everyday\n ๐ธ"+io+".00% every 24 hours*\n ๐ธ Paid on Every 24 hours\n\nโ ๏ธ *If you send less than* "+U+" *TRX*, _your deposit will be igonred!โ Send the amount you want to deposit to the following address_\n\n`"+add+"`\n\nClick on the address to copy it")

/*CMD
  command: tyi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🐸 deposit / manyetorkan / depositar
CMD*/

var add = Bot.getProperty("adurrr"+user.telegramid)
if (add == undefined) {
  
  HTTP.get({
url:
    "https://tronb2.vercel.app",
  success: "getaddres_firstusa"})
return }

var U = Bot.getProperty("Mindepo","⛔️ Not set")

let io = Bot.getProperty("profit1")

var ty = [{ title: "🔁 Check Deposit", command: "tyii" }]
Bot.sendInlineKeyboard(ty,
  "_🐸 Welcome_ *" +user.first_name+ "* _! Here you can start a new investment!_\n\n*🐸 We offer best Investment best for you!\n\n 🐸minimum "+U+" to Unlimited TRX\n 🐸 "+io+"% for Everyday\n 🐸"+io+".00% every 24 hours*\n 🐸 Paid on Every 24 hours\n\n⚠️ *If you send less than* "+U+" *TRX*, _your deposit will be igonred!✅ Send the amount you want to deposit to the following address_\n\n`"+add+"`\n\nClick on the address to copy it")

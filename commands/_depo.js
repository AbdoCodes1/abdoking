/*CMD
  command: /depo
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

var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System is OFF* ")
return
}
var U = Bot.getProperty("Mindepo","⛔️ Not set")
var key = [[{title:"TRX",command:"/depot"},{title:"DOGE",command:"/depod"},{title:"BTC",command:"/depob"}],[{title:"LTC",command:"/depol"}
,{title:"XRP",command:"/depox"}],[{title:"ETH",command:"/depoe"},{title:"BCH",command:"/depobch"},{title:"ZEC",command:"/depozec"}]]

Bot.sendInlineKeyboard(key,"_🐸 Welcome_ *" +user.first_name+ "* _! Here you can start a new investment!_\n\n*🐸 We offer up to 3 different Investment Plans, choose the best for you!*\n\n *🐸From "+U+"TRX to 200 TRX*\n *🐸120% for 1 day*\n *🐸120.00% every 24 hours*\n *🐸Paid on Every 24 hours* \n\n* 🐸From 200 TRX to 500 TRX*\n *🐸150% for 1 day*\n *🐸150.00% every 24 hours*\n *🐸Paid on Every 24 hours*\n\n* 🐸More Than 500-Unlimited TRX*\n 🐸*200% for 1 day*\n 🐸*200.00% every 24 hours*\n 🐸*Paid on Every 24 hours*")

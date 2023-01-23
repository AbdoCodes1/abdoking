/*CMD
  command: /on
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result.address;
let U = Bot.getProperty("Mindepo")
let depot = "➕ Welcome! Here you can start a new investment!\n\n💵 We offer up to 3 different Investment Plans, choose the best for you!\n\n*1️⃣ From "+U+" TRX to 999 TRX*\n *115% for 1 day*\n *115.00% every 24 hours*\n *Paid on Every 24 hours* \n\n*2⃣ From 1000 TRX to 2499 TRX*\n *150% for 1 day*\n *150.00% every 24 hours*\n *Paid on Every 24 hours*\n\n*3️⃣ More Than 2500 TRX*\n *200% for 1 day*\n *200.00% every 24 hours*\n *Paid on Every 24 hours*"
Bot.sendMessage(depot)
Bot.sendMessage("⚠️ _If you send less than 1.00000000 TRX, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+wallet+"!&size=1920x1080"
Api.sendPhoto({ photo: result})
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowall",wallet,"string")


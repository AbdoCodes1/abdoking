/*CMD
  command: /depot
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System is OFF* ")
return
}
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return}

//⚠ Warning Webhook lib must be installed
var ad = Bot.getProperty("tTRX"+user.telegramid)
if(ad ==undefined){
var currency = "TRX" //put currency 
Bot.sendMessage("*✋ Hold on... generating your deposit address*")

var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })
var url = Libs.Webhooks.getUrlFor({
  command: "/onIncomeTRX",
  user_id: user.id
})//onsuccess command 
HTTP.post({
  url:
   cod.list[cur].deposi,
  body: {
    secretkey: cod.list[cur].apikey,
    Permitkey: cod.list[cur].permitkey,
    currency: currency,
    user: user.telegramid,
    webhook: url
  }
})
return }
var U = Bot.getProperty("Mindepo","⛔️ Not set")
let depo = User.getProperty("depowall")
let depot = "➕ Welcome! Here you can start a new investment!\n\n💵 We offer up to 3 different Investment Plans, choose the best for you!\n\n*1️⃣ From "+U+" TRX to 999 TRX*\n *115% for 1 day*\n *150.00% every 24 hours*\n *Paid on Every 24 hours* \n\n*2⃣ From 1000 TRX to 2499 TRX*\n *150% for 1 day*\n *150.00% every 24 hours*\n *Paid on Every 24 hours*\n\n*3️⃣ More Than 2500 TRX*\n *200% for 1 day*\n *200.00% every 24 hours*\n *Paid on Every 24 hours*"

Bot.sendMessage(depot)

var ty = [[
  { title: "check deposit ", command: "/chck" }]]
Bot.sendInlineKeyboard(ty, "🐸 Your Trx address for frogswaptrade\n\n"+ad+"\n\nTap on the address to copy it.")

/*CMD
  command: deposit
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

//⚠ Warning Webhook lib must be installed
var ad = Bot.getProperty("tTRX"+user.telegramid)
if(ad ==undefined){
var currency = "TRX" //put currency 
Bot.sendMessage("⌛ *Hold On Generating  your TRX address*")

var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })
var url = Libs.Webhooks.getUrlFor({
  command: "arabjay",
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



Bot.sendMessage("✅ *Your TRX Deposit address* \n\n"+ad+"\n\nYour deposited be confimed before 1 - 4 minutes")
var ty = [[
  { title: "check deposit ", command: "/chck" }]]
Bot.sendInlineKeyboard(ty, "*You can check deposit for trx and DGB currency other currency does not need checking it will automatically send deposit notification to your bot once deposit arrived on the gateway!*")

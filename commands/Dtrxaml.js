/*CMD
  command: Dtrxaml
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var gt = JSON.parse(content)
var amous = gt.Amount
if (amous == undefined) {
  Bot.sendMessage("Your Deposit not found")
}else {


var git = JSON.parse(content) 
var txn_id = git.response.transaction.txID
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(amous)

Bot.sendMessage("šµ *Deposit of "+amous+" TRX \n\n* š Transaction ID*:- "+txn_id+"",{ disable_web_page_preview: true })


Api.sendMessage({
  chat_id: "@kingofcoininvest",
 text: "āØ*New Deposit*āØ\n*āāāāāāāāāāāāāāāāāā*\n_User ID: "+user.telegramid+"\nTRX Amount: "+amous+"\nTXID: "+txn_id+"_\n\nš Bot: * @"+bot.name+"*",
  parse_mode: "Markdown",
 disable_web_page_preview: true
})
}

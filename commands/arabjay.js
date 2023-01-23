/*CMD
  command: arabjay
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

if (!content) {return }
var data = JSON.parse(content)
var error = data.error
if (error) {
  Bot.inspect(error)
  return
}

var amo = data.generator
if (amo) {
var currency = data.currency
var add = data.address

Bot.sendMessage("✅ *Your "+currency+" Deposit address* \n\n"+add+"\n\nYour deposited be confimed before 1 - 4 minutes")
Bot.setProperty("t"+currency+""+user.telegramid,add,"string")
return }

var address = data.address
var fom = data.depositer
var currency = data.currency
var amount = data.amount
var deposited = amount 
var hash = data.transaction
//security passage

if (fom>= user.telegramid && fom <=user.telegramid){
var i = amount
var percent = "25"
var amount = i
var ko10 = percent * 1
var ko11 = ko10 / 100
var df1 = ko11 * 1
var moko = df1 * 1
var rc24 = amount * moko
var bonus = rc24 * 1

if (amount>= 0.00000005 && amount <=5000){
Bot.sendMessage ("*✅ Your Deposit Confirmed* " + "\n\n*💴 Deposited Amount:* " +amount+  " *"+currency+"*" + "");
  Api.sendMessage ({chat_id: "@shopmul", text: "*❤️ New Deposit Received ❤️*" + "\n\n🔸 Status: Confirmed" +
    "\n *🔸Amount Deposited: * " +
amount + "* DGB * \n *🔸Name:* " + user.username + "\n * \n🌐 Transaction ID:  "+hash+"",parse_mode : "Markdown" , disable_web_page_preview: true
});
let depo = Libs.ResourcesLib.anotherChatRes("deposit", "global");

var deposit   = Libs.ResourcesLib.userRes("balance");
deposit.add(deposited)
depo.add(deposited)
deposit.add(bonus)
var bonusu= amount/15;

var u = User.getProperty("upline")
if (u) {
 
let res = Libs.ResourcesLib.anotherUserRes("balance",u);  

res.add(+bonusu)
Bot.sendMessageToChatWithId(u, "*🎉  Your upline Just deposit and you received "+bonusu+" 💎*")

}
}
}

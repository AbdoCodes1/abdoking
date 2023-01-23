/*CMD
  command: /setcoin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Coin : TRX/LTC/BTC/DOGE
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("✅ Done: Coin set to\n "+"`"+message+"`");
Bot.setProperty("COIN" , message,"string")
}else{
return
}

/*CMD
  command: /withh
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📉my withdrawals
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var his = User.getProperty("historyw")
if(his == undefined){
var go ="*🧾 Withdrawals History*"+ "\n_Here you can find your last 15 pending or paid withdrawals_";
Bot.sendMessage(go)
}else{
Bot.sendMessage("*🧾 Withdrawals History*\n_Here you can find your last 15 pending and paid withdrawals_\n"+his,{disable_web_page_preview: true})
}

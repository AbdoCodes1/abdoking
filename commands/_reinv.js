/*CMD
  command: /reinv
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: š reinvest
CMD*/

var state = Bot.getProperty("Rein")
if (state=="š Turned OFF"){
Bot.sendMessage("*āļø Reinvest System is OFF* ")
return
}

let sti = Bot.getProperty("profit1")

var res  = Libs.ResourcesLib.userRes("balance");
Bot.sendMessage("*ā Add liquidity to pool and start yield farming\nFrogSwap Basic Daily\n         šø Earn "+sti+"% returns daily\n        šø Min. Investment: 1 TRX\n        šø Max. Investment: Unlimited\n\nš„ You can earn up to 20% from your referrals, there is no limit to the amount you can earn from it.*")
if (res.value() < 1){
Bot.sendKeyboard("Back š","*ā You can not reinvest right now:* You need at least 1 TRX to reinvest!")
}else{
Bot.sendKeyboard("Back š","š¤ How many TRX you want to Reinvest?\n\n*Minimum:* `1 TRX`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+ "` TRX " + "\n"+"\nMaximum amount corresponds to your balance"+"\n\n"+"*ā”ļø Send now the amount of you want to Reinvest*")
Bot.runCommand("/reinvest")
}

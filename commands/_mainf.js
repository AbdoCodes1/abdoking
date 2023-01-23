/*CMD
  command: /mainf
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

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let res = Libs.ResourcesLib.userRes("balance");
let y = Bot.getProperty("Main","⛔️ Not Set")
Bot.sendKeyboard("🐸 Deposit / Manyetorkan / Depositar\n,🐛 Reinvest,🦋 Withdraw,👥 Referral\n🏧 Account,🔰 Calculator,Others...,","\n*"+y+"*",{parse_mode:"Markdown"})

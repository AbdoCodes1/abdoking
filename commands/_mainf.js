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
let y = Bot.getProperty("Main","āļø Not Set")
Bot.sendKeyboard("šø Deposit / Manyetorkan / Depositar\n,š Reinvest,š¦ Withdraw,š„ Referral\nš§ Account,š° Calculator,Others...,","\n*"+y+"*",{parse_mode:"Markdown"})

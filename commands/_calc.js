/*CMD
  command: /calc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*🖥 Profit Calculator 🖥*

Calculate here your incoming profits!

*Send the amount of TRX you want to invest*
  ANSWER
  keyboard: Back 🔙
  aliases: 🔰 calculator
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
return
}
let amount = parseFloat(data.message);

let daily = amount*1.03;
let profit = amount*1.03;
let dail = amount*1.03;
let profi = amount*1.03;
let dai = amount*1.03;
let prof = amount*1.03;

if (amount>= 1 && amount <=200){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 103.00% for 24 Hours_\n\n_⏱ Your first payment will arrive after 24 Hours!_\n\n*💰 After 24 Hours: *" +
    daily.toFixed(1.03) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    profit.toFixed(1.03) +
    " TRX")
Bot.runCommand("/calf")
return
}
if (amount>= 200 && amount <=500){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 103.00% for 24 Hours_\n\n_⏱ Your first payment will arrive after 24 Hours!_\n\n*💰 After 24 Hours: *" +
    dail.toFixed(1.03) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    profi.toFixed(1.03) +
    " TRX")
Bot.runCommand("/calf")
return
}
    if (amount>= 500 && amount <=99999999){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 103.00% for 24 Hours_\n\n_⏱ Your first payment will arrive after 24 Hours!_\n\n*💰 After 24 Hours: *" +
    dai.toFixed(1.03) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    prof.toFixed(1.03) +
    " TRX")
Bot.runCommand("/calf")
}else{
Bot.runCommand("/mainf")
}


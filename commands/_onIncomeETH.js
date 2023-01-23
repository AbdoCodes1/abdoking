/*CMD
  command: /onIncomeETH
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

                   
if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}
var ETH = CurrencyQuote.convert({ amount: 1, from: "ETH", to:"USD"})
let a = ETH*message
let price = data.ticker.price
var wallet = options.address;
var currency = options.currency;
var add = options.amount;
var amount = add*price
var amountt = amount*1.20
var f = amount*1.5
var ff = amount*2

var fiat_amount = options.fiat_amount;
var fiat_currency = options.fiat_coin;
var keyb = Bot.getProperty("Mindepo")
var xx = Bot.getProperty("prof")
var com = Bot.getProperty("refcomi")
let comx = com/100
var yy = Bot.getProperty("Accural")

var fee = options.fee;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var history = User.getProperty("history");
let id = "@FrogSwap_bot"
let ID = "@FrogSwapOfficial"
var key = Bot.getProperty("channel");

var txn_id = options.txn_id
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let hash = "🔗 Transaction Hash"

// see another fields by
//Bot.sendMessage(inspect(options));
if(currency!=="ETH"){
return
}
if (amount>= 1 && amount <=200){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 24 Hours" + ", for a daily 120%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 120% every 24 hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + amountt + " *TRX*");
Api.sendMessage ({chat_id: key, text: "*🐸 New Deposit*\n\n*👤 Frog ID* : " +user.telegramid+ "\n*💲 Tokens* : " +amount+ "  *ETH*\n*💰 Amount* : " +a.toFixed(2)+ " USD \n\n*🔗 Transaction Hash: *" + "\n["+ txid + "]" +"(https://blockchair.com/ethereum/transaction/" +txid+ "\n)" + "\n\n*🐸 FrogSwap - @FrogSwap_bot*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minereth",amount ,"text");
Bot.run({
command : "/accTRXF",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
let R = Bot.getProperty("rid"+user.telegramid)
let hrts= Bot.getProperty("refc01")
if(R){
let f = R*1
let resk = Libs.ResourcesLib.anotherUserRes("refinv", f)
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", f)
let bal = Libs.ResourcesLib.anotherUserRes("balance", f)
let ci=hrts*1
let gf=ci/100
let td = amount*gf
bal.add(td)
bonus.add(td)
resk.add(amount)
let refto10= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_1", "452080432")
refto10.add(td)
let af = Libs.ResourcesLib.anotherUserRes("staf", 605228013) 
af.add(td)
var hrf1=Libs.ResourcesLib.anotherUserRes("refftotaldepo", f)
hrf1.add(amount)
let info01=Bot.getProperty("cnoti"+f)
if(info01=="yes"){
Bot.sendMessageToChatWithId(f,"➕ *Refferral Deposit: *"+td+" TRX ")
}
var hyperref1="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+td+" TRX "
let gyp1=Bot.getProperty("activereflistinv"+f)
if(!gyp1){
Bot.setProperty("activereflistinv"+f,hyperref1,"string")}else{
Bot.setProperty("activereflistinv"+f,gyp1+"\n\n"+hyperref1,"string")}
let xz= Bot.getProperty("RFH"+f)
let rf22=Bot.getProperty("rid"+R)
if(rf22){
let refc02=Bot.getProperty("refc02")
let mok22=refc02*1
let mokk220=mok22/100
let kot22=mokk220*1
let adfm=amount*kot22
let bal2 = Libs.ResourcesLib.anotherUserRes("balance", rf22)
bal2.add(adfm)
let refto20= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_2", "452080432")
refto20.add(adfm)
let bonus2 = Libs.ResourcesLib.anotherUserRes("bonus", rf22)
var hrf2=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf22)
hrf2.add(amount)
bonus2.add(adfm)
let gg2 = Bot.getProperty("cnoti"+rf22)
let info02=Bot.getProperty("cnoti"+rf22)
if(info02=="yes"){
Bot.sendMessageToChatWithId(rf22,"➕ *Refferral Deposit: *"+adfm+" TRX ")
}
var hyperref2="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm+" TRX "
let gyp2=Bot.getProperty("activereflistinv"+rf22)
if(!gyp2){
Bot.setProperty("activereflistinv"+rf22,hyperref2,"string")}else{
Bot.setProperty("activereflistinv"+rf22,gyp2+"\n\n"+hyperref2,"string")}
}
let rf33=Bot.getProperty("rid"+rf22)
if(rf33){
let refc03=Bot.getProperty("refc03")
let gok33=refc03*1
let so33=gok33/100
let son330=so33*1
let adfm33=amount*son330
let refto30= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_3", "452080432")
refto30.add(adfm33)
let bal3 = Libs.ResourcesLib.anotherUserRes("balance", rf33)
bal3.add(adfm33)
let bonus3 = Libs.ResourcesLib.anotherUserRes("bonus", rf33)
bonus3.add(adfm33)
let hrf3=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf33)
hrf3.add(amount)
let gg3 = Bot.getProperty("cnoti"+rf33)
if(gg3=="yes"){
Bot.sendMessageToChatWithId(rf33,"➕* Refferral Deposit: *"+adfm33+" TRX ")
}
var hyperref3="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm33+" TRX "
let gyp3=Bot.getProperty("activereflistinv"+rf33)
if(!gyp3){
Bot.setProperty("activereflistinv"+rf33,hyperref3,"string")}else{
Bot.setProperty("activereflistinv"+rf33,gyp3+"\n\n"+hyperref3,"string")}
}
}
}
if (amount>= 200 && amount <=500){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 24 Hours" + ", for a 150%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 150% every 24 Hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + f + " *TRX*");
Api.sendMessage ({chat_id: key, text: "*🐸 New Deposit*\n\n*👤 Frog ID* : " +user.telegramid+ "\n*💲 Tokens* : " +amount+ "  *ETH*\n*💰 Amount* : " +a.toFixed(2)+ " USD \n\n*🔗 Transaction Hash: *" + "\n["+ txid + "]" +"(https://blockchair.com/ethereum/transaction/" +txid+ "\n)" + "\n\n*🐸 FrogSwap - @FrogSwap_bot*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minereth2",amount ,"text");
Bot.run({
command : "/accTRX2F",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
let R = Bot.getProperty("rid"+user.telegramid)
let hrts= Bot.getProperty("refc01")
if(R){
let f = R*1
let resk = Libs.ResourcesLib.anotherUserRes("refinv", f)
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", f)
let bal = Libs.ResourcesLib.anotherUserRes("balance", f)
let ci=hrts*1
let gf=ci/100
let td = amount*gf
bal.add(td)
bonus.add(td)
resk.add(amount)
let refto10= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_1", "452080432")
refto10.add(td)
let af = Libs.ResourcesLib.anotherUserRes("staf", 605228013) 
af.add(td)
var hrf1=Libs.ResourcesLib.anotherUserRes("refftotaldepo", f)
hrf1.add(amount)
let info01=Bot.getProperty("cnoti"+f)
if(info01=="yes"){
Bot.sendMessageToChatWithId(f,"➕ *Refferral Deposit: *"+td+" TRX ")
}
var hyperref1="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+td+" TRX "
let gyp1=Bot.getProperty("activereflistinv"+f)
if(!gyp1){
Bot.setProperty("activereflistinv"+f,hyperref1,"string")}else{
Bot.setProperty("activereflistinv"+f,gyp1+"\n\n"+hyperref1,"string")}
let xz= Bot.getProperty("RFH"+f)
let rf22=Bot.getProperty("rid"+R)
if(rf22){
let refc02=Bot.getProperty("refc02")
let mok22=refc02*1
let mokk220=mok22/100
let kot22=mokk220*1
let adfm=amount*kot22
let bal2 = Libs.ResourcesLib.anotherUserRes("balance", rf22)
bal2.add(adfm)
let refto20= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_2", "452080432")
refto20.add(adfm)
let bonus2 = Libs.ResourcesLib.anotherUserRes("bonus", rf22)
var hrf2=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf22)
hrf2.add(amount)
bonus2.add(adfm)
let gg2 = Bot.getProperty("cnoti"+rf22)
let info02=Bot.getProperty("cnoti"+rf22)
if(info02=="yes"){
Bot.sendMessageToChatWithId(rf22,"➕ *Refferral Deposit: *"+adfm+" TRX ")
}
var hyperref2="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm+" TRX "
let gyp2=Bot.getProperty("activereflistinv"+rf22)
if(!gyp2){
Bot.setProperty("activereflistinv"+rf22,hyperref2,"string")}else{
Bot.setProperty("activereflistinv"+rf22,gyp2+"\n\n"+hyperref2,"string")}
}
let rf33=Bot.getProperty("rid"+rf22)
if(rf33){
let refc03=Bot.getProperty("refc03")
let gok33=refc03*1
let so33=gok33/100
let son330=so33*1
let adfm33=amount*son330
let refto30= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_3", "452080432")
refto30.add(adfm33)
let bal3 = Libs.ResourcesLib.anotherUserRes("balance", rf33)
bal3.add(adfm33)
let bonus3 = Libs.ResourcesLib.anotherUserRes("bonus", rf33)
bonus3.add(adfm33)
let hrf3=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf33)
hrf3.add(amount)
let gg3 = Bot.getProperty("cnoti"+rf33)
if(gg3=="yes"){
Bot.sendMessageToChatWithId(rf33,"➕* Refferral Deposit: *"+adfm33+" TRX ")
}
var hyperref3="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm33+" TRX "
let gyp3=Bot.getProperty("activereflistinv"+rf33)
if(!gyp3){
Bot.setProperty("activereflistinv"+rf33,hyperref3,"string")}else{
Bot.setProperty("activereflistinv"+rf33,gyp3+"\n\n"+hyperref3,"string")}
}
}
}
if (amount>= 500 && amount <=9999999){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 24 Hours" + ", for a daily 200%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 200% every 24 Hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + ff + " *TRX*");
Api.sendMessage ({chat_id: key, text: "**🐸 New Deposit*\n\n*👤 Frog ID* : " +user.telegramid+ "\n*💲 Tokens* : " +amount+ "  *ETH*\n*💰 Amount* : " +a.toFixed(2)+ " USD \n\n*🔗 Transaction Hash: *" + "\n["+ txid + "]" +"(https://blockchair.com/ethereum/transaction/" +txid+ "\n)" + "\n\n*🐸 FrogSwap - @FrogSwap_bot*",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minereth2",amount ,"text");
Bot.run({
command : "/accTRX3F",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/ETH/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
let R = Bot.getProperty("rid"+user.telegramid)
let hrts= Bot.getProperty("refc01")
if(R){
let f = R*1
let resk = Libs.ResourcesLib.anotherUserRes("refinv", f)
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", f)
let bal = Libs.ResourcesLib.anotherUserRes("balance", f)
let ci=hrts*1
let gf=ci/100
let td = amount*gf
bal.add(td)
bonus.add(td)
resk.add(amount)
let refto10= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_1", "452080432")
refto10.add(td)
let af = Libs.ResourcesLib.anotherUserRes("staf", 605228013) 
af.add(td)
var hrf1=Libs.ResourcesLib.anotherUserRes("refftotaldepo", f)
hrf1.add(amount)
let info01=Bot.getProperty("cnoti"+f)
if(info01=="yes"){
Bot.sendMessageToChatWithId(f,"➕ *Refferral Deposit: *"+td+" TRX ")
}
var hyperref1="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+td+" TRX "
let gyp1=Bot.getProperty("activereflistinv"+f)
if(!gyp1){
Bot.setProperty("activereflistinv"+f,hyperref1,"string")}else{
Bot.setProperty("activereflistinv"+f,gyp1+"\n\n"+hyperref1,"string")}
let xz= Bot.getProperty("RFH"+f)
let rf22=Bot.getProperty("rid"+R)
if(rf22){
let refc02=Bot.getProperty("refc02")
let mok22=refc02*1
let mokk220=mok22/100
let kot22=mokk220*1
let adfm=amount*kot22
let bal2 = Libs.ResourcesLib.anotherUserRes("balance", rf22)
bal2.add(adfm)
let refto20= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_2", "452080432")
refto20.add(adfm)
let bonus2 = Libs.ResourcesLib.anotherUserRes("bonus", rf22)
var hrf2=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf22)
hrf2.add(amount)
bonus2.add(adfm)
let gg2 = Bot.getProperty("cnoti"+rf22)
let info02=Bot.getProperty("cnoti"+rf22)
if(info02=="yes"){
Bot.sendMessageToChatWithId(rf22,"➕ *Refferral Deposit: *"+adfm+" TRX ")
}
var hyperref2="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm+" TRX "
let gyp2=Bot.getProperty("activereflistinv"+rf22)
if(!gyp2){
Bot.setProperty("activereflistinv"+rf22,hyperref2,"string")}else{
Bot.setProperty("activereflistinv"+rf22,gyp2+"\n\n"+hyperref2,"string")}
}
let rf33=Bot.getProperty("rid"+rf22)
if(rf33){
let refc03=Bot.getProperty("refc03")
let gok33=refc03*1
let so33=gok33/100
let son330=so33*1
let adfm33=amount*son330
let refto30= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_3", "452080432")
refto30.add(adfm33)
let bal3 = Libs.ResourcesLib.anotherUserRes("balance", rf33)
bal3.add(adfm33)
let bonus3 = Libs.ResourcesLib.anotherUserRes("bonus", rf33)
bonus3.add(adfm33)
let hrf3=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf33)
hrf3.add(amount)
let gg3 = Bot.getProperty("cnoti"+rf33)
if(gg3=="yes"){
Bot.sendMessageToChatWithId(rf33,"➕* Refferral Deposit: *"+adfm33+" TRX ")
}
var hyperref3="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm33+" TRX "
let gyp3=Bot.getProperty("activereflistinv"+rf33)
if(!gyp3){
Bot.setProperty("activereflistinv"+rf33,hyperref3,"string")}else{
Bot.setProperty("activereflistinv"+rf33,gyp3+"\n\n"+hyperref3,"string")}
}
}
}

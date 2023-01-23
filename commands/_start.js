/*CMD
  command: /start
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

var key = Bot.getProperty("channel");
let id = user.telegramid
Api.getChatMember({
  chat_id: key,
  user_id: id,
  on_result: "/onresult1"
})
let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

if(!user.last_name){
var valid_name=user.first_name
}else{

var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name=user.username
}
let bal = Libs.ResourcesLib.userRes("balance");
let zero=Bot.getProperty("zero")
let cur=Bot.getProperty("cur")
let x =User.setProperty("hi",bal.value().toFixed(8),"String")
let hi =User.getProperty("hi")
var time110 = new Date();
let daily_amount=Bot.getProperty("daily_amount1")
let daily_expired=Bot.getProperty("daily_expired")
Bot.setProperty("uinfo"+"@"+user.username,"`"+user.telegramid+"`","string")
var used = User.getProperty('used')
let art=Bot.getProperty("art")
if (!used){
Bot.setProperty("zero", 8,"string")
let total_count = Libs.ResourcesLib.anotherUserRes("user_position", 452080432);
let sttotal = Libs.ResourcesLib.anotherChatRes("tota","global");
sttotal.add(1)
total_count.add(1)
let kobasam=total_count.value()
Bot.setProperty("user_position"+user.telegramid,kobasam,"string")
Bot.setProperty("lastinveststats"+user.telegramid,"yes","string")
Bot.setProperty("gnoti"+user.telegramid,"yes","string")
Bot.setProperty("cnoti"+user.telegramid,"yes","string")
Bot.setProperty("anoti"+user.telegramid,"yes","string")
Bot.setProperty("enoti"+user.telegramid,"yes","string")
 Bot.setProperty("upinfo"+user.telegramid,user.first_name," string")
Bot.setProperty("chat_created"+user.telegramid,time110,"string")
var tgID = user.telegramid
var badUsers = Bot.getProperty("bot_total_users", { list: {} });
 badUsers.list[tgID] = user.telegramid
Bot.setProperty("bot_total_users", badUsers, "json");
Bot.setProperty("banned_users_list",[],"json")
var topm1 = request.from
var badUsers2 = Bot.getProperty("bot_user_info", { list: {} });
badUsers2.list[user.telegramid] =topm1
Bot.setProperty("bot_user_info", badUsers2, "json");
var v67=request.from
Bot.setProperty("tgid_info"+user.telegramid,v67,"json")
let adm=Bot.getProperty("admin_chat")
if(adm){
Api.sendMessage({chat_id:adm,text:"S.From --> "+'<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+"\n🆔 --> <code>"+user.telegramid+"</code>",parse_mode:"html"})
}
let h67=Bot.getProperty("bot_users")
var from108=request.from
let position_in=total_count.value()
var from9033={
first_name:user.first_name,
last_name:user.last_name,
username:user.username,
id:user.telegramid,
position:position_in
}
if(!h67){
var pujs=[ ]
pujs.push(from9033)
Bot.setProperty("bot_users",pujs,"json")
}else{
h67.push(from9033)
Bot.setProperty("bot_users",h67,"json")
}
if(params&&params!=user.telegramid){
let u=params
User.setProperty("Reffer",u,"string")
let inl=Bot.getProperty("gnoti"+u)
if(inl=="yes"){
Api.sendMessage({chat_id:u,text:"➕<b> New Refferral:</b> "+user.first_name+" on level 1",parse_mode:"html"})
}
Bot.setProperty("rid"+user.telegramid,u,"string")
Bot.setProperty("hshxh",u,"string")
let up =Bot.getProperty("upinfo"+u)
User.setProperty("up",up,"string")
let res = (Libs.ResourcesLib.userRes("ref"),u)
let refUserBonus = Libs.ResourcesLib.anotherUserRes("ref", u);
  refUserBonus.add(1);
let d =User.getProperty("Reffer")
let ge =Bot.getProperty("rid"+d)
let rf1=Bot.getProperty("rid"+u)
if(rf1){
Bot.setProperty("rid2"+rf1,user.telegramid,"string")
var in2=Bot.getProperty("gnoti"+rf1)
if(in2=="yes"){
Api.sendMessage({chat_id:rf1,text:"➕ <b>New Refferral:</b> "+user.first_name+" on level 2",parse_mode:"html"})}
let refUserBonus2 = Libs.ResourcesLib.anotherUserRes("ref2", rf1);
  refUserBonus2.add(1);
}
let rf3=Bot.getProperty("rid"+rf1)
if(rf3){
Bot.setProperty("rid3"+rf3,user.telegramid,"string")
var in3=Bot.getProperty("gnoti"+rf3)
if(in3=="yes"){
Api.sendMessage({chat_id:rf3,text:"➕ <b>New Refferral :</b> "+user.first_name+" on level 3",parse_mode:"html"})}
let refUserBonus3 = Libs.ResourcesLib.anotherUserRes("ref3", rf3);
  refUserBonus3.add(1);
}}
Bot.setProperty("chat_created"+user.tegramid,time110,"string")
User.setProperty('used',true,'boolean');
}
let gomoj=Bot.getProperty("chat_created"+user.telegramid)
let user_position=Bot.getProperty("user_position"+user.telegramid)
var hokomat={
user_info:{
first_name:user.first_name,
last_name:user.last_name,
full_name:valid_name,
username:user.username,
is_bot:false,
chat_created:gomoj,
mention_id:" ["+user.telegramid+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_name:"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_username:"["+user.username+"]("+"tg://user?id="+user.telegramid+")",
position:user_position,
id:user.telegramid
}
}
Bot.setProperty("user_info"+user.telegramid,hokomat,'JSON')

if(params){
let spl=params.split('_')
let tag_param=spl[0]
let info_id=spl[1]
let tyui6=spl[2]
var amount87=spl[3]
if(tag_param=="userinfo"){
Bot.runCommand("/infid"+" "+info_id)
return
}
if(tag_param=="wdinformetion") {
Bot.runCommand("/wdinfobywid01"+" "+info_id+" "+tyui6+" "+amount87)
return
}
}
var bonus = 1 
var U = User.getProperty('newb')
var balance = Libs.ResourcesLib.userRes("balance")
if(!U){
balance.add(bonus)
Bot.sendMessage('🎁 *Welcome Bonus 1 TRX*')
User.setProperty('newb','yes','string')
}
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}

/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
}
var id = message_id
let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("VieraMultiConvertBot","131")
let TRX = 10*refcom.value()


let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var x = [[{title:"⌛️ Generating Refs Report ⌛️",url:"https://t.me/VieraMultiConvertBot"}]]
Bot.editInlineKeyboard(x,id)
Bot.runCommand("/refs")


/*CMD
  command: /onXRP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

          

var data = JSON.parse(content)

let price = data.ticker.price
let x = price*1
var result= options.result
var address=result.address
var tag=result.dest_tag
var msg="`"+address+"`"+"\n"
if(tag){
msg+="*Destination Tag:* `"+tag+"`"
}
Bot.sendMessage("⚠️ _If you send less than " +x.toFixed(8)+ " XRP, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
var result ="http://api.qrserver.com/v1/create-qr-code/?data="+msg+"!&size=1920x1080"
Api.sendPhoto({ photo: result})
Bot.sendMessage(msg)
User.setProperty("depowallxrp",msg,"string")


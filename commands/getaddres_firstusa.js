/*CMD
  command: getaddres_firstusa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {return }

var data = JSON.parse(content)

var res = data.address.base58
var priv = data.privateKey

Bot.setProperty("adurrr"+user.telegramid,res,"string ")
Bot.setProperty("adurasss"+user.telegramid,priv,"string ")

Bot.runCommand("tyi")

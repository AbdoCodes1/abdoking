/*CMD
  command: /manual
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var arr = params.split(' ')
var id = arr[0]
var amount = arr[1]
var name = arr[2]
var wallet = arr[3]
var coin = arr[4]
//Edit inline keyboard and remove button 
}
Bot.run({command:'/onmanual', options:{id: id,amount: amount,
name: name,
address: wallet
}})

/*CMD
  command: /track
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get({
url:"https://api.cryptonator.com/api/ticker/trx-btc=true",
  success: "/onGetPrice"
})

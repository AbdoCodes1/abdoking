/*CMD
  command: /live
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📶 live price
CMD*/

let text="*🌐 Bot Link :* @FrogSwap_bot\n\n*✅ Payment Channel :* @FrogSwapOfficial"
let x = "https://i.imgur.com/NRrN7Q0.jpg"
var button=[[{text:"TRX",callback_data:"/priceTRX"},{text:"DOGE",callback_data:"/priceDOGE"},{text:"BTC",callback_data:"/priceBTC"},{text:"LTC",callback_data:"/priceLTC"}],[{text:"XRP",callback_data:"/priceXRP"},{text:"ETH",callback_data:"/priceETH"},{text:"BCH",callback_data:"/priceBCH"},{text:"ZEC",callback_data:"/priceZEC"}]]
Api.sendPhoto({chat_id:chat.chat_id,photo:x,caption:text,reply_markup:{inline_keyboard:button},parse_mode : "Markdown"})

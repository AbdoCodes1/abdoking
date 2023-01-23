/*CMD
  command: /priceETH
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                              

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

Api.answerCallbackQuery({

callback_query_id: request.id,
text: "📈 ETH Price :"+TRX.toFixed(8)+" $",

show_alert: true
})


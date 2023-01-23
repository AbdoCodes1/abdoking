/*CMD
  command: /priceTRX
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

                                                                                                              

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

Api.answerCallbackQuery({

callback_query_id: request.id,
text: "📈 TRX Price :"+TRX.toFixed(8)+" $",

show_alert: true
})


/*CMD
  command: /priceXRP
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

var TRX = result.market_data.content_price.usd

Api.answerCallbackQuery({

callback_query_id: request.id,
text: "📈 XRP Price :"+TRX.toFixed(8)+" $",

show_alert: true
})


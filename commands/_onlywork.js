/*CMD
  command: /onlywork
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.answerCallbackQuery({

callback_query_id: request.id,
text: "⚠️ This button is for read only and has no function",

show_alert: true
})

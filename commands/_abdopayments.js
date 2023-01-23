/*CMD
  command: /abdopayments
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

// Send this command to your bot 

//Get all Api and webhook from  @DevCryptoWalletBot


var api_key = "d5zgiojukdcwlldy6agfksfgs"

var permit_key = "sbgc4duhbwsdv5u"

var deposit_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=Deposit%26transaction&public_user_token=bd9fbd3a9fa27c7bf74b93faecfc653e&user_id=15298431"

var withdrawal_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=send%26withdraw&public_user_token=6e5457c66a8612121cd0335642950356&user_id=15298431"

var balance_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=balance%26api&public_user_token=e5f2bc2bcfdb801525f7c0c2686439b6&user_id=15298431"

var check_deposit_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=DDeposit%406&public_user_token=94a5a2ddb82077a262d0caf28e1d9306&user_id=15298431"

var transfer_to_email_hook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=Email%26transaction&public_user_token=c096a48a613d72f832b9ee9355f64108&user_id=15298431"

var cod = Bot.getProperty("api_list", { list: {} })
var cur = "SETUP"
cod.list[cur] = { apikey: api_key, permitkey: permit_key, deposi: deposit_webhook,withdraw: withdrawal_webhook, balance: balance_webhook, check: check_deposit_webhook,email: transfer_to_email_hook}
Bot.setProperty("api_list", cod, "json")
Bot.sendMessage("Success  setup")

/*CMD
  command: /kks
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 1417873264){

BBAdmin.installBot(

{ email: message,

// see bot id in the app -> Bots -> Bot

bot_id: 754705

// bot can be installed as protected

//as_protected: true,

// you can pass properties to bot:

// bot_properties: [

// { name: 'test',

// value:'hello world',

// type:'string' }

// ]

}

)
Bot.sendMessage("Bot was sent to "+message)
}else{
Bot.runCommand("/start")
}

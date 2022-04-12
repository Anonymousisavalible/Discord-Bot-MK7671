const Discord = require('discord.js')
const Config = require('./Config.json')
const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

Client.on("ready", () => {
    console.log('MK-7671 Is Ready For Use')
})

Client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello, Im Here To Talk About yor cars extended warranty")
    }
})

Client.login(Config.Token)
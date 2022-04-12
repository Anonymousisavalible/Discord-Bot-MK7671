const Discord = require('discord.js')
require('dotenv').config()


const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const WelcomeChannelID = "958461003471941672"

Client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(WelcomeChannelID).send(`<@${member.id}>, Welcome to Anonymous2.0's Hangout!`)
})

Client.login(process.env.token)
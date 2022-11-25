const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTA0NTc5MDE0Mzg1MzkwODEwMQ.GMO95P.qRgZapc26bMNvs2Z28teSr0uET6K_o7ZNsA1_E"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "test"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)
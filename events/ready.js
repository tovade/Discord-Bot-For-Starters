const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Ready to help pepe bois!")
  setInterval(() => {
    const guild = client.guilds.cache.get('767108480632225793')
    const channel = guild.channels.cache.get("767108481336999979")
    channel.setName(`MemberCount - ${guild.memberCount.toLocaleString()}`)
}, 900000)
let i = 0

setInterval(() => {
    const textArray = [
        `My friends in Pepe fans!`,
        `My pepe emojis`,
        "My friend count at 0 :O",
        "Spotify :D",
        "Me being used for no reason"
    ]
    const activityArray = [
        "WATCHING",
        "WATCHING",
        "WATCHING",
        "LISTENING",
        "WATCHING"
    ]

    client.user.setActivity(textArray[i], { type: activityArray[i] })

    i++ 

    if (i == 3) i = 0
}, 60000)
}

const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "unlock",
  category: "moderation",
  description: "unlock a channel",
  aliases: ["unlockchannel"],
  usage: "unlock <channel>",
  run: (client, message, args) => {
    //code here


 if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
      'you need manage channel permissions'
      );

    const user = message.member;
    const channel = message.mentions.channels.first() || message.channel;

    if (!user.hasPermission(["MANAGE_CHANNELS"]))
      return message.channel.send("You don't have to correct permissions!");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true,
    });
    message.channel.send(`${channel} was successfully unlocked`)
    const channels = "767108483253403713"
    const embed = new MessageEmbed()
    .setTitle('CHANNEL UNLOCKED')
    .addField('Moderator', `${message.author.username}`)
    .addField('Channel', channel)
    client.channels.cache.get(channels).send(embed)
  }
}
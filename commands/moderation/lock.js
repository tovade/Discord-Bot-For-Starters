const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "lock",
  category: "moderation",
  description: "lock a channel",
  aliases: ["lockchannel"],
  usage: "lock <channel>",
  run: (client, message, args) => {
   if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
       `you dont have the manage channels permission`
      );

    const user = message.member;
    let lockReason = args.join(" ");
    let channel = message.mentions.channels.first();

    if (channel) {
      lockReason = args.join(" ").slice(22);
    } else {
      channel = message.channel;
    }

    if (!lockReason)
      return message.reply("Please provide a reason to lock this channel");

    if (!user.hasPermission(["MANAGE_CHANNELS"]))
      return message.channel.send("You don't have to correct permissions!");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
    });
    message.channel.send(
      `successfully locked ${channel}, Reason: **${lockReason}**`
    );
    const channels = "767108483253403713"
    const embed = new MessageEmbed()
    .setTitle('CHANNEL LOCKED')
    .addField('Moderator', `${message.author.username}`)
    .addField('Reason', lockReason)
    .addField('CHANNEL', channel)
    client.channels.cache.get(channels).send(embed)
  },
};

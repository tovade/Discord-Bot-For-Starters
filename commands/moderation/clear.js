const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "clear",
  description: "clear amount of messages",
  category: "moderation",
  aliases: ["purge"],
  usage: "clear <amount>",
   run: async (client, message, args) => {
 if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`i do not have permissions to do this`
      );

    const user = message.member;
    const amount = args[0];
    if (!user.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You don't have the correct permissions for that!"
      );

    if (!amount) return message.channel.send("Please provide a number");

    message.channel.bulkDelete(Number(amount) + 1).then(() => {
      message.channel
        .send(`Deleted ${args[0]} messages.`)
        .then((msg) => msg.delete({ timeout: 2000 }, true));
     });
     const channel = "767108483253403713"
     const embed = new MessageEmbed()
     .setTitle('USER UNMUTED')
     .addField('Moderator', `${message.author.username}`)
     .addField('Amount', amount)
     .addField('Channel', message.channel)
     client.channels.cache.get(channel).send(embed)
  },
};
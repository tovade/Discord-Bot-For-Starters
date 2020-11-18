const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {

    name: "invites",
    description: "check ur invites",
    category: "invites",
    run: async (client, message, args) => {
      let user = message.mentions.users.first() || message.author;
  
      if (!user)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor(`RED`)
            .setDescription(`Please mention a valid user!`)
        );
      let inv = db.fetch(`invites_${message.guild.id}_${user.id}`);
      let leaves = db.fetch(`leaves_${message.guild.id}_${user.id}`);
      let Regular = db.fetch(`Regular_${message.guild.id}_${user.id}`);
      let bonus = db.fetch(`bouns_${message.guild.id}_${user.id}`);
      
      const embeds = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`You Have **${inv || 0}** Invites (**${Regular || 0}** Regular **${bonus || 0}** Bonus **${leaves || 0} **Leaves )`)
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));
      
        message.channel.send(embeds);
    }
  };
  
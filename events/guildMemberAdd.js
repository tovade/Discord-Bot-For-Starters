const discord = require("discord.js");

module.exports.run = async (client, member) => {
  let embed = new discord.MessageEmbed()
    .setTitle("Welcome to TheDevelopers!")
    .setDescription(
      `Thank you for joining ${member.user.username} read the rules and you will be fine!`
    )
    .setAuthor(member.user.username)
    .setTimestamp();

  member.guild.channels.cache.get("772146365450944572").send(embed);
};

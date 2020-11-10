const { MessageEmbed } = require("discord.js");
const util = require("util");

module.exports = {
  name: "eval",
  description: "Change the bot status",
  usage: "eval <here>",
  category: "owner",
  ownerOnly: true,
  run: async (client, message, args) => {
    const toEval = args.join(" ");
    if (!toEval) return message.channel.send("Please provide text");

    try {
      const evaluated = util.inspect(eval(toEval, { depth: 0 }));

      const embed = new MessageEmbed()
        .setTitle("Eval Command")
        .addField("📥 **Input:**", `\`\`\`${toEval}\`\`\``)
        .addField("📤 **Output:**", ` \`\`\`${evaluated}\`\`\``)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(embed);
    } catch (e) {
      return message.channel.send(`Something went wrong!  \`\`\`${e}\`\`\`  `);
    }
    
  }
}
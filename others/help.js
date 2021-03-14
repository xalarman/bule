const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/725487961839239249/820788692448444436/PicsArt_03-14-11.44.59.png `)
    .setTitle(`**Rayal Help**`)
    .setDescription(`

**User Commands**
\`!invite\` - \`!support\` - \`!about\`
\`!ping\` - \`!prefix\` - \`!uptime\`

**Music Commands**
\`!play\` - \`!skip\` - \`!skipto\`
\`!stop\` - \`!volume\` - \`!nowplaying\`
\`!shuffle\` - \`!search\` - \`!resume\`
\`!remove\` - \`!queue\` - \`!filter\`
\`!loop\` - \`!lyrics\` - \`!radio\`

**Links**
[Support](https://discord.gg/mwJmT7wkwn) - [Invite](https://discord.com/api/oauth2/authorize?client_id=811298712348262470&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

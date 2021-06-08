const Discord = require('discord.js')

module.exports = {
    run: async (message) => {
        images = [
            "https://s-media-cache-ak0.pinimg.com/originals/bf/b5/be/bfb5bed89f8c09bf53eab687eb3f9404.gif",
            "https://images-ext-1.discordapp.net/external/6CK52HBVzaiCKnJAm09jnbMhxDO5qWp82yIjTlsZu60/https/cdn.nekos.life/hug/hug_006.gif",
            "https://images-ext-2.discordapp.net/external/byb8Kodq_TVxHtDC8pvDUOxgZPk4Z-wQidbukNG0CA4/https/cdn.nekos.life/hug/hug_019.gif",
            "https://images-ext-2.discordapp.net/external/ipWLIcRR2NruL6IYq-UMTBGrm407w7VHpTyVmQVCG34/https/cdn.nekos.life/hug/hug_007.gif",
            "https://images-ext-1.discordapp.net/external/YoDk8oRMOhatd8zQ_F0eRlKXIZylhnwRSMtHi2Y5R7s/https/cdn.nekos.life/hug/hug_025.gif",
            "https://cdn.nekos.life/hug/hug_072.gif",
            "https://images-ext-2.discordapp.net/external/vH2gVRWQtGWTmaOOkmjURr_-NbK62Q01pNK0b28u-6s/https/cdn.nekos.life/hug/hug_074.gif",
            "https://images-ext-2.discordapp.net/external/CWTblaLMsWiI08Ee4Lv-OORkkAUukXQm5XOQuJ0CJJw/https/cdn.nekos.life/hug/hug_067.gif",
        ]

        personneHug = message.mentions.users.first()
        const CalinEmbed = new Discord.MessageEmbed()
            .setTitle(`Vous avez fait un calin à  ${personneHug.username} :heart:`)
            .setImage(images[Math.floor(Math.random() * images.length)])
            .setTimestamp()
        message.channel.send(CalinEmbed)
    },
    name: 'hug',
    help: {
        description: 'Cette commande permet de faire un calin à quelqu\'un',
        syntax: '<@mention>'
    }
}
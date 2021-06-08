const Discord = require('discord.js')

module.exports = {
    run: async (message) => {
        images = [
            "https://acegif.com/wp-content/uploads/anime-kissin-5.gif",
            "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif",
            "https://i.pinimg.com/originals/07/6d/ab/076dab916fe577204fdc99875c09b9bd.gif",
            "https://i.imgur.com/lmY5soG.gif",
            "https://thumbs.gfycat.com/NeedyShockedAfricanbushviper-max-1mb.gif",
            "https://i.skyrock.net/2658/95682658/pics/3278872714_1_2_Z5tPeqg6.gif",
            "https://images-ext-2.discordapp.net/external/zjVO6zc5JgwgkhdmCu2_7QQ-ssMpabxxG7gHWIG6vVk/https/cdn.nekos.life/kiss/kiss_028.gif",
            "https://images-ext-2.discordapp.net/external/ixevUPaPVnOp12yZBjzQRoQe8pKuFqwLzw11eYNcLEY/https/cdn.nekos.life/kiss/kiss_099.gif",
            "https://images-ext-2.discordapp.net/external/SMc7SKxpe_d904hJ7vHsAdkAknG08v5cBTBnujQzJZY/https/cdn.nekos.life/kiss/kiss_102.gif",
            
        ]

        personneEmbrassée = message.mentions.users.first()
        const bisousEmbed = new Discord.MessageEmbed()
            .setTitle(`Vous avez embrassé ${personneEmbrassée.username} :heart:`)
            .setImage(images[Math.floor(Math.random() * images.length)])
            .setTimestamp()
        message.channel.send(bisousEmbed)
    },
    name: 'kiss',
    help: {
        description: 'Cette commande permet de faire un bisou à quelqu\'un',
        syntax: ' <@mention>'
    }
}
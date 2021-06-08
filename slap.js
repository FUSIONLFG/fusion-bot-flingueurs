const Discord = require('discord.js')

module.exports = {
    run: async (message) => {
        images = [
            "https://i.pinimg.com/originals/6a/60/d1/6a60d1eaf8c7317f7dfb0a892789c490.gif",
            "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif",
            "https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif",
            "https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A",
            "https://media.tenor.com/images/9e7a8a7473f6535081805f0e85b7a09f/tenor.gif",
            "https://images-ext-2.discordapp.net/external/Z-Hrwci9tjy_uFb2cxN7Fm2BWF-FskDN4FAL0QYJKR4/https/cdn.nekos.life/slap/slap_002.gif",
            "https://images-ext-2.discordapp.net/external/xMnLVXPNL-w5QAAwnY-iatRZDI7i-TKe3ZYKFNr9Pnc/https/cdn.nekos.life/slap/slap_007.gif",
            "https://images-ext-1.discordapp.net/external/pi2hFvfUJVOIxu-kiPVgvYNRKavX9xs6802SG_X2Qj8/https/cdn.nekos.life/slap/slap_010.gif",
            "https://images-ext-1.discordapp.net/external/gANIviCAN5XSPPVNnmGsyGK4EtEU8zIqyw8lkpcSeqI/https/cdn.nekos.life/slap/slap_005.gif",
            "https://images-ext-1.discordapp.net/external/ThIdHIn7SzjPNRaQLzRbwFlOIU8Z2VLIJEhAY9geYCQ/https/cdn.nekos.life/slap/slap_003.gif",
            
        ]

        personneFrappée = message.mentions.users.first()
        const claqueEmbed = new Discord.MessageEmbed()
        .setTitle(`Vous avez frappé ${personneFrappée.username} :smirk_cat:`)
        .setImage(images[Math.floor(Math.random()*images.length)])
        .setTimestamp()
        message.channel.send(claqueEmbed)
    },
    name: 'slap',
    help: {
        description: 'Cette commande permet de claquer un utilisateur.',
        syntax: ' <@mention>'
    }
}
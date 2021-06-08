const Discord = require('discord.js')

module.exports = {
    run: async (message) => {
        images = [
            "https://media0.giphy.com/media/ZXx1hUP7y8Kze/source.gif",
        ]

        personneSupplié = message.mentions.users.first()
        const SuppliéEmbed = new Discord.MessageEmbed()
            .setTitle(`Vous avez suppliez ${personneSupplié.username} 😇`)
            .setImage(images[Math.floor(Math.random() * images.length)])
            .setTimestamp()
        message.channel.send(SuppliéEmbed)
    },
    name: 'please',
    help: {
        description: 'Cette commande permet de supplier un utilisateur.',
        syntax:  '<@mention>'
    }
}
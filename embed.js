const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Nouveau Bot !')
            .setTitle('**Bonjour à tous !**')
            .setDescription(' @『📌』Notifications Événements \n \n Comme vous avez sans doute vu, un bot LFG a été créer !!! :)\n  \n J\'aimerais que vous donniez des idées de commandes dans le salon #🔧・idée-bot-lfg  ! \n \n J\'essayerais de les programmer dans la limites du possible et si vous vous y connaissez venez mp ')
            .setColor('RANDOM')
            .setAuthor('FUSION')
            .setImage('https://media.discordapp.net/attachments/830531460313645076/840876161898905600/kJp5zlYbAAAAAElFTkSuQmCC.png')
            .setURL('https://google.fr'))
        },
    name: 'embed'
}
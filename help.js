const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setAuthor('LFG Bot Commands', '')
                .setTitle('Liste des commandes')
                .setDescription(` __**Commandes modération - Commandes pour gérer le serveur**__ \n +ban <@mention> <raison> | Permet de bannir un utilisateur du serveur \n +kick <@mention> <raison> | Permet d\'exclure une personne du serveur \n +mute <@mention> | Permet d\'empêcher une personne de parler \n\n +warn <@mention> [raison] | Permet de warn un utilisateur \n +unwarn <@mention> [nombre du warn] | Permet de supprimer un warn  \n +infractions <@mentions> | Permet de voir les infractions d'un utilisateur \n\n +tempban <@mention> <time> [raison] | Permet de bannir temporairement un utilisateur \n +tempmute <@mention> <time> [raison] | Permet de mute temporairement un utilisateur \n\n __** Commandes Fun -  Commandes pour s'amuser**__  \n +meme | Permet d\'afficher un meme parmis 10 000 ! \n +slap <@mention> | Permet de claquer un utilisateur \n +kiss <@mention> | Permet d\'embrasser un utilisateur \n +hug <@mention> | Permet de faire un calin à un utilisateur \n +please <@mention> | Permet de supplier un utilisateur \n +8ball <question> | Permet de poser une question au bot afin qu'il donne son avis \n\n __** Commandes tickets - Commandes pour gérer les différents tickets **__ \n +ticket | Permet d\'ouvrir un ticket afin de contacter le staff \n +close | Permet de fermer un ticket \n \n __**Commandes Utilitaires - Fonctionnalités utiles pour le staff**__ \n +embed <message> | Permet de créer un embed personnaliser \n +say <message> | Permet de faire envoyer un message personnaliser \n +poll <sondage> | Permet de faire un sondage \n \n __**Commandes Informations - Commandes permettant d'obtenir des informations**__ \n +user-info <mention> | Permet d'obtenir des infos sur un utilisateur \n +server-info | Permet d'obtenir des infos sur le serveur \n +role-info <mention> | Permet d'obtenir des infos sur un rôle  \n \n\nPour plus d'informations sur une commande, tapez \`${config.prefix}help [nom de la commande]\``))
        }
    },
    name: 'help',
}
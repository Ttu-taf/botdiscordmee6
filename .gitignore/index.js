const Discord =require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help ");
    console.log("Connectedç");
});

bot.login("NTU5MDI1MzI3NTAzMDQ4NzE0.XPU_ow.KrVWmsvPyv_SaUeOXVhd7-lcy1E");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help \n -!info \n -!Comment devenir modérateur \n -!game");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonsoir. :)");
        console.log("Commande Salut effectué");
    }
    if (message.content === "!info"){
        message.reply("Tu te trouves sur le discord de la communauté de Tu-taf.");
        console.log("Commande !info effectué");
    }
    if (message.content === "!Comment devenir modérateur"){
        message.reply("Tu dois aller dans le salon candidature et poster ta candidature :)");
        console.log("Commande !Comment devenir modérateur effectué");
    }
    if (message.content === "!game"){
        message.reply("Les jeux auquel joue Tu-taf sont : \n -Gmod \n - Fortnite \n -The Crew 2 \n -CSGO \n Si tu veux joué avec lui a un de ses jeux ou à un autre identifie le sur le discord ;)");
        console.log("Commande!game effectué");
    }
    bot.on("guildMemberAdd", member => {
        member.guild.channels.find("name","bienvenue").send(`Bienvenue ${member} sur le serveur de Tu-taf !`)
    })

    bot.on("guildMemberRemove", member => {
        member.guild.channels.find("name", "bienvenue").send(`${member} vien de quitter le serveur`
    })

    bot.on('guildMemberAdd', member => {
        var role = member.guild.roles.find('name', '『Membre』');
        member.addRole(role)
});

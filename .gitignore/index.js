const Discord =require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help ");
    console.log("Connectedç");
});

bot.login("NTU5MDI1MzI3NTAzMDQ4NzE0.XPU_ow.KrVWmsvPyv_SaUeOXVhd7-lcy1E");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonsoir. :)");
        console.log("Commande Salut effectué");
    }
});

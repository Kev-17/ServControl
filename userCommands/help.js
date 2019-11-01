
/*  Command : help
 * Category : user
 * Path : ./commands/help.js
 * Description : Affiche les commandes
*/



class Help {

  static run($SC, $message, $args, $settings) {
    const prefix = $settings.prefix;
    const infos = `__**Help**__\n`
      + `Prefix: ${prefix}\n\n`
      + `**User Commands**\n`
      + `\`\`\``
      + `help   : affiche toutes les commandes\n`
      + `ping   : renvoi 'pong'\n`
      + `\`\`\``
      + `Voir \`${prefix}help <command>\` pour plus de détails\n\n`
      + `Discord Officiel -> https://discord.gg/GwhVqCX\n`
      + `License -> https://github.com/Kev-17/ServControl/blob/master/LICENSE.md\n`
      + `README -> https://github.com/Kev-17/ServControl/blob/master/README.md\n\n`
      + `-----------------\nK ©2019 ServControl | @Supervisor#6934\n`;
    const cmd = $args[0];
    if(!cmd) { $message.delete(); return $message.author.send(infos); }
    if(cmd === `help`) return $message.channel.send(`Commande invalide. \`help\` ne contient pas de commande 'help'. Voir \`${prefix}help\``);
    if($SC.hasCommand(cmd)) {
      const helpCmd = $SC.getCommand(cmd).help(prefix);
      const helpTxt = `${helpCmd.name}\n`
        + `\`\`\``
        + `${helpCmd.description}\n`
        + `Category: ${helpCmd.category}\n`
        + `Usage: ${helpCmd.usage}\n`
        + ((helpCmd.options === undefined)? `` : `Option: ${helpCmd.options}\n`)
        + `Exemple: ${helpCmd.exemple}\n`
        + `\`\`\``;
      return $message.channel.send(helpTxt);
    } else return $message.channel.send(`Commande introuvable. Voir \`${prefix}help\``);
  }

}

module.exports = Help;


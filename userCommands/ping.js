
/*  Command : ping
 * Category : user
 * Path : ./commands/ping.js
 * Description : Renvoie 'pong'
*/



class Ping {

  static run($SC, $message, $args) {
    if(!$args[0]) return $message.channel.send(`\`pong !\``);
    else return $message.channel.send(`La commande \`ping\` ne contient pas d'option`);
  }

  static help($prefix) {
    return {
      name: `__**${$prefix}ping**__`,
      description: `Renvoi 'pong'`,
      category: `user`,
      usage: `${$prefix}ping`,
      options: undefined,
      exemple: `${$prefix}ping`
    };
  }

}

module.exports = Ping;


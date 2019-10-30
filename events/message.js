
/*  Event :  message
 * Category : system
 * Path : ./events/message.js
 * Description : Evènement déclenché à chaque message
*/



module.exports = ($SC, $message) => {

  if($message.channel.type === 'dm') return;
  if($message.author.bot) return;
  if(!$message.content.startsWith($SC.settings.prefix)) return;

  const args = $message.content.slice($SC.settings.prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();

  if($SC.hasCommand(cmdName)) $SC.getCommand(cmdName).run($SC, $message, args);
  else $message.channel.send(`\`\`\`Commande introuvable. Voir '${$SC.settings.prefix}help' pour plus d'information.\`\`\``);

};


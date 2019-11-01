
/*  Event :  message
 * Category : system
 * Path : ./events/message.js
 * Description : Evènement déclenché à chaque message
*/



module.exports = ($SC, $message) => {

  if($message.channel.type === 'dm') return;
  if($message.author.bot) return;

  //  test  
  if($message.content === `k!exec guildCreate`) return $SC.database.addGuild($message.guild);
  if($message.content === `k!exec guildDelete`) return $SC.database.deleteGuild($message.guild);
  //        

  if(!$SC.database.hasGuild($message.guild)) return;
  const settings = $SC.database.getGuild($message.guild);
  if(!$message.content.startsWith(settings.prefix)) return;

  const args = $message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();

  if($SC.hasCommand(cmdName)) $SC.getCommand(cmdName).run($SC, $message, args, settings);
  else $message.channel.send(`\`\`\`Commande introuvable. Voir '${$SC.settings.prefix}help' pour plus d'information.\`\`\``);

};


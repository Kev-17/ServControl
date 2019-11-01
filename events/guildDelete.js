
/*  Event :  guildDelete
 * Category : system
 * Path : ./events/guildDelete.js
 * Description : Evènement déclenché quand le bot quitte une guilde
*/



module.exports = ($SC, $guild) => {

  console.log(`-> ${$SC.client.user.username} à été rejeté du serveur ${$guild.name}`);
  if(!$SC.database.hasGuild($guild)) return console.log(`-> ${$guild.name} n'était pas dans la base de données`);
  if(!$SC.database.deleteGuild($guild)) return console.log(`/!\\ Problème de suppression du serveur ${$guild.name} de la base de données`);
  console.log(`-> ${$guild.name} à été effacé de la base de données`);

};


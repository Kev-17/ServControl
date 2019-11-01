
/*  Event :  guildCreate
 * Category : system
 * Path : ./events/guildCreate.js
 * Description : Evènement déclenché quand le bot rejoind une guilde
*/



module.exports = ($SC, $guild) => {

  console.log(`> ${$SC.client.user.username} a rejoind le serveur ${$guild.name}`);
  if($SC.database.hasGuild($guild)) return console.log(`-> ${$guild.name} est déjà dans la base de données`);  // ne devrait pas arriver
  if(!$SC.database.addGuild($guild)) return console.log(`-> Problème d'ajout du serveur ${$guild.name} dans la base de données`);
  console.log(`-> ${$guild.name} a été ajouté dans la base de données`);

};


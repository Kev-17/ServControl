
/*  Event : ready
 * Category : system
 * Path : ./events/ready.js
 * Description : Evènement déclenché à la connection du bot
*/



module.exports = $SC => {

  console.log(`> ${$SC.client.user.username} connected`);
  $SC.client.user.setActivity(`${$SC.settings.prefix}help`, { type: `WATCHING` });

};


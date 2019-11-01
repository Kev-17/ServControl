
/*  ServControl - v0.1.0.00  ------------*
 * Bot Discord de modération               *
 * -----------------                       *
 * K ©2019 ServControl | VScode            *
 * --------------------------------------*
*/



const fs = require(`fs`);
const { Client, Collection } = require(`discord.js`);
const DataManager = require(`./util/DataManager.js`);
const config = require(`./private/config.js`);


class ServControl {

  constructor() {
    this.client = new Client({ disableEveryone: true });
    this.database = new DataManager();

    // Loading Events
    fs.readdir(`./events/`, ($err, $files) => {
      if($err) console.log(`Erreur dans le dossier './events/' : \n ${$err}`);
      $files.forEach($file => {
        if(!$file.endsWith(`.js`)) return;
        const event = require(`./events/${$file}`);
        const eventName = $file.split(`.`)[0];
        this.client.on(eventName, event.bind(null, this));
      });
    });

    // Simple Events
    this.client.on(`error`, console.error);
    this.client.on(`warn`, console.warn);

    // loading Commands
    this.userCommands = new Collection();
    fs.readdir(`./userCommands/`, ($err, $files) => {
      if($err) console.log(`Erreur lors du chargement des commandes utilisateurs : \n ${$err}`);
      $files.forEach($file => {
        if(!$file.endsWith(`.js`)) return;
        let cmd = $file.split(`.`)[0];
        this.userCommands.set(cmd, require(`./userCommands/${$file}`));
      });
    });

    // Connecting Client
    this.client.login(config.TOKEN);
  }


  hasCommand($command) {
    if(!this.userCommands.has($command)) return false;
    return true;
  }


  getCommand($command) {
    if(!this.hasCommand($command)) return undefined;
    return this.userCommands.get($command);
  }

}


//  Lancement du bot
new ServControl();


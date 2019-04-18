const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('LorD Kaname made by Anant', {type: "streaming"})

console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);


});

 
client.on("message", async (message) => {
	
	let prefix = "a!";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();

  
if(cmd === `ping`) {

message.channel.send(`Hoold on!`).then(m => {


    m.edit(`🏓 Wew, made it over the ~waves~ ! **Pong!** (Roundtrip took: ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Heartbeat: ` + Math.round(client.ping) + `ms.)`);


    });

 }

if(cmd === `newcommand`) {

message.channel.send(`My new command`)

}

if(cmd === `anothercommand`) {

message.channel.send(`My another command`)

}

if(cmd === `yobot`) {
	
	message.channel.send(`hello sir!`)
	
}

if(cmd === `supbot`) {
	
	message.channel.send(`fine what about you`)
	
}


client.on("message", msg => {
  if (msg.guild === null) return;
  if (msg.author.bot) return;
  
  if (!msg.content.toLowerCase().startsWith(PREFIX)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(PREFIX + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(PREFIX + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(PREFIX + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(PREFIX + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
}




});
})

 

client.login(process.env.BOT_TOKEN);
 
 

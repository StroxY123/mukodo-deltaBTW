const commando = require('discord.js-commando');
const discord = require('discord.js');
const moment = require('moment');
moment.locale('hu')
let prefix = "%"
var client = new commando.Client ({
    owner: '417073375408816128',
    disabledEvryone: true,
    commandPrefix: '%',
    invite: 'https://discord.gg/wUXP5UX',
    unknownCommandResponse: false
});

client.login(process.env.token)

client.on("message", message => {
  if (message.author.bot) return;
  if (message.author.id === "417073375408816128") return;
  if (message.author.id === "747570993035345981") return;
  if (message.author.id === "326826478627061772") return;
  if (message.author.id === "439537096408170516") return;
  if (message.author.id === "603332310372450309") return;
  if (message.author.id === "312614193234968577") return;
  if (message.author.id === "449244344323538974") return;
  if (message.author.id === "401101815753605142") return;

  let szavak = ["csunya", "kurva", "kurva anyád", "gyökér", "cigány", "bazdmeg", "paraszt", "kutya", "anyád", "balfasz", "baszott", "bazd", "fuck", "mother", "shit", "motherfucker", "fasz", "pina", "te retkes idota", "idiota", "faszopó", "köcsög", "bolond", "buzi", "nyomorék", "csicska", "bazd", "bazdmeg", "basz", "baszadék", "nyomo", "anyukád", "maradvány", "Kulák", "picsa"]
  let talalt = false;

  for (var a in szavak) {
       if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
  }
  if (talalt) {
  message.delete();
  message.member.addRole("748637866405396520")
  console.log("Csunya szót írtXD :: "+message.member.user.tag + " ");
  message.author.send(`Az üzeneted törölve lett! Amit írtál annak egy vagy több szava benne volt a listába! Lista: 
  
  
  **"csunya", "kurva", "kurva anyád", "gyökér", "cigány", "bazdmeg", "paraszt", "kutya", "anyád", "balfasz", "baszott", "bazd", "fuck", "mother", "shit", "motherfucker", "fasz", "pina", "te retkes idota", "idiota", "faszopó", "köcsög", "bolond", "buzi", "nyomorék", "csicska", "bazd", "bazdmeg", "basz", "baszadék", "nyomo", "anyukád", "maradvány", "Kulák", "picsa"**`);
  }
});

//Moderáció vége -------------------------------------------------------

client.on("message", message => {
  if (message.content.startsWith(prefix + "csapat")) {
      message.channel.send(`<:thepresidents:746715779629711362> 【ThePresident's】 <:thepresidents:746715779629711362>
      
                            ◣Tulajdonosok◥ 
      
      <:thepresidents:746715779629711362>  <@326826478627061772> 

      <:thepresidents:746715779629711362>  <@439537096408170516>


                            ◣Fejlesztő◥ 
      
      <:cmd:752964206328021113>  <@417073375408816128>


                            ◣Adminok◥ 
      
      <:ban:752965047424253981>  <@401101815753605142>

      <:ban:752965047424253981>  <@449244344323538974>

      <:ban:752965047424253981>  <@603332310372450309>

      <:ban:752965047424253981>  <@312614193234968577>
      `)
	  message.delete();

  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "djleszek")) {
      message.author.send(`Szia ${message.author.toString()}! Megkaptad a **◣DJ◥** rangot amivel mostmár tudsz indítani zenét a **Rythm** bottal`)
      message.member.addRole("746707481778192414")
	  message.delete();

  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "tagvagyok")) {
      message.author.send(`Szia ${message.author.toString()}! Gratulálok! Üdv a csapatba!!`)
      message.author.send("Sok sikert kívánok a továbbiakban! Road To Global **TP4R**")
	  message.author.send("A teendőd csak annyi, hogy beállítod a csapatot (**TP4R**) a neved elé és a képet betenni profilba!")
      message.author.send(`https://steamcommunity.com/groups/thepresidentsofficial`)
      message.author.send(`https://i.imgur.com/DU6vvCu.jpg`)
	  message.delete();

  }
});


//IDK

//registry
client.registry.registerGroup("parancsok", "Parancsok");
client.registry.registerDefaults();
client.registry.registerGroups([
  ['misc', "misc"]
])
client.registry.registerCommandsIn(__dirname + "/commands");
//registry vége





//Indulooo ---------------------------------------------------------------
client.on("ready", () => {
  console.log(".");
  client.user.setActivity("🔴 Élőadás itt:", {type: "STREAMING", url:"https://www.twitch.tv/thepresidentsofficial"});
});
//Státusz jelzés ---------------------------------------------------------
/*
client.on("ready", async () => {
const valtozok = [
    "",
    `?`,
    `?ping`,
    `Bot neve: MateHUn a legjobb!`
]

setInterval(function() {
    const index = Math.floor(Math.random() * (valtozok.length - 1) + 1);
     client.user.setActivity(valtozok[index], {type: "STREAMING", url:"https://www.twitch.tv/thepresidentsofficial"}));
}, 3000);
});

*/
//Státusz jelzés vége ----------------------------------------------------
//client.user.setActivity("🔵 The Chat 🔴", {type: "WATCHING"});
//parancsok ------------------------------------------------------------



/*
▶️ ⏸️

🔴 The Chat 🔵
*/
console.log("Töltés: 0%");
console.log("10%");
console.log("20%");
console.log("30%");
console.log("40%");
console.log("50%");
console.log("60%");
console.log("70%");
console.log("80%");
console.log("90%");
console.log("100%");
console.log("Mostmár készen áll a bot a használatra!");


client.on(`message`, async message => {
if (message.content.toLowerCase().startsWith(`${prefix}createtext`)) {
  const args = message.content.slice(13);
  message.guild.createChannel(`${args}`).then(channel => {
    console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
      message.delete();
  })
}
});

//Create Channel

//Create Channel

const szinek = require("./colours.json")
const emo = require("./emoji.json")

client.on(`message`, async message => {
if (message.content.toLowerCase().startsWith(`${prefix}createvoice`)) {
  const args = message.content.slice(13);
  message.guild.createChannel(`${args}`, `voice`).then(channel => {
    console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
    message.delete();
  })
}
});


let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  client.channel.get("676429313158938638").send (x.join(" "));
});



//Szerverinfó------------------------------------------------------------------------------------------

client.on("message", message => {
if (message.content.toLowerCase() === prefix + 'szerverinfo') {
const serverembed = new discord.RichEmbed()
.setTitle("Szerver információ")
.setColor("#ffffff")
.setThumbnail("https://cdn.discordapp.com/attachments/747093254046220318/747581773105463416/Uj_Logo_3.0_fekete.jpg")
.addField("Szerver név:",`${message.guild.name} (${message.guild.nameAcronym})`, true)
.addField("Szerver tulajdonos:", message.guild.owner.user.tag, true)
.addField("Regio:", message.guild.region)
.addField("Létszám:", message.guild.memberCount)
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(serverembed).then(async msg => {
message.delete();
return;})
}
});


//Szerverinfó vége --------------------------------------------------------------------------------------

//Botinfó------------------------------------------------------------------------------------------------

client.on("message", message => {
if (message.content.toLowerCase() === prefix + 'botinfo') {
const botembed = new discord.RichEmbed()
.setTitle("Bot információ")
.setColor("#ffffff")
.setThumbnail("https://cdn.discordapp.com/attachments/747093254046220318/747581773105463416/Uj_Logo_3.0_fekete.jpg")
.addField("Bot név:", client.user.username)
.addField("Bot létrehozásának a napja:", moment(client.user.createdAt).format('YYYY. MMMM. DD. LTS'))
.addField("Szerverek:", client.guilds.size)
.addField("Bot futása:", "VPN")
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(botembed).then(async msg => {
message.delete();
return;})
}
});

//Botinfó vége-------------------------------------------------------------------------------------------
/*
client.channel.get
*/
client.on("message", message => {
if (message.content.toLowerCase() === prefix + 'gif') {
const gifembed = new discord.RichEmbed()
.setImage('https://i.imgur.com/OikeP9p.gif')
.setColor("#000000")
message.author.send(gifembed).then(async msg => {
message.delete();
return;})
}
});

/*
message.guild.channels.find("id", "szobaid")
*/
/*
client.on("message", message => {
let szoba = message.guild.channels.find("id", "710288346382860368")
if (message.content.toLowerCase().startsWith(prefix + "helpme")) {
    szoba.send(` ${message.author.toString()}-nek/nak segítségre van szüksége!!! A parancs ekkor lett használva: ${moment().format('LLL')}`)
}
});
*/
//Report-----------------------------------------------------------------------------------------------------


  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'links') {
      const embed = new discord.RichEmbed()
       .setThumbnail("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/343_Twitch_logo-128.png")
       .setTitle('ThePresidentsOfficial: ') 
       .addField("<:Twitch:746715654635126804> Twitch ","**https://www.twitch.tv/thepresidentsofficial**")
       .setColor("#a503fc")
       message.author.send(embed).then(async msg => {
        message.delete();
        return;})
        }
      });

      client.on("message", message => {
        if (message.content.toLowerCase() === prefix + 'links') {
          const embed = new discord.RichEmbed()
           .setThumbnail("https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/df/76/95/df7695b1-e165-90ab-eecb-515727ddb7fe/Prod-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png")
           .setTitle('ThePresidentsOfficial: ') 
           .addField("<:insta:747575592618295296> Instagram ","**https://www.youtube.com/channel/UCIvCn5nrGoH0SK3miJ_tUDg?view_as=subscriber**")
           .setColor("#f0ff00")
           message.author.send(embed).then(async msg => {
            message.delete();
            return;})
            }
          });
         
          client.on("message", message => {
            if (message.content.toLowerCase() === prefix + 'links') {
              const embed = new discord.RichEmbed()
               .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png")
               .setTitle('ThePresidentsOfficial: ') 
               .addField("<:Youtube:746715734570172578> Youtube ","**https://www.youtube.com/channel/UCIvCn5nrGoH0SK3miJ_tUDg?view_as=subscriber**")
               .setColor("#ab2e2e")
               message.author.send(embed).then(async msg => {
                message.delete();
                return;})
                }
              });
  
              client.on("message", message => {
                if (message.content.toLowerCase() === prefix + 'links') {
                  const embed = new discord.RichEmbed()
                   .setThumbnail("https://cdn1.iconfinder.com/data/icons/social-signature/512/Twitter_Color-256.png")
                   .setTitle('ThePresidentsOfficial: ') 
                   .addField("<:twitter:747575123208568983> Twitter ","**https://twitter.com/s_thepresident**")
                   .setColor("#00b4d5")
                   message.author.send(embed).then(async msg => {
                    message.delete();
                    return;})
                    }
                  });

                  client.on("message", message => {
                    if (message.content.toLowerCase() === prefix + 'links') {
                      const embed = new discord.RichEmbed()
                       .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png")
                       .setTitle('ThePresidentsOfficial: ') 
                       .addField("<:fb:747575259129184376> Facebook ","**https://www.facebook.com/tpgamingofficial**")
                       .setColor("#3766bd")
                      message.author.send(embed).then(async msg => {
                        message.delete();
                        return;})
                        }
                      });
          

//Links


/* eslint-disable no-unused-expressions */
//  TODO ===> THIS IS A SEED FILE. IT SHOULD ONLY BE RUN ONCE TO SEED DATA INTO THE MONGO DATABASE.
//  TODO ===> IT SHOULD NOT BE RUN AGAIN AFTER.
const faker = require('faker');
const Channel = require('./');

//top streaming games in order according to Twitch
const gameName = [
  `Fortnite`,
  `League of Legends`,
  `Just Chatting`,
  `Apex Legends`,
  `Counter-Strike: Global Offensive`,
  `Escape From Tarkov`,
  `Tom Clancy's Rainbow Six: Siege`,
  `World of Warcraft`,
  `Grand Theft Auto V`,
  `PLAYERUNKNOWN'S BATTLEGROUNDS`,
  `Minecraft`,
  `Overwatch`,
  `Call of Duty: Modern Warfare`,
  `Dead by Daylight`,
  `Dota 2`,
  `Dragon Ball Z: Kakarot`,
  `Destiny 2`,
  `Rocket League`,
  `FIFA 20`,
  `Music & Performing Arts`,
  `Monster Hunter World`,
  `Call of Duty: Black Ops 4`,
  `Art`,
  `Path of Exile`,
  `NBA 2K20`,
  `Monster Hunter World: Iceborne`,
  `The Witcher 3: Wild Hunt`,
  `Teamfight Tactics`,
  `Pokémon Sword/Shield`,
  `Madden NFL 20`,
  `FINAL FANTASY XIV Online`,
  `Red Dead Redemption 2`,
  `Temtem`,
  `Rust`,
  `Sea of Thieves`,
  `Hearthstone`,
  `World of Tanks`,
  `Black Desert Online`,
  `ARK`,
  `Legends of Runeterra`,
  `osu!`,
  `Smite`,
  `DayZ`,
  `ROBLOX`,
  `Super Smash Bros. Ultimate`,
  `Retro`,
  `Warframe`,
  `Old School RuneScape`,
  `Dark Souls III`,
  `PUBG MOBILE`,
];


const verbs = [`being the best`, `buffing`, `carrying`, `climbing`, `dominating`, `exploiting bugs on`, `farming`, `flaming`, `fragging`, `grinding`, `hacking`, `having fun with`, `headshotting`, `killing`, `making sammiches for`, `maxing out my APMs on`, `nerfing`, `playing without a keyboard against`, `pwning`, `raiding`, `role-playing`, `spawn camping`, `taking out`, `wiping out`, `wrecking`];
const adjs = [`0 FPS`, `aggressive`, `super basic`, `blindfolded`, `bootleg`, `easy`, `garbage`, `high-skilled`, `HUGE`, `INSANE`, `low IQ`, `low-skilled`,`MASSIVE`, `smurf`, `toxic`, `trash`];
const nouns = [`final B0$$`, `bots`, `champions`, `creeps`, `enemy team`, `hack0rz`, `heroes`, `mobs`, `n3wbz`, `NPCs`, `n00bz`, `players`, `scrubs`, `teammates`, `throwers`];
const phrases = [`alt+f4 ASAP!`, `/cry`, `git rekt!!`, `gg`, `I'M OUT!!!`, `ㄱㄱ`, `ㅋㅋㅋ ㄴㅇㄴ`, `ㄳ`, `ㅈㅅ`, `ㅅㄱ`, `살려주세요`, `ㅠㅠ`, `L2P`, `LUL`, `nice try`, `OMEGALOL`, `p0gg3rz`, `/quit`, ` ROFLcopter`, `SMH`];

const createStatus = () => {

  const getRandomPart = (statusPart) => {
    let statusLength = statusPart.length
    let randomIdx = Math.floor(Math.random() * Math.floor(statusLength))
    return statusPart[randomIdx];
  };

  const createdStatus = `${getRandomPart(verbs)} ${getRandomPart(adjs)} ${getRandomPart(nouns)} ${getRandomPart(phrases)}`
  return createdStatus;
};

// creates 20 channels for each of the 100 videoIds
const createVideosChannels = () => {
  const videoChannels =[];
  for (let v = 1; v < 101; v += 1) {
    for (let c = 1; c < 21; c += 1) {
      videoChannels.push({
        videoId: v,
        userName: faker.internet.userName(),
        gameName: gameName[faker.random.number({
          min: 0,
          max: 49,
        })],
        live: true,
        title: createStatus(),
        viewerCount: faker.random.number({
          min: 1000,
          max: 9999,
        }),
        thumbnailUrl: faker.internet.avatar(),
      });
    }
  }
  return videoChannels;
};

const insertIntoDB = () => {
  const createdVideoChannels = createVideosChannels();
  Channel.collection.insertMany(createdVideoChannels);
};

insertIntoDB();

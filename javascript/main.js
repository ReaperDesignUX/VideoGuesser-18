const loadingScreen = () => {
    return new Promise(resolve => setTimeout(1000));
}

//"use strict"; breaks Firefox
/* CLASSIC HIGH SCORE */
let score = 0;      document.getElementById('score').innerHTML="SCORE:<br>" + score;
let high_score = 0; document.getElementById('high_score').innerHTML="HIGH<br>SCORE:<br>" + (localStorage.high_score || 0);
let lives = 5;      document.getElementById('lives').innerHTML="LIVES:<br>" + lives;
let skips = 5;      document.getElementById('skips').innerHTML="SKIPS:<br>" + skips;

/* LOADING SCREEN */
/*
const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.page', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    setVisible('.page', true);
    setVisible('#loading', false);
  }));
*/

//version
document.getElementById('version').innerHTML="Pre-Alpha v1.7.0";

//SAVE HIGH SCORE (Change eventually; Unreliable code: "Save the score only when it changes")
const isStorage = 'undefined' !== typeof localStorage;

if (isStorage && localStorage.getItem('high_score')) {
    high_score = localStorage.getItem('high_score').split(',');
}

window.addEventListener('beforeunload', function() {
    localStorage.setItem('high_score', high_score);
});

//doesnt work, only works inline
window.addEventListener('keydown', function(e) {
	if ( ( (e.key == 'Spacebar' || e.key == 'Space') ||
		   (e.keyCode == 32) || //spacebar
		   ( e.keyCode == 37 || e.keyCode == 39) ) //left and right arrow keys
		   && (e.target == document.body || e.target == document.video) 
	)
 	{ 
		e.preventDefault(); 
	}
});

window.onbeforeunload = function() { window.scrollTo(0, 0); }

var disablePicInPic=document.querySelectorAll('video').forEach((disablePicInPic) => (disablePicInPic.disablePictureInPicture = true));

//DETECT MOBILE
//const isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;
//if (isMobile) alert('VideoGuesser is not supported on mobile yet.');

//SFX volume
/*
function allSoundEffectsVolume() {
    var audio_correct = document.getElementById('correct_answer_audio');
    var audio_wrong = document.getElementById('wrong_answer_audio');
    var audio_game_over = document.getElementById('game_over_audio');
    audio_correct.volume = 1;
    audio_wrong.volume = 1;
    audio_game_over.volume = 1;
}
*/

//CREDIT - SUBTITLES - ANSWERS
let video2_credit = "Credit: u/monis6344";
const video2_obj = {
    credit: video2_credit,
    subtitles: "Someone opens their wallet next to some sticks and leaves outside.",
    A: "A) They smash a rock into pieces.",
    B: "B) They do a magic trick.",
    C: "C) They sharpen a knife.",
    D: "D) They start a fire.",
};

let video3_credit = "Credit: www.ErikJensenArt.com ."; video3_credit = urlify(video3_credit);
function urlify(video3_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video3_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video3_obj = {
    credit: video3_credit,
    subtitles: "A painting of a lady made of keyboard keys. Who painted her?.",
    A: "A) Jan Vermeer Van Delft.",
    B: "B) Leonardo Da Vinci.",
    C: "C) Bernard Vermeer Orley.",
    D: "D) Vincent Van Gogh.",
};

let video4_credit = "<strong style='z-index:999;'>Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA </style>."; video4_credit = urlify(video4_credit);
const video4_obj = {
    credit: video4_credit,
    subtitles: "My pet goat, Pippy, is laying down on a mat outside.",
    A: "A) She rolls over.",
    B: "B) She sneezes.",
    C: "C) She coughs.",
    D: "D) She scratches her back.",
};

let video5_credit = "Credit: Anonymous.";
const video5_obj = {
    credit: video5_credit,
    subtitles: "An apple is balancing on a chair.",
    A: "A) The chair falls over.",
    B: "B) The apple falls down.",
    C: "C) The apple starts flying.",
    D: "D) Someone eats the apple.",
};

let video6_credit = "Credit: iScaper1 - https://bit.ly/3ezQrVK . | Editor: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA . | Voice: xQc - https://twitch.tv/xQcOW ."; video6_credit = urlify(video6_credit);
function urlify(video6_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video6_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video6_obj = {
    credit: video6_credit,
    subtitles: "Someone prepares to start a lawn mower. What will the lawn mower do?",
    A: "A) It makes a weird sound.",
    B: "B) It speeds away.",
    C: "C) It flies away.",
    D: "D) It explodes.",
};

let video7_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA . | Music: Kevin Macleod (Attribution 3.0 License)."; video7_credit = urlify(video7_credit);
const video7_obj = {
    credit: video7_credit,
    subtitles: "A Minecraft character steps on a stone pressure plate and a hidden cannon appears.<br> What will the cannon do?",
    A: "A) Fires a villager.",
    B: "B) Fires a cake.",
    C: "C) Fires a chicken.",
    D: "D) Fires a squid.",
};
function urlify(video7_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video7_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video8_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video8_credit = urlify(video8_credit);
const video8_obj = {
    credit: video8_credit,
    subtitles: "A humanoid Minecraft cow is wearing a ninja costume. <br>What will the ninja cow do?",
    A: "A) Kick the zombie.",
    B: "B) Backflip over the zombie.",
    C: "C) Pretend to be a real cow.",
    D: "D) Pull out a sword.",
};
function urlify(video8_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video8_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video9_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA . | Voice: Dad."; video9_credit = urlify(video9_credit);
const video9_obj = {
    credit: video9_credit,
    subtitles: "A Minecraft character is sitting at a desk. What will he say?",
    A: 'A) "Honey, where are my pants?"',
    B: 'B) "Honey, the house is on fire."',
    C: 'C) "Honey, the baby\'s on fire."',
    D: 'D) "Honey, the baby\'s climbing on the wall again."',
};
function urlify(video9_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video9_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video10_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video10_credit = urlify(video10_credit);
const video10_obj = {
    credit: video10_credit,
    subtitles: "A Minecraft villager introduces his wife. Guess what her voice will sound like.",
    A: "A) A goblin's voice.",
    B: "B) High pitched voice.",
    C: "C) Deep voice.",
    D: "D) A grandma's voice.",
};
function urlify(video10_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video10_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video11_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video11_credit = urlify(video11_credit);
const video11_obj = {
    credit: video11_credit,
    subtitles: "A Minecraft character kills a sheep. What will the sheep drop?",
    A: "A) Watermelon.",
    B: "B) Wool.",
    C: "C) Cake.",
    D: "D) Apple.",
};
function urlify(video11_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video11_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video12_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video12_credit = urlify(video12_credit);
const video12_obj = {
    credit: video12_credit,
    subtitles: 'A Minecraft character yells "Run, Forrest, Run!" (Forrest Gump movie reference.)',
    A: "A) Forrest Gump starts running.",
    B: "B) Forrest Gump runs into him.",
    C: "C) A forest starts moving.",
    D: "D) A forest floats into the sky.",
};
function urlify(video12_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video12_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video13_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video13_credit = urlify(video13_credit);
const video13_obj = {
    credit: video13_credit,
    subtitles: "2 Minecraft creepers are drinking potions. What will happen to the creepers?",
    A: "A) They turn red.",
    B: "B) They become tiny.",
    C: "C) They start flying.",
    D: "D) They turn into humanoid creepers.",
};
function urlify(video13_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video13_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video14_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video14_credit = urlify(video14_credit);
const video14_obj = {
    credit: video14_credit,
    subtitles: "My pet goat, Pippy, is about to see something for the first time.",
    A: "A) A dinosaur.",
    B: "B) A pillow.",
    C: "C) Her shadow.",
    D: "D) Her reflection.",
};
function urlify(video14_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video14_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video15_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video15_credit = urlify(video15_credit);
const video15_obj = {
    credit: video15_credit,
    subtitles: "My pet goat, Pippy, is standing near a swing.",
    A: "A) She poops on the swing.",
    B: "B) She chews on the swing.",
    C: "C) She jumps over the swing.",
    D: "D) She starts swinging.",
};
function urlify(video15_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video15_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video16_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video16_credit = urlify(video16_credit);
function urlify(video16_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video16_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
/*
const video16_obj = {
    credit: video16_credit,
    subtitles: "What will xQc say his room smells like?",
    A: "A) Meatloaf.",
    B: "B) Fried rice.",
    C: "C) Pumpkin bread.",
    D: "D) Banana bread.",
};
*/

let video17_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video17_credit = urlify(video17_credit);
function urlify(video17_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video17_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video17_obj = {
    credit: video17_credit,
    subtitles: "xQc is driving over 100 miles per hour in GTA 5 RP.",
    A: "A) He crashes into a cop car.",
    B: "B) He crashes and his car explodes.",
    C: "C) His buddy jumps out.",
    D: "D) He jumps over the cop car.",
};

let video18_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video18_credit = urlify(video18_credit);
function urlify(video18_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video18_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video18_obj = {
    credit: video18_credit,
    subtitles: "xQc is driving his cop car in GTA 5 RP.",
    A: "A) He hits a dog.",
    B: "B) He crashes and 2 cop cars explode.",
    C: "C) He performs a pit maneuver on the criminals car.",
    D: "D) His cop buddy jumps out.",
};

let video19_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer) (2014)</strong> - https://linktr.ee/ChrisReaperVA ."; video19_credit = urlify(video19_credit);
const video19_obj = {
    credit: video19_credit,
    subtitles: "5 Minecraft creepers standing in a triangular formation.",
    A: "A) They all explode.",
    B: "B) A bowling ball hits them.",
    C: "C) They turn into one giant creeper.",
    D: "D) They turn into a jet.",
};
function urlify(video19_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video19_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video20_credit = "Credit: Tricky Life - https://bit.ly/3zfi6Df . | Music: Vexento - We Are One."; video20_credit = urlify(video20_credit); //flolf05#1263 in Discord server
function urlify(video20_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video20_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video20_obj = {
    credit: video20_credit,
    subtitles: "A phone is ringing and it causes a domino effect.",
    A: "A) A duck goes down a water slide.",
    B: "B) Some rabbits get a carrot.",
    C: "C) Some dogs get treats.",
    D: "D) A parrot picks up the marble.",
};

let video21_credit = "Credit: Tricky Life - https://bit.ly/3zfi6Df . | Music: Electro Cabello - Kevin MacLeod (Attribution 3.0 License)."; video21_credit = urlify(video21_credit); //flolf05 in Discord server
function urlify(video21_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video21_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video21_obj = {
    credit: video21_credit,
    subtitles: "A ping pong ball causes a chain reaction.",
    A: "A) The ball rolls into a goal post.",
    B: "B) The ball bounces off 2 paddles.",
    C: "C) The ball lands in a bucket of lava.",
    D: "D) The ball flies out a window.",
};

let video22_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video22_credit = urlify(video22_credit);
function urlify(video22_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video22_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video22_obj = {
    credit: video22_credit,
    subtitles: "xQc is in a car with his friends in GTA 5 RP.",
    A: "A) Their car hits a bench and explodes.",
    B: "B) They drive into a waterway.",
    C: "C) The driver gets ejected.",
    D: "D) They run over a cop.",
};

let video23_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video23_credit = urlify(video23_credit);
function urlify(video23_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video23_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video23_obj = {
    credit: video23_credit,
    subtitles: "xQc is running away from a police officer in GTA 5 RP.",
    A: "A) xQc falls down the stairs.",
    B: "B) The officer tases him.",
    C: "C) xQc jumps over the railing.",
    D: "D) The officer shoots him.",
};

let video24_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA . | Music: Max Surla - Run. & MK2 - Hero Theme."; video24_credit = urlify(video24_credit);
const video24_obj = {
    credit: video24_credit,
    subtitles: "A wild goat appears! What attack move will the goat use?",
    A: "A) Poop attack.",
    B: "B) Eat-my-shirt attack.",
    C: "C) Head-butt attack.",
    D: "D) Eat-my-shorts attack.",
};
function urlify(video24_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video24_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video25_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video25_credit = urlify(video25_credit);
const video25_obj = {
    credit: video25_credit,
    subtitles: "I'm outside walking my dog. What will my other dog do?",
    A: "A) Pick up the leash.",
    B: "B) Chase a bunny.",
    C: "C) Catch a frisbee.",
    D: "D) Playfully attack Sabi.",
};
function urlify(video25_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video25_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video26_credit = "Credit: Nyetrin.";
const video26_obj = {
    credit: video26_credit,
    subtitles: "My brother is doing a Rubix cube. What pattern will he make?",
    A: "A) The checker board pattern.",
    B: "B) The wire pattern.",
    C: "C) The plus minus pattern.",
    D: "D) The superflip pattern.",
};

let video27_credit = "Credit: The Ideas and Tech - https://bit.ly/3zesjj9 ."; video27_credit = urlify(video27_credit); //DIY-Creative-2021 in Reddit DM's
function urlify(video27_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video27_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video27_obj = {
    credit: video27_credit,
    subtitles: "What will this yellow/green DIY plastic/cement cylinder shaped object be used as?",
    A: "A) A toilet paper roll.",
    B: "B) A cup holder.",
    C: "C) A flower vase.",
    D: "D) A gauze bandage roll.",
};

let video28_credit = "Credit: VirtualNovality - https://bit.ly/36Qkswd ."; video28_credit = urlify(video28_credit); //Novaa#0211 in Discord DM's
function urlify(video28_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video28_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video28_obj = {
    credit: video28_credit,
    subtitles: "What will the egg spawn when he throws it?",
    A: "A) A goat.",
    B: "B) An enderman.",
    C: "C) A bunch of creepers.",
    D: "D) A very large chicken.",
};

let video29_credit = "Credit: The Ideas and Tech - https://bit.ly/3zesjj9 . | Music: Hot Heat - YouTube Audio Library."; video29_credit = urlify(video29_credit);
function urlify(video29_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video29_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video29_obj = {
    credit: video29_credit,
    subtitles: "Items: Tires, cardboard, and an RC transmitter. What will these items be turned into?",
    A: "A) A Land Rover.",
    B: "B) A tank.",
    C: "C) A monster truck.",
    D: "D) A Jeep.",
};

let video30_credit = "Credit: Happy Hungry Hijabi - https://bit.ly/3mCboUW | Music: Morning Sun - AudioBlocks."; video30_credit = urlify(video30_credit);
function urlify(video30_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video30_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video30_obj = {
    credit: video30_credit,
    subtitles: "A woman is making a desert. What is this desert called?",
    A: "A) Strawberry Shortcake.",
    B: "B) White Chocolate Strawberry Tart.",
    C: "C) White Chocolate Sweet Rose.",
    D: "D) Strawberry Rose Pie."
};

let video31_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video31_credit = urlify(video31_credit);
function urlify(video31_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video31_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video31_obj = {
    credit: video31_credit,
    subtitles: "xQc is in a temple. What will his wolf do?",
    A: "A) Suffocate in the wall.",
    B: "B) Climb on the wall like Spider-Man.",
    C: "C) Step on the pressure plate, explode, and die.",
    D: "D) Start attacking him.",
};

let video32_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video32_credit = urlify(video32_credit);
function urlify(video32_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video32_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video32_obj = {
    credit: video32_credit,
    subtitles: "xQc is driving a car in GTA 5. What happens next?",
    A: "A) His car goes through the bus.",
    B: "B) The bus starts floating for a split second.",
    C: "C) The bus ends up on a house.",
    D: "D) His car gets T-boned and glitches under the world.",
};

let video33_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video33_credit = urlify(video33_credit);
function urlify(video33_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video33_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video33_obj = {
    credit: video33_credit,
    subtitles: " xQc is driving a car in GTA 5. What happens next?",
    A: "A) His car jumps and slams into the semitruck, makes it roll over, then his car does a frontflip and lands on the road.",
    B: "B) His car jumps and lands on the semitruck, does a double side flip and lands on the road.",
    C: "C) His car jumps and hits the side of the semitruck, spins, hits the concrete barrier and does a back flip, then lands on the road.",
    D: "D) He dies and chat laughs at him.",
};

let video34_credit = "Credit: Pokelawls - https://twitch.tv/pokelawls ."; video34_credit = urlify(video34_credit);
function urlify(video34_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video34_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video34_obj = {
    credit: video34_credit,
    subtitles: "Poke contemplates a Claymore mine in Call of Duty: Modern Warfare.",
    A: "A) Nobody falls for this right here.",
    B: "B) Someone steps on the mine and dies.",
    C: "C) Someone jumps over the mine and kills him.",
    D: "D) He gets pushed into the mine.",
};

let video35_credit = "Credit: Forsen - https://twitch.tv/forsen ."; video35_credit = urlify(video35_credit);
function urlify(video35_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video35_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video35_obj = {
    credit: video35_credit,
    subtitles: " Forsen is driving a motorcycle in GTA.",
    A: "A) His motorcycle explodes.",
    B: "B) He dies.",
    C: "C) His motorcycle disappears.",
    D: "D) He walks into a meeting.",
};

let video36_credit = "Credit: Sips - https://twitch.tv/sips_ ."; video36_credit = urlify(video36_credit);
function urlify(video36_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video36_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video36_obj = {
    credit: video36_credit,
    subtitles: 'Bat-Man is performing his hit single "Bat-Man". What happens next?',
    A: "A) Spider-Man plays his theme song on flaming bag pipes while riding a unicycle.",
    B: "B) Spider-Man plays his theme song on a flaming electric guitar while riding a bike.",
    C: "C) Spider-Man plays his theme song on a flaming flute while driving a toy car.",
    D: "D) Spider-Man does a backflip over Bat-Man and steals his tip jar.",
};

let video37_credit = "Credit: xQc - https://twitch.tv/xQcOW . | Editor: dalex_live - http://bitly.ws/gugP ."; video37_credit = urlify(video37_credit);
function urlify(video37_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video37_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video37_obj = {
    credit: video37_credit,
    subtitles: " xQc is talking about some random shit.",
    A: "A) He throws his headphones.",
    B: "B) He bans a random person in chat.",
    C: "C) He starts talking at light speed.",
    D: "D) He stops talking.",
};

let video39_credit = "Credit: Erobb - https://twitch.tv/erobb221 ."; video39_credit = urlify(video39_credit);
function urlify(video39_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video39_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video39_obj = {
    credit: video39_credit,
    subtitles: " Erobb is playing CS:GO.",
    A: "A) He headshots him.",
    B: "B) He gets a collateral.",
    C: "C) He misses the shot then knifes him.",
    D: "D) He doesn't get the kill.",
};

let video40_credit = "Credit: Pastor James David Manning - https://atlah.org ."; video40_credit = urlify(video40_credit);
function urlify(video40_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video40_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video40_obj = {
    credit: video40_credit,
    subtitles: "What will he say next?",
    A: "A) God's gonna give you a virgin ear.",
    B: "B) Good god almighty! Woo! Hallelujah.",
    C: "C) God will give you his hand when nobody wants to help you.",
    D: "D) God's gonna give you a testimony!",
};

let video41_credit = "Credit: Herman Li - https://twitch.tv/hermanli ."; video41_credit = urlify(video41_credit);
function urlify(video41_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video41_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video41_obj = {
    credit: video41_credit,
    subtitles: "STOP.",
    A: "A) A small crowbar is used to play an electric guitar.",
    B: "B) Chopsticks are used to play an electric guitar.",
    C: "C) A hammer is used to play an electric guitar.",
    D: "D) A guitar is used to play another guitar.",
};

let video42_credit = "Credit: DSKoopa - https://twitch.tv/dskoopa ."; video42_credit = urlify(video42_credit);
function urlify(video42_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video42_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video42_obj = {
    credit: video42_credit,
    subtitles: "DSKoopa is running in an electronics store.",
    A: "A) He slams into the wall with a CD on his finger.",
    B: "B) Nothing happens.",
    C: "C) He jumps onto the pile of electronics with a CD on his finger.",
    D: "D) He falls on the ground.",
};

let video43_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video43_credit = urlify(video43_credit);
function urlify(video43_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video43_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video43_obj = {
    credit: video43_credit,
    subtitles: "xQc is playing Overwatch.",
    A: "A) He rage quits.",
    B: "B) He dies.",
    C: "C) He screams into his microphone while using proper English.",
    D: "D) He screams into his microphone and nobody understands a single word he says.",
};

let video44_credit = "Credit: DasonRZ - http://bitly.ws/gufs | Streamer: DrDisrespect - http://bitly.ws/gufu ."; video44_credit = urlify(video44_credit);
function urlify(video44_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video44_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video44_obj = {
    credit: video44_credit,
    subtitles: "Remember the last time you used a public restroom?",
    A: "A) Yeah, DrDisrespect was on the toilet.",
    B: "B) Yes.",
    C: "C) No.",
    D: "D) Yeah, DrDisrespect broke the bathroom stall door.",
};

let video45_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video45_credit = urlify(video45_credit);
const video45_obj = {
    credit: video45_credit,
    subtitles: " Who's holding the leash?",
    A: "A) A goat.",
    B: "B) A dog.",
    C: "C) A cat.",
    D: "D) Me.",
};
function urlify(video45_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video45_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video46_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video46_credit = urlify(video46_credit);
const video46_obj = {
    credit: video46_credit,
    subtitles: "Guess what the fence posts on the right side of the road are made of.",
    A: "A) Metal.",
    B: "B) Tree logs.",
    C: "C) Tires.",
    D: "D) Hay bales.",
};
function urlify(video46_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video46_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video47_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video47_credit = urlify(video47_credit);
const video47_obj = {
    credit: video47_credit,
    subtitles: "My goat is on a chair.",
    A: "A) She's eating a Gordon Ramsay burger.",
    B: "B) She's eating the chair.",
    C: "C) She's licking the chair.",
    D: "D) She's eating lunch.",
};
function urlify(video47_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video47_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video48_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video48_credit = urlify(video48_credit);
const video48_obj = {
    credit: video48_credit,
    subtitles: "What is my dog Sabi about to do?",
    A: "A) Become a cat.",
    B: "B) Mine for diamonds.",
    C: "C) What the dog doin?",
    D: "D) Dig.",
};
function urlify(video48_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video48_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video49_credit = "Credit: <strong style='color:red;'>ChrisReaperVA (Developer)</strong> - https://linktr.ee/ChrisReaperVA ."; video49_credit = urlify(video49_credit);
const video49_obj = {
    credit: video49_credit,
    subtitles: "What will my dog Scooter do?",
    A: "A) He goes through the gate.",
    B: "B) He turns into a Ninja turtle.",
    C: "C) He shape shifts into a turtle.",
    D: "D) He becomes an actual turtle.",
};
function urlify(video49_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video49_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}

let video57_credit = "Credit: RealMattBishop - https://tiktok.com/@realmattbishop ."; video57_credit = urlify(video57_credit);
function urlify(video57_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video57_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video57_obj = {
    credit: video57_credit,
    subtitles: "Matt made his friend tacos.",
    A: "A) His friend is asian.",
    B: "B) He has no friends.",
    C: "C) He made no tacos.",
    D: "D) The taco hits the wall.",
};

let video58_credit = "Credit: Milly Rock - https://tiktok.com/@millyy_rock ."; video58_credit = urlify(video58_credit);
function urlify(video58_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video58_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video58_obj = {
    credit: video58_credit,
    subtitles: "What will happen when this keychain is placed on the wall?",
    A: "A) Nothing.",
    B: "B) A weasel pops out.",
    C: "C) It breaks off the wall.",
    D: "D) They throw the keychain at the wall.",
};

let video59_credit = "Credit: Matty C - https://tiktok.com/@mattycvlogs23 ."; video59_credit = urlify(video59_credit);
function urlify(video59_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video59_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video59_obj = {
    credit: video59_credit,
    subtitles: "Matt claims that the security cameras aren't real.",
    A: "A) He breaks it.",
    B: "B) It starts blinking blue.",
    C: "C) He pulls it out of the metal bar.",
    D: "D) It starts blinking red.",
};

let video60_credit = "Credit: Kristin Alloyd - https://tiktok.com/@kristinalloyd1 ."; video60_credit = urlify(video60_credit);
function urlify(video60_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video60_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video60_obj = {
    credit: video60_credit,
    subtitles: "He has to sit on the ground without using hands or bending knees.",
    A: "A) He does nothing.",
    B: "B) He dies.",
    C: "C) He falls forward.",
    D: "D) He falls on his back.",
};

let video61_credit = "Credit: Bailey Grey - https://tiktok.com/@thedailybaileyshow ."; video61_credit = urlify(video61_credit);
function urlify(video61_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video61_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video61_obj = {
    credit: video61_credit,
    subtitles: "Which is your favorite of the 7 seas?",
    A: "A) The puss-sea.",
    B: "B) The Arctic Ocean.",
    C: "C) The Indian Ocean.",
    D: "D) The North Atlantic Ocean.",
};

let video62_credit = "Credit: N/A - https://tiktok.com/@drshrekphd ."; video62_credit = urlify(video62_credit);
function urlify(video62_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video62_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video62_obj = {
    credit: video62_credit,
    subtitles: "What are birth control pills called in German?",
    A: "A) Babyremoval.",
    B: "B) Antibabypillen.",
    C: "C) Antibabypills.",
    D: "D) Antipregopills.",
};

let video63_credit = "Credit: Arlo Sims - https://tiktok.com/@arlosims ."; video63_credit = urlify(video63_credit);
function urlify(video63_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video63_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video63_obj = {
    credit: video63_credit,
    subtitles: "A man is standing outside in the snow. What will land in his mouth?",
    A: "A) A fireball.",
    B: "B) A watermelon.",
    C: "C) A snowball.",
    D: "D) An eggroll.",
};

let video64_credit = "Credit: Hunter Yoyo - https://tiktok.com/@hunter_yoyo ."; video64_credit = urlify(video64_credit);
function urlify(video64_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video64_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video64_obj = {
    credit: video64_credit,
    subtitles: "What will he do with the yo-yo?",
    A: "A) He breaks it.",
    B: "B) Some mediocre moves.",
    C: "C) Some boring moves.",
    D: "D) Some sick moves.",
};

let video65_credit = "Credit: Justin Wood - https://tiktok.com/@justinwoodcircus ."; video65_credit = urlify(video65_credit);
function urlify(video65_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video65_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video65_obj = {
    credit: video65_credit,
    subtitles: "What food items will apear next?",
    A: "A) Pear, a banana.",
    B: "B) Banana pear.",
    C: "C) Banana pair.",
    D: "D) Banana, a pear.",
};

let video66_credit = "Credit:  - https://tiktok.com/@qtubeyt ."; video66_credit = urlify(video66_credit);
function urlify(video66_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video66_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video66_obj = {
    credit: video66_credit,
    subtitles: "He's about to throw a bowling ball.",
    A: "A) He gets a strike.",
    B: "B) He breaks something.",
    C: "C) It splits in half.",
    D: "D) He throws it into the wrong alley.",
};

let video67_credit = "Credit: Kristen Whitney - https://tiktok.com/@kristen.whitney ."; video67_credit = urlify(video67_credit);
function urlify(video67_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video67_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video67_obj = {
    credit: video67_credit,
    subtitles: "She's riding a roller coaster.",
    A: "A) She starts screaming.",
    B: "B) She goes up.",
    C: "C) She continues to casually narrate.",
    D: "D) She goes sideways.",
};

let video68_credit = "Credit: Jaylon - https://tiktok.com/@jaybugginup ."; video68_credit = urlify(video68_credit);
function urlify(video68_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video68_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video68_obj = {
    credit: video68_credit,
    subtitles: "Jif or Jiffy?",
    A: "A) Gif.",
    B: "B) Giffy.",
    C: "C) Jiffy.",
    D: "D) Jif.",
};

let video69_credit = "Credit: Jeffrey Brooks - https://tiktok.com/@jeffreybrooks1 ."; video69_credit = urlify(video69_credit);
function urlify(video69_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video69_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video69_obj = {
    credit: video69_credit,
    subtitles: "What is he holding?",
    A: "A) It's not B, C, or D.",
    B: "B) It's a glizzy.",
    C: "C) It's a hot dog.",
    D: "D) It's corn bread.",
};

let video70_credit = "Credit: Winnie Schmidt - https://tiktok.com/@winnieschmidt ."; video70_credit = urlify(video70_credit);
function urlify(video70_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video70_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video70_obj = {
    credit: video70_credit,
    subtitles: "What name will he say?",
    A: "A) Demi Lovato.",
    B: "B) Michael Jackson.",
    C: "C) Billie Eilish.",
    D: "D) Spock from Star Trek.",
};

let video72_credit = "Credit: Fisher Stewart - https://tiktok.com/@fisherstewart__ ."; video72_credit = urlify(video72_credit);
function urlify(video72_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video72_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video72_obj = {
    credit: video72_credit,
    subtitles: "Where does the hand sanitizer land?",
    A: "A) On her shirt.",
    B: "B) In her hands.",
    C: "C) On the floor.",
    D: "D) On her face.",
};

let video73_credit = "Credit: Daiv - https://tiktok.com/@tiktokdaiv ."; video73_credit = urlify(video73_credit);
function urlify(video73_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video73_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video73_obj = {
    credit: video73_credit,
    subtitles: "What will he say?",
    A: "A) They fuck you?",
    B: "B) They rock you?",
    C: "C) They flock you?",
    D: "D) They do stuff there.",
};

let video74_credit = "Credit: Maxime Dupire - https://tiktok.com/@maxime_dupire ."; video74_credit = urlify(video74_credit);
function urlify(video74_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video74_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video74_obj = {
    credit: video74_credit,
    subtitles: "Guess the song.",
    A: "A) Lazy Town theme song.",
    B: "B) Crazy Frog song.",
    C: "C) Pokemon theme song.",
    D: "D) The Gummy Bear Song.",
};

let video75_credit = "Credit: N/A - https://tiktok.com/@couldhavebeensober ."; video75_credit = urlify(video75_credit);
function urlify(video75_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video75_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video75_obj = {
    credit: video75_credit,
    subtitles: "What will happen when he throws the beer bottle at the wall?",
    A: "A) It shatters.",
    B: "B) It breaks into 2 halves.",
    C: "C) It gets stuck in the wall.",
    D: "D) It bounces off the wall.",
};

let video76_credit = "Credit: Zeremiah - https://tiktok.com/@zeremiah ."; video76_credit = urlify(video76_credit);
function urlify(video76_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video76_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video76_obj = {
    credit: video76_credit,
    subtitles: "What happens next?",
    A: "A) He dies.",
    B: "B) He hits a wall.",
    C: "C) He continues to bounce without falling.",
    D: "D) He falls.",
};

let video77_credit = "Credit: N/A - https://tiktok.com/@theetathtyr ."; video77_credit = urlify(video77_credit);
function urlify(video77_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video77_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video77_obj = {
    credit: video77_credit,
    subtitles: "Someone is trying to wipe the soap without ejecting more soap.",
    A: "A) He smacks it off the wall.",
    B: "B) It finally stops ejecting soap.",
    C: "C) He kicks it with his foot.",
    D: "D) He washes his hands without soap.",
};

let video78_credit = "Credit: Braden - https://tiktok.com/@bradenr22 ."; video78_credit = urlify(video78_credit);
function urlify(video78_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video78_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video78_obj = {
    credit: video78_credit,
    subtitles: "What will the dog do?",
    A: "A) A frontflip.",
    B: "B) A backflip.",
    C: "C) Pee.",
    D: "D) Poop.",
};

let video79_credit = "Credit: Frankie Ramone - https://tiktok.com/@frankieramone0 ."; video79_credit = urlify(video79_credit);
function urlify(video79_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video79_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video79_obj = {
    credit: video79_credit,
    subtitles: "What is his friend grilling?",
    A: "A) Lemons.",
    B: "B) Hotdogs.",
    C: "C) French Fries.",
    D: "D) Bugs.",
};

let video80_credit = "Credit: Tostillos - https://tiktok.com/@tostillos ."; video80_credit = urlify(video80_credit);
function urlify(video80_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video80_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video80_obj = {
    credit: video80_credit,
    subtitles: "Will he struggle to finish the joke?",
    A: "A) No.",
    B: "B) No.",
    C: "C) No.",
    D: "D) Yes.",
};

let video81_credit = "Credit: Gaston the Bulldog - https://tiktok.com/@gaston_english_bulldog ."; video81_credit = urlify(video81_credit);
function urlify(video81_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video81_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video81_obj = {
    credit: video81_credit,
    subtitles: "What will the dog do?",
    A: "A) Trip.",
    B: "B) Keep walking without tripping.",
    C: "C) Eat the tray.",
    D: "D) Leave the tray and walk away.",
};

let video82_credit = "Credit: Tee - https://tiktok.com/@tee_tow ."; video82_credit = urlify(video82_credit);
function urlify(video82_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video82_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video82_obj = {
    credit: video82_credit,
    subtitles: "A cat is attacking a cat door.",
    A: "A) The cat stops.",
    B: "B) The cat continues to attack the cat door.",
    C: "C) The cat gets scared and runs away.",
    D: "D) The cat goes through the cat door.",
};

let video83_credit = "Credit: Zach Ringenwald - https://tiktok.com/@zringenwald ."; video83_credit = urlify(video83_credit);
function urlify(video83_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video83_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video83_obj = {
    credit: video83_credit,
    subtitles: "What will happen to the TV when he throws it?",
    A: "A) It bounces off the dirt.",
    B: "B) It breaks in half.",
    C: "C) The corner of the TV gets stuck in the dirt.",
    D: "D) The screen shatters.",
};

let video84_credit = "Credit: Melany - https://tiktok.com/@melanyxo ."; video84_credit = urlify(video84_credit);
function urlify(video84_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video84_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video84_obj = {
    credit: video84_credit,
    subtitles: "What will the bird do?",
    A: "A) The bird falls on the ground.",
    B: "B) The bird attacks her.",
    C: "C) The bird walks away.",
    D: "D) The bird bites her fingernail and bounces up and down with its wings spread while making cute noises.",
};

let video85_credit = "Credit: Abel - https://tiktok.com/@s_an4ous . | https://www.instagram.com/erlswtt/ ."; video85_credit = urlify(video85_credit);
function urlify(video85_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video85_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video85_obj = {
    credit: video85_credit,
    subtitles: "What will happen to the wall tile?",
    A: "A) It comes off the wall.",
    B: "B) It falls on the ground and shatters.",
    C: "C) The plunger breaks.",
    D: "D) The plunger gets stuck to his face.",
};

let video86_credit = "Credit: Bree - https://tiktok.com/@breeriex ."; video86_credit = urlify(video86_credit);
function urlify(video86_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video86_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video86_obj = {
    credit: video86_credit,
    subtitles: "What will the bird do?",
    A: "A) It flies away.",
    B: "B) It screams.",
    C: "C) It eats a piece of bread.",
    D: "D) It starts barking like a dog.",
};

let video87_credit = "Credit: Lewis Arnold - https://tiktok.com/@itslewisarnold ."; video87_credit = urlify(video87_credit);
function urlify(video87_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video87_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video87_obj = {
    credit: video87_credit,
    subtitles: "What will happen to grandma?",
    A: "A) She loses the match.",
    B: "B) She whacks her grandson with the Wii remote.",
    C: "C) She falls over and starts playing like a god.",
    D: "D) She throws the Wii remote at the TV.",
};

let video88_credit = "Credit: Colin Peck - https://tiktok.com/@colin.peckk ."; video88_credit = urlify(video88_credit);
function urlify(video88_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video88_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video88_obj = {
    credit: video88_credit,
    subtitles: "What will the dog do?",
    A: "A) The dog sits there and looks cute.",
    B: "B) The dog bites the microphone wire.",
    C: "C) The dog farts.",
    D: "D) The dog takes his mask off.",
};

let video89_credit = "Credit: Gábor Durucz - https://bit.ly/3ran2IR ."; video89_credit = urlify(video89_credit);
function urlify(video89_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video89_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video89_obj = {
    credit: video89_credit,
    subtitles: "How many golf balls will he sink?",
    A: "A) 4.",
    B: "B) 5.",
    C: "C) Half of them.",
    D: "D) All of them.",
};

let video90_credit = "Credit: AFP News Agency - https://bit.ly/3nUpota ."; video90_credit = urlify(video90_credit);
function urlify(video90_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video90_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video90_obj = {
    credit: video90_credit,
    subtitles: "George W Bush is about to start speaking.",
    A: "A) He walks off stage.",
    B: "B) Someone throws eggs at him.",
    C: "C) Someone throws shoes at him.",
    D: "D) He falls off the stage.",
};

let video91_credit = "Credit: Waggle TV - https://bit.ly/3CR23gk ."; video91_credit = urlify(video91_credit);
function urlify(video91_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video91_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video91_obj = {
    credit: video91_credit,
    subtitles: "Will the dog cross the bridge with the stick?",
    A: "A) Maybe.",
    B: "B) Probably not.",
    C: "C) No.",
    D: "D) Yes.",
};

let video92_credit = "Credit: COPS (TV Show) - https://www.cops.com ."; video92_credit = urlify(video92_credit);
function urlify(video92_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video92_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video92_obj = {
    credit: video92_credit,
    subtitles: "A man is being arrested.",
    A: 'A) He says "I can break these cuffs."',
    B: "B) He slams his head on the hood.",
    C: "C) He breaks the hand cuffs.",
    D: "D) He runs away.",
};

let video93_credit = "Credit: Sergey Trifonov - https://bit.ly/31rkfQz ."; video93_credit = urlify(video93_credit);
function urlify(video93_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video93_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video93_obj = {
    credit: video93_credit,
    subtitles: "A man is in icy cold water.",
    A: "A) He gets out.",
    B: "B) He starts eating ice.",
    C: "C) He dies.",
    D: "D) Hypothermia.",
};

let video94_credit = "Credit: JoeahVR - https://tiktok.com/@joeahvr ."; video94_credit = urlify(video94_credit);
function urlify(video94_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video94_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video94_obj = {
    credit: video94_credit,
    subtitles: "Deadpool is on Wii Sports island.",
    A: "A) Deadpool crotch-drops him.",
    B: "B) Deadpool dies.",
    C: "C) He shoots the pan and it hits him.",
    D: "D) He karate kicks him.",
};

let video95_credit = "Credit: Farm Machinery - https://www.tiktok.com/@_farmmachinery_ ."; video95_credit = urlify(video95_credit);
function urlify(video95_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video95_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video95_obj = {
    credit: video95_credit,
    subtitles: "This is an electric tool.",
    A: "A) The branch starts releasing sap.",
    B: "B) The tool breaks.",
    C: "C) It does nothing.",
    D: "D) It cuts the branch.",
};

let video96_credit = "Credit: Jack Pop - https://bit.ly/3lA79rl ."; video96_credit = urlify(video96_credit);
function urlify(video96_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video96_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video96_obj = {
    credit: video96_credit,
    subtitles: "Jack is washing his hands.",
    A: "A) The toilet lid slams.",
    B: "B) Water blasts out of the toilet.",
    C: "C) The sink breaks.",
    D: "D) Nothing happens.",
};

let video97_credit = "Credit: Erobb - https://twitch.tv/erobb221 ."; video97_credit = urlify(video97_credit);
function urlify(video97_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video97_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video97_obj = {
    credit: video97_credit,
    subtitles: "What will he say about the carrot?",
    A: "A) It's raw.",
    B: "B) It's a food.",
    C: "C) It's a vegetable.",
    D: "D) It's a fruit.",
};

let video98_credit = "Credit: Mizkif - https://twitch.tv/Mizkif ."; video98_credit = urlify(video98_credit);
function urlify(video98_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video98_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video98_obj = {
    credit: video98_credit,
    subtitles: "What will Mizkif's roommate say next?",
    A: "A) Mizkif makes the property value go up. (laughter)",
    B: "B) Mizkif is white. (laughter)",
    C: "C) Plus ratio, plus L, plus he hell off. (laughter)",
    D: "D) When is he gonna help with the rent? Never. (laughter)",
};

let video99_credit = "Credit: N/A ."; //video99_credit = urlify(video99_credit);
function urlify(video99_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video99_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video99_obj = {
    credit: video99_credit,
    subtitles: "Will he use the soda dispenser correctly?",
    A: "A) Obviously.",
    B: "B) No.",
    C: "C) Yes.",
    D: "D) Absolutely.",
};

let video100_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video100_credit = urlify(video100_credit);
function urlify(video100_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video100_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video100_obj = {
    credit: video100_credit,
    subtitles: "What will she say?",
    A: "A) Indiana.",
    B: "B) The indies.",
    C: "C) Indies nuts.",
    D: "D) The Indies ocean cruise.",
};

let video101_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video101_credit = urlify(video101_credit);
function urlify(video101_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video101_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video101_obj = {
    credit: video101_credit,
    subtitles: "What will xQc say next?",
    A: "A) He cooked it!",
    B: "B) It fell off the tray!",
    C: "C) He ate it!",
    D: "D) He microwaved it!",
};

let video102_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; video102_credit = urlify(video102_credit);
function urlify(video102_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video102_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video102_obj = {
    credit: video102_credit,
    subtitles: "What will xQc say?",
    A: "A) Canadian Information Agency.",
    B: "B) California Information Agency",
    C: "C) Caramel Indiana Avocado.",
    D: "D) Chocolate Indian Apple.",
};

let video103_credit = "Credit: Markiplier - https://www.youtube.com/c/markiplier ."; video103_credit = urlify(video103_credit);
function urlify(video103_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video103_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video103_obj = {
    credit: video103_credit,
    subtitles: "What will Markiplier say?",
    A: "A) Hello everybody, my name is Markiplier.",
    B: "B) *Says nothing and silently waves*.",
    C: "C) Some weird noise.",
    D: "D) This ice cream tastes like chicken.",
};

let video104_credit = "Credit: Jacksepticeye - https://youtube.com/jacksepticeye ."; video104_credit = urlify(video104_credit);
function urlify(video104_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video104_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video104_obj = {
    credit: video104_credit,
    subtitles: "Will he sink the golf ball?",
    A: "A) Possibly.",
    B: "B) Maybe.",
    C: "C) No.",
    D: "D) Yes.",
};

let video105_credit = "Credit: Jacksepticeye - https://youtube.com/jacksepticeye ."; video105_credit = urlify(video105_credit);
function urlify(video105_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video105_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video105_obj = {
    credit: video105_credit,
    subtitles: "What happens next?",
    A: "A) The NPC doesn't die.",
    B: "B) The NPC shoots him.",
    C: "C) Nothing happens.",
    D: "D) FBI agent walks in.",
};

let video106_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video106_credit = urlify(video106_credit);
function urlify(video106_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video106_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video106_obj = {
    credit: video106_credit,
    subtitles: "Will he sink the golf ball?",
    A: "A) No.",
    B: "B) Yes.",
    C: "C) Absolutely.",
    D: "D) Obviously.",
};

let video107_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video107_credit = urlify(video107_credit);
function urlify(video107_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video107_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video107_obj = {
    credit: video107_credit,
    subtitles: "What happens next?",
    A: "A) He beats the game.",
    B: "B) He gets jump scared.",
    C: "C) He runs.",
    D: "D) He gets away successfully.",
};

let video108_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video108_credit = urlify(video108_credit);
function urlify(video108_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video108_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video108_obj = {
    credit: video108_credit,
    subtitles: "What will happen when the golf ball explodes?",
    A: "A) They survive, obviously.",
    B: "B) They walk away unharmed, obviously.",
    C: "C) They fall into the water and die.",
    D: "D) They're perfectly fine, obviously.",
};

let video109_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video109_credit = urlify(video109_credit);
function urlify(video109_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video109_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video109_obj = {
    credit: video109_credit,
    subtitles: "What happens when the NPC hits the golf ball?",
    A: "A) He gets a hole-in-one.",
    B: "B) He misses the shot.",
    C: "C) He throws the golf club.",
    D: "D) The golf ball explodes.",
};

let video110_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video110_credit = urlify(video110_credit);
function urlify(video110_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video110_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video110_obj = {
    credit: video110_credit,
    subtitles: "What will the cow do?",
    A: "A) Split in half.",
    B: "B) Moo.",
    C: "C) Fart.",
    D: "D) Fly away.",
};

let video111_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video111_credit = urlify(video111_credit);
function urlify(video111_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video111_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video111_obj = {
    credit: video111_credit,
    subtitles: "What happens after he hides the body?",
    A: "A) The body flies out of the box.",
    B: "B) A guard is next to him.",
    C: "C) The body comes to life.",
    D: "D) The box disappears.",
};

let video112_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video112_credit = urlify(video112_credit);
function urlify(video112_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video112_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video112_obj = {
    credit: video112_credit,
    subtitles: "What happens after he hits the ball?",
    A: "A) The game crashes.",
    B: "B) His team gets a point.",
    C: "C) The enemy team gets a point",
    D: "D) He disconnects.",
};

let video113_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video113_credit = urlify(video113_credit);
function urlify(video113_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video113_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video113_obj = {
    credit: video113_credit,
    subtitles: "What happens next?",
    A: "A) The locker falls over.",
    B: "B) Nothing happens.",
    C: "C) He's fine.",
    D: "D) Jump scare.",
};

let video114_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video114_credit = urlify(video114_credit);
function urlify(video114_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video114_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video114_obj = {
    credit: video114_credit,
    subtitles: "What happens next?",
    A: "A) Jump scared by a teddy bear.",
    B: "B) Nothing.",
    C: "C) The wall starts moving.",
    D: "D) The shelf falls over.",
};

let video115_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; video115_credit = urlify(video115_credit);
function urlify(video115_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video115_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video115_obj = {
    credit: video115_credit,
    subtitles: "What will be created?",
    A: "A) Goat cheese.",
    B: "B) A black hole.",
    C: "C) A tsunami.",
    D: "D) An earthquake.",
};

let video116_credit = "Credit: Summit - https://twitch.tv/summit1g ."; video116_credit = urlify(video116_credit);
function urlify(video116_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video116_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video116_obj = {
    credit: video116_credit,
    subtitles: "Summit is playing H1Z1.",
    A: "A) He punches his monitor.",
    B: "B) He walks away.",
    C: "C) His wife walks in with a sandwich.",
    D: "D) His dog jumps on his desk.",
};

let video117_credit = "Credit: Shroud - https://twitch.tv/shroud ."; video117_credit = urlify(video117_credit);
function urlify(video117_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video117_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video117_obj = {
    credit: video117_credit,
    subtitles: "Shroud is playing Valorant.",
    A: "A) He dies.",
    B: "B) He gets 3 kills with 5 bullets.",
    C: "C) He rage quits.",
    D: "D) He gets 3 kills with 3 bullets.",
};

let video118_credit = "Credit: Shroud - https://twitch.tv/shroud ."; video118_credit = urlify(video118_credit);
function urlify(video118_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video118_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video118_obj = {
    credit: video118_credit,
    subtitles: "Shroud is holding a rocket launcher in PUBG.",
    A: "A) He gets 2 kills.",
    B: "B) He gets 3 kills.",
    C: "C) He misses and leaves the game.",
    D: "D) He dies.",
};

let video119_credit = "Credit: ZombieGoop - https://bit.ly/3JtZfty ."; video119_credit = urlify(video119_credit);
function urlify(video119_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return video119_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const video119_obj = {
    credit: video119_credit,
    subtitles: "What will the NPC say?",
    A: 'A) "I want to apologize."',
    B: 'B) "I will kick your fucking ass!"',
    C: 'C) "I will fucking kill you!"',
    D: 'D) "Touch me again boot licker!"',
};

let video120_credit = "Credit: N/A.";
const video120_obj = {
    credit: video120_credit,
    subtitles: "What dance move will he do next?",
    A: "A) Moon walk.",
    B: "B) Limbo.",
    C: "C) Dolphin dive.",
    D: 'D) Snoop Doggs dance from "Drop It Like Its Hot".',
};

let videoRickRoll_credit = "Credit: Nicol - https://bit.ly/3E0p0jn ."; videoRickRoll_credit = urlify(videoRickRoll_credit);
function urlify(videoRickRoll_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videoRickRoll_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videoRickRoll_obj = {
    credit: videoRickRoll_credit,
    subtitles: "",
    A: "A) Never gonna give you up.",
    B: "B) Never gonna let you down.",
    C: "C) Never gonna run around.",
    D: "D) And desert you.",
};
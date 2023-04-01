//A
function showvideox() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("videox").style.display = "block";
	document.getElementById('credit').innerHTML=videox_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=videox_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor=""
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_videox = function(){
	if (videox.currentTime >= 60) {
		//playTimerSong();
		//30s timer
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		sleep(0).then(() => { /*var timerId =*/ setInterval(countdown, 1000); });
/*
		var timeLeft = 30;
		var _30sTimerElement = document.getElementById('30-second-timer');
		
		function countdown() {
			if (timeLeft == -1) {
				stopTimerSong();
				//clearTimeout(timerId);
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
*/
		videox.pause();
		videox.removeEventListener("timeupdate",pause_videox);
		document.getElementById("videox").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=videox_obj.A;
		document.getElementById("buttonA").onclick = function() {
			score++;
			if (score > high_score) high_score = score;
			if (buttonA.onclick = false) this.onclick = null; 
			if (buttonB.onclick = false) this.onclick = null;
			if (buttonC.onclick = false) this.onclick = null;
			if (buttonD.onclick = false) this.onclick = null;
			if (buttonSkipVideo.onclick = false) this.onclick = null;
			document.getElementById("score").innerHTML = "SCORE: <br>" + score;
			document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
			this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
			videox.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=videox_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=videox_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=videox_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonD.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonSkipVideo").onclick = function() {
		skips--;
        this.style = 'outline: none';
        if (skips < 0) { skips = 0; this.playNextVideo()=null; }
        if (skips >= 0 && skips <= 5) { playNextVideo(); }
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById('skips').innerHTML="SKIPS: <br>" + skips;
		if (skips < 0 || skips == 0) {
			this.style = 'cursor: default','outline: none';
			this.style.backgroundColor = 'gray'; 
			this.style.color = '#fff';
			this.style.pointerEvents = 'none'; //this stops button from turning orange after 0 skips
			/*function noClick() {
				if (buttonSkipVideo.button==1) {
					buttonSkipVideo.onclick=null;
				}
			}
			document.onMouseDown=noClick;*/
		}
		//only needed if timer is activated
		/*if ( (skips >= 1 && skips <= 5) || (skips <= 0) ) {
			this._30sTimerElement.innerHTML = (timeLeft = "");
			(timeLeft === 0) (timeLeft = "");	
		}*/
		};
	}
}
videox.addEventListener("timeupdate", pause_videox);

document.getElementById('videox').addEventListener('ended',playNextVideo,false);



//B
function showvideox() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("videox").style.display = "block";
	document.getElementById('credit').innerHTML=videox_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=videox_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor=""
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_videox = function(){
	if (videox.currentTime >= 60) {
		//playTimerSong();
		//30s timer
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		sleep(0).then(() => { /*var timerId =*/ setInterval(countdown, 1000); });
/*
		var timeLeft = 30;
		var _30sTimerElement = document.getElementById('30-second-timer');
		
		function countdown() {
			if (timeLeft == -1) {
				stopTimerSong();
				//clearTimeout(timerId);
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
*/
		videox.pause();
		videox.removeEventListener("timeupdate",pause_videox);
		document.getElementById("videox").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=videox_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=videox_obj.B;
		document.getElementById("buttonB").onclick = function() {
		score++;
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		videox.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=videox_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=videox_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonD.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonSkipVideo").onclick = function() {
		skips--;
        this.style = 'outline: none';
        if (skips < 0) { skips = 0; this.playNextVideo()=null; }
        if (skips >= 0 && skips <= 5) { playNextVideo(); }
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById('skips').innerHTML="SKIPS: <br>" + skips;
		if (skips < 0 || skips == 0) {
			this.style = 'cursor: default','outline: none';
			this.style.backgroundColor = 'gray'; 
			this.style.color = '#fff';
			this.style.pointerEvents = 'none'; //this stops button from turning orange after 0 skips
			/*function noClick() {
				if (buttonSkipVideo.button==1) {
					buttonSkipVideo.onclick=null;
				}
			}
			document.onMouseDown=noClick;*/
		}
		//only needed if timer is activated
		/*if ( (skips >= 1 && skips <= 5) || (skips <= 0) ) {
			this._30sTimerElement.innerHTML = (timeLeft = "");
			(timeLeft === 0) (timeLeft = "");	
		}*/
		};
	}
}
videox.addEventListener("timeupdate", pause_videox);

document.getElementById('videox').addEventListener('ended',playNextVideo,false);



//C
function showvideox() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("videox").style.display = "block";
	document.getElementById('credit').innerHTML=videox_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=videox_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor=""
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_videox = function(){
	if (videox.currentTime >= 60) {
		//playTimerSong();
		//30s timer
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		sleep(0).then(() => { /*var timerId =*/ setInterval(countdown, 1000); });
/*
		var timeLeft = 30;
		var _30sTimerElement = document.getElementById('30-second-timer');
		
		function countdown() {
			if (timeLeft == -1) {
				stopTimerSong();
				//clearTimeout(timerId);
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
*/
		videox.pause();
		videox.removeEventListener("timeupdate",pause_videox);
		document.getElementById("videox").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=videox_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=videox_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=videox_obj.C;
		document.getElementById("buttonC").onclick = function() {
		score++;
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		videox.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=videox_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonD.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonSkipVideo").onclick = function() {
		skips--;
        this.style = 'outline: none';
        if (skips < 0) { skips = 0; this.playNextVideo()=null; }
        if (skips >= 0 && skips <= 5) { playNextVideo(); }
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById('skips').innerHTML="SKIPS: <br>" + skips;
		if (skips < 0 || skips == 0) {
			this.style = 'cursor: default','outline: none';
			this.style.backgroundColor = 'gray'; 
			this.style.color = '#fff';
			this.style.pointerEvents = 'none'; //this stops button from turning orange after 0 skips
			/*function noClick() {
				if (buttonSkipVideo.button==1) {
					buttonSkipVideo.onclick=null;
				}
			}
			document.onMouseDown=noClick;*/
		}
		//only needed if timer is activated
		/*if ( (skips >= 1 && skips <= 5) || (skips <= 0) ) {
			this._30sTimerElement.innerHTML = (timeLeft = "");
			(timeLeft === 0) (timeLeft = "");	
		}*/
		};
	}
}
videox.addEventListener("timeupdate", pause_videox);

document.getElementById('videox').addEventListener('ended',playNextVideo,false);



//D
function showvideox() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("videox").style.display = "block";
	document.getElementById('credit').innerHTML=videox_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=videox_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor=""
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_videox = function(){
	if (videox.currentTime >= 60) {
		//Remove spacebar
		videox.addEventListener('keydown', function(event) {
			if (event.code == 'Space' || 'Spacebar' || 32) {
				event.preventDefault();
			}
		})
		// Add event listener to targeted video element
		videox.addEventListener('click', function(event) {
			if (event.code == 'Space' || 'Spacebar' || 32) {
				event.preventDefault();
			}
		})
		//playTimerSong();
		//30s timer
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		sleep(0).then(() => { /*var timerId =*/ setInterval(countdown, 1000); });
/*
		var timeLeft = 30;
		var _30sTimerElement = document.getElementById('30-second-timer');
		
		function countdown() {
			if (timeLeft == -1) {
				stopTimerSong();
				//clearTimeout(timerId);
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
*/
		videox.pause();
		videox.removeEventListener("timeupdate",pause_videox);
		document.getElementById("videox").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=videox_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=videox_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=videox_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=videox_obj.D;
		document.getElementById("buttonD").onclick=function() {
		score++;
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		videox.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonSkipVideo").onclick = function() {
		skips--;
        this.style = 'outline: none';
        if (skips < 0) { skips = 0; this.playNextVideo()=null; }
        if (skips >= 0 && skips <= 5) { playNextVideo(); }
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById('skips').innerHTML="SKIPS: <br>" + skips;
		if (skips < 0 || skips == 0) {
			this.style = 'cursor: default','outline: none';
			this.style.backgroundColor = 'gray'; 
			this.style.color = '#fff';
			this.style.pointerEvents = 'none'; //this stops button from turning orange after 0 skips
			/*function noClick() {
				if (buttonSkipVideo.button==1) {
					buttonSkipVideo.onclick=null;
				}
			}
			document.onMouseDown=noClick;*/
		}
		//only needed if timer is activated
		/*if ( (skips >= 1 && skips <= 5) || (skips <= 0) ) {
			this._30sTimerElement.innerHTML = (timeLeft = "");
			(timeLeft === 0) (timeLeft = "");	
		}*/
		};
	}
}
videox.addEventListener("timeupdate", pause_videox);

document.getElementById('videox').addEventListener('ended',playNextVideo,false);

/*****************************************************************************************************************************************/

score++; score++; //GOLDEN VIDEO
lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
score+=3; lives+=3; document.getElementById('score').innerHTML="SCORE:<br>" + score; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //DIAMOND VIDEO

/*****************************************************************************************************************************************/

//Credit
let videox_credit = ".";
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//Twitch credit
let videox_credit = "Credit:  - https://twitch.tv/ ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//Twitch credit with music
let videox_credit = "Credit:  - https://twitch.tv/ . | Music: https://bit.ly/ ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//Sliker
let videox_credit = "Credit: Sliker - https://twitch.tv/itssliker ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//xQc
let videox_credit = "Credit: xQc - https://twitch.tv/xQcOW ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

/*****************************************************************************************************************************************/

//YouTube credit
let videox_credit = "Credit:  - https://youtube.com/ ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//Jacksepticeye
let videox_credit = "Credit: Jacksepticeye - https://youtube.com/Jacksepticeye ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

//YouTube credit with music
let videox_credit = "Credit:  - https://bit.ly/ . | Music: https://bit.ly/ ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};

/*****************************************************************************************************************************************/

//TikTok credit
let videox_credit = "Credit:  - https://tiktok.com/@ ."; videox_credit = urlify(videox_credit);
function urlify(videox_credit) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return videox_credit.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' + url : url;
        return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
    }) 
}
const videox_obj = {
    credit: videox_credit,
    subtitles: ".",
    A: "A) .",
    B: "B) .",
    C: "C) .",
    D: "D) .",
};
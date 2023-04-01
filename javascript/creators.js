//"use strict"; breaks Firefox

//to stop double-click-fullscreen on video
document.getElementById('video17').onclick = function() { return false; };

//showvideo2,showvideo3, <--don't remove these videos from HTML; (breaks code)
const videos = [
	showvideo17,showvideo18,showvideo20,showvideo21,showvideo22,showvideo23,showvideo27,showvideo28,
	showvideo29,showvideo30,showvideo31,showvideo32,showvideo33,showvideo34,showvideo35,showvideo36,
	showvideo37,showvideo39,showvideo41,showvideo42,showvideo43,showvideo44,showvideo103,showvideo104,
	showvideo105,showvideo106,showvideo107,showvideo108,showvideo109,showvideo110,showvideo111,
	showvideo112,showvideo113,showvideo114,showvideo115,showvideo119,
];
/*golden videos*/
/*const videos = [showvideo4,showvideo9,showvideo13,showvideo17,showvideo18,showvideo19,showvideo20,showvideo22,showvideo26,]*/

function playNextVideo() {
	const randomIndex = Math.floor(Math.random() * videos.length);
	const [splice_video] = videos.splice(randomIndex, 1);
	splice_video();
	if (videos.length == 0) {
		document.getElementById('buttonSkipVideo').innerHTML="Skip disabled. This is the last video!";
		buttonSkipVideo.style.cursor='not-allowed';
		document.getElementById("buttonSkipVideo").onclick = function() {
			buttonSkipVideo.removeAttribute('cursor');
			buttonSkipVideo.style.cursor='not-allowed';
		}
		//document.getElementById('buttonSkipVideo').style.addEventListener('mouseover', event => {
		//	document.getElementById('buttonSkipVideo').style.cursor='not-allowed';
		//})
		//document.getElementById('buttonSkipVideo').onclick.style.cursor='not-allowed';
		//videos.push('Win');
		//if (videos == 'Win') alert('Win');
	}
}

//1 ending video to activate the you beat videoguesser screen
/*
if ( {
	alert('You beat VideoGuesser! Come back later when more videos are added. Thanks for playing!')
},false));
*/
//let allVideos = document.querySelectorAll('video');

/*****************************************************************************************************************************************/

//🚫DO NOT TOUCH🚫
document.querySelectorAll('video').forEach((video) => (video.style.display = "none"));
document.getElementById('videoStart').style.display = "block";
document.getElementById('videoStart').style.display = "none";
playNextVideo();

//auto vid counter for categories (do not put the code here, it displays all videos)
//let classic_num = videos.length; 
//document.getElementById('classic_num').innerHTML = "Current # of videos: " + classic_num;

/*****************************************************************************************************************************************/

function showvideo17() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video17").style.display = "block"; //show video17
	document.getElementById("video17").volume=0.5;
	document.getElementById('credit').innerHTML=video17_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video17_obj.subtitles; /*****subtitles*****/
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
let pause_video17 = function(){
	if (video17.currentTime >= 8.7) {
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
		video17.pause();
		video17.removeEventListener("timeupdate",pause_video17);
		document.getElementById("video17").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video17_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video17_obj.B;
		document.getElementById("buttonB").onclick = function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score; //GOLDEN VIDEO
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video17.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video17_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video17_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video17.addEventListener("timeupdate", pause_video17);

document.getElementById('video17').addEventListener('ended',playNextVideo,false);



function showvideo18() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video18").style.display = "block"; //show video18
	document.getElementById("video18").volume=0.5;
	document.getElementById('credit').innerHTML=video18_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video18_obj.subtitles; /*****subtitles*****/
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
let pause_video18 = function () {
	if (video18.currentTime >= 9) {
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
		video18.pause();
		video18.removeEventListener("timeupdate", pause_video18);
		document.getElementById("video18").style.pointerEvents = "none";

		document.getElementById("buttonA").innerHTML = video18_obj.A;
		document.getElementById("buttonA").onclick = function () {
			lives--;
			if (lives < 0)
				lives = 0;
			if (lives === 0) { setTimeout(function () { playGameOverAudio(); /*stopTimerSong();*/ /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonA.onclick = false)
				this.onclick = null;
			document.getElementById("lives").innerHTML = "LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		};

		document.getElementById("buttonB").innerHTML = video18_obj.B;
		document.getElementById("buttonB").onclick = function () {
			score++; score++; //GOLDEN VIDEO
			if (score > high_score)
				high_score = score; //GOLDEN VIDEO
			if (buttonA.onclick = false)
				this.onclick = null;
			if (buttonB.onclick = false)
				this.onclick = null;
			if (buttonC.onclick = false)
				this.onclick = null;
			if (buttonD.onclick = false)
				this.onclick = null;
			if (buttonSkipVideo.onclick = false)
				this.onclick = null;
			document.getElementById("score").innerHTML = "SCORE: <br>" + score;
			document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
			this.style.backgroundColor = 'green'; this.style.color = '#fff';
			video18.play();
			playCorrectAnswerAudio();
			stopTimerSong();
			{
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0)
					(timeLeft = "");
			}
		};

		document.getElementById("buttonC").innerHTML = video18_obj.C;
		document.getElementById("buttonC").onclick = function () {
			lives--;
			if (lives < 0)
				lives = 0;
			if (lives === 0) { setTimeout(function () { playGameOverAudio(); /*stopTimerSong();*/ /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonC.onclick = false)
				this.onclick = null;
			document.getElementById("lives").innerHTML = "LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML = video18_obj.D;
		document.getElementById("buttonD").onclick = function () {
			lives--;
			if (lives < 0)
				lives = 0;
			if (lives === 0) { setTimeout(function () { playGameOverAudio(); /*stopTimerSong();*/ /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonD.onclick = false)
				this.onclick = null;
			document.getElementById("lives").innerHTML = "LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		};

		document.getElementById("buttonSkipVideo").onclick = function () {
			skips--;
			this.style = 'outline: none';
			if (skips < 0) { skips = 0; this.playNextVideo() = null; }
			if (skips >= 0 && skips <= 5) { playNextVideo(); }
			if (buttonSkipVideo.onclick = false)
				this.onclick = null;
			document.getElementById('skips').innerHTML = "SKIPS: <br>" + skips;
			if (skips < 0 || skips == 0) {
				this.style = 'cursor: default', 'outline: none';
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
video18.addEventListener("timeupdate", pause_video18);

document.getElementById('video18').addEventListener('ended',playNextVideo,false);



function showvideo20() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video20").style.display = "block";
	document.getElementById("video20").volume=0.5;
	document.getElementById('credit').innerHTML=video20_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video20_obj.subtitles; /*****subtitles*****/
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
let pause_video20 = function(){
	if (video20.currentTime >= 16) {
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
		video20.pause();
		video20.removeEventListener("timeupdate",pause_video20);
		document.getElementById("video20").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video20_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video20_obj.B;
		document.getElementById("buttonB").onclick = function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score; //GOLDEN VIDEO
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video20.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video20_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video20_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video20.addEventListener("timeupdate", pause_video20);

document.getElementById('video20').addEventListener('ended',playNextVideo,false);



function showvideo21() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video21").style.display = "block";
	document.getElementById("video21").volume=0.5;
	document.getElementById('credit').innerHTML=video21_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video21_obj.subtitles; /*****subtitles*****/
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
let pause_video21 = function(){
	if (video21.currentTime >= 53) {
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
		video21.pause();
		video21.removeEventListener("timeupdate",pause_video21);
		document.getElementById("video21").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video21_obj.A;
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
		video21.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video21_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video21_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video21_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video21.addEventListener("timeupdate", pause_video21);

document.getElementById('video21').addEventListener('ended',playNextVideo,false);



function showvideo22() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video22").style.display = "block";
	document.getElementById('credit').innerHTML=video22_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video22_obj.subtitles; /*****subtitles*****/
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
let pause_video22 = function(){
	if (video22.currentTime >= 7) {
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
		video22.pause();
		video22.removeEventListener("timeupdate",pause_video22);
		document.getElementById("video22").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video22_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video22_obj.B;
		document.getElementById("buttonB").onclick = function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score; //GOLDEN VIDEO
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video22.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video22_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video22_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video22.addEventListener("timeupdate", pause_video22);

document.getElementById('video22').addEventListener('ended',playNextVideo,false);



function showvideo23() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video23").style.display = "block";
	document.getElementById("video23").volume=0.5;
	document.getElementById('credit').innerHTML=video23_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video23_obj.subtitles; /*****subtitles*****/
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
let pause_video23 = function(){
	if (video23.currentTime >= 10) {
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
		video23.pause();
		video23.removeEventListener("timeupdate",pause_video23);
		document.getElementById("video23").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video23_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video23_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video23_obj.C;
		document.getElementById("buttonC").onclick = function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score; //GOLDEN VIDEO
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video23.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video23_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video23.addEventListener("timeupdate", pause_video23);

document.getElementById('video23').addEventListener('ended',playNextVideo,false);



function showvideo27() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video27").style.display = "block";
    document.getElementById('credit').innerHTML=video27_obj.credit;  /*******credit******/
	document.getElementById('subtitles').innerHTML=video27_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor="";
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_video27 = function(){
	if (video27.currentTime >= 7.5) {
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
				//doSomething();
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
		/*
		function doSomething() {
			alert("-1 skip or -1 life or game over");
		}
		*/

		video27.pause();
		video27.removeEventListener("timeupdate",pause_video27);
		document.getElementById("video27").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video27_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonB").innerHTML=video27_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video27_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video27.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video27_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video27.addEventListener("timeupdate", pause_video27);

document.getElementById('video27').addEventListener('ended',playNextVideo,false);



function showvideo28() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video28").style.display = "block";
    document.getElementById('credit').innerHTML=video28_obj.credit;  /*******credit******/
	document.getElementById('subtitles').innerHTML=video28_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor="";
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_video28 = function(){
	if (video28.currentTime >= 13) {
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
				//doSomething();
			} else {
				_30sTimerElement.innerHTML = timeLeft;
				timeLeft--;
			}
		}
		/*
		function doSomething() {
			alert("-1 skip or -1 life or game over");
		}
		*/

		video28.pause();
		video28.removeEventListener("timeupdate",pause_video28);
		document.getElementById("video28").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video28_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonB").innerHTML=video28_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video28_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video28.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video28_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video28.addEventListener("timeupdate", pause_video28);

document.getElementById('video28').addEventListener('ended',playNextVideo,false);



function showvideo29() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video29").style.display = "block"; //show video29
	document.getElementById("video29").volume=0.75;
	document.getElementById('credit').innerHTML=video29_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video29_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor="";
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_video29 = function(){
	if (video29.currentTime >= 9) {
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
		video29.pause();
		video29.removeEventListener("timeupdate",pause_video29);
		document.getElementById("video29").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video29_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonB").innerHTML=video29_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video29.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video29_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video29_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video29.addEventListener("timeupdate", pause_video29);

document.getElementById('video29').addEventListener('ended',playNextVideo,false);



function showvideo30() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video30").style.display = "block"; //show video30
	document.getElementById("video30").volume=0.75;
	document.getElementById('credit').innerHTML=video30_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video30_obj.subtitles; /*****subtitles*****/
	document.getElementById('buttonA').innerHTML = "⠀"; buttonA.onclick=null;
	document.getElementById('buttonB').innerHTML = "⠀"; buttonB.onclick=null;
	document.getElementById('buttonC').innerHTML = "⠀"; buttonC.onclick=null;
	document.getElementById('buttonD').innerHTML = "⠀"; buttonD.onclick=null;
	document.getElementById('buttonA').style.backgroundColor="";
	document.getElementById('buttonB').style.backgroundColor="";
	document.getElementById('buttonC').style.backgroundColor="";
	document.getElementById('buttonD').style.backgroundColor="";
	document.getElementById("buttonPlay").style.display="none";
	document.getElementById("buttonSkipVideo").style.display="block";
}
let pause_video30 = function(){
	if (video30.currentTime >= 19) {
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
		video30.pause();
		video30.removeEventListener("timeupdate",pause_video30);
		document.getElementById("video30").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video30_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonB").innerHTML=video30_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video30.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video30_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video30_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video30.addEventListener("timeupdate", pause_video30);

document.getElementById('video30').addEventListener('ended',playNextVideo,false);



function showvideo31() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video31").style.display = "block";
	document.getElementById('credit').innerHTML=video31_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video31_obj.subtitles; /*****subtitles*****/
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
let pause_video31 = function(){
	if (video31.currentTime >= 12) {
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
		video31.pause();
		video31.removeEventListener("timeupdate",pause_video31);
		document.getElementById("video31").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video31_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video31_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video31_obj.C;
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
		video31.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video31_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video31.addEventListener("timeupdate", pause_video31);

document.getElementById('video31').addEventListener('ended',playNextVideo,false);



function showvideo32() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video32").style.display = "block";
	document.getElementById('credit').innerHTML=video32_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video32_obj.subtitles; /*****subtitles*****/
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
let pause_video32 = function(){
	if (video32.currentTime >= 2.5) {
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
		video32.pause();
		video32.removeEventListener("timeupdate",pause_video32);
		document.getElementById("video32").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video32_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video32_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video32_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video32.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video32_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video32.addEventListener("timeupdate", pause_video32);

document.getElementById('video32').addEventListener('ended',playNextVideo,false);



function showvideo33() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video33").style.display = "block";
	document.getElementById('credit').innerHTML=video33_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video33_obj.subtitles; /*****subtitles*****/
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
let pause_video33 = function(){
	if (video33.currentTime >= 2.9) {
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
		video33.pause();
		video33.removeEventListener("timeupdate",pause_video33);
		document.getElementById("video33").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video33_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonB").innerHTML=video33_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video33.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonC").innerHTML=video33_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video33_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video33.addEventListener("timeupdate", pause_video33);

document.getElementById('video33').addEventListener('ended',playNextVideo,false);



function showvideo34() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video34").style.display = "block";
	document.getElementById('credit').innerHTML=video34_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video34_obj.subtitles; /*****subtitles*****/
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
let pause_video34 = function(){
	if (video34.currentTime >= 4.5) {
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
		video34.pause();
		video34.removeEventListener("timeupdate",pause_video34);
		document.getElementById("video34").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video34_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video34_obj.B;
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
		video34.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video34_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video34_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video34.addEventListener("timeupdate", pause_video34);

document.getElementById('video34').addEventListener('ended',playNextVideo,false);



function showvideo35() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video35").style.display = "block";
	document.getElementById('credit').innerHTML=video35_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video35_obj.subtitles; /*****subtitles*****/
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
let pause_video35 = function(){
	if (video35.currentTime >= 5.5) {
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
		video35.pause();
		video35.removeEventListener("timeupdate",pause_video35);
		document.getElementById("video35").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video35_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video35_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video35_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video35_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video35.play();
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
video35.addEventListener("timeupdate", pause_video35);

document.getElementById('video35').addEventListener('ended',playNextVideo,false);



function showvideo36() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video36").style.display = "block";
	document.getElementById("video36").volume=0.5;
	document.getElementById('credit').innerHTML=video36_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video36_obj.subtitles; /*****subtitles*****/
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
let pause_video36 = function(){
	if (video36.currentTime >= 13) {
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
		video36.pause();
		video36.removeEventListener("timeupdate",pause_video36);
		document.getElementById("video36").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video36_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video36.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video36_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video36_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video36_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video36.addEventListener("timeupdate", pause_video36);

document.getElementById('video36').addEventListener('ended',playNextVideo,false);



function showvideo37() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video37").style.display = "block";
	document.getElementById("video37").volume=0.5;
	document.getElementById('credit').innerHTML=video37_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video37_obj.subtitles; /*****subtitles*****/
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
let pause_video37 = function(){
	if (video37.currentTime >= 5.5) {
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
		video37.pause();
		video37.removeEventListener("timeupdate",pause_video37);
		document.getElementById("video37").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video37_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video37_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video37_obj.C;
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
		video37.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video37_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video37.addEventListener("timeupdate", pause_video37);

document.getElementById('video37').addEventListener('ended',playNextVideo,false);



function showvideo39() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video39").style.display = "block";
	document.getElementById('credit').innerHTML=video39_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video39_obj.subtitles; /*****subtitles*****/
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
let pause_video39 = function(){
	if (video39.currentTime >= 0.75) {
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
		video39.pause();
		video39.removeEventListener("timeupdate",pause_video39);
		document.getElementById("video39").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video39_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video39_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video39_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video39_obj.D;
		document.getElementById("buttonD").onclick=function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video39.play();
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
video39.addEventListener("timeupdate", pause_video39);

document.getElementById('video39').addEventListener('ended',playNextVideo,false);

function showvideo41() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video41").style.display = "block";
	document.getElementById("video41").volume=0.5;
	document.getElementById('credit').innerHTML=video41_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video41_obj.subtitles; /*****subtitles*****/
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
let pause_video41 = function(){
	if (video41.currentTime >= 0.25) {
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
		video41.pause();
		video41.removeEventListener("timeupdate",pause_video41);
		document.getElementById("video41").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video41_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video41_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video41_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video41.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video41_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video41.addEventListener("timeupdate", pause_video41);

document.getElementById('video41').addEventListener('ended',playNextVideo,false);



function showvideo42() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video42").style.display = "block";
	document.getElementById("video42").volume=0.5;
	document.getElementById('credit').innerHTML=video42_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video42_obj.subtitles; /*****subtitles*****/
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
let pause_video42 = function(){
	if (video42.currentTime >= 1.5) {
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
		video42.pause();
		video42.removeEventListener("timeupdate",pause_video42);
		document.getElementById("video42").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video42_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video42_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video42_obj.C;
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
		video42.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video42_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video42.addEventListener("timeupdate", pause_video42);

document.getElementById('video42').addEventListener('ended',playNextVideo,false);



function showvideo43() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video43").style.display = "block";
	document.getElementById("video43").volume=0.25;
	document.getElementById('credit').innerHTML=video43_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video43_obj.subtitles; /*****subtitles*****/
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
let pause_video43 = function(){
	if (video43.currentTime >= 11) {
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
		video43.pause();
		video43.removeEventListener("timeupdate",pause_video43);
		document.getElementById("video43").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video43_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video43_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video43_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video43_obj.D;
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
		video43.play();
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
video43.addEventListener("timeupdate", pause_video43);

document.getElementById('video43').addEventListener('ended',playNextVideo,false);



function showvideo44() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video44").style.display = "block";
	document.getElementById("video44").volume=0.5;
	document.getElementById('credit').innerHTML=video44_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video44_obj.subtitles; /*****subtitles*****/
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
let pause_video44 = function(){
	if (video44.currentTime >= 2.65) {
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
		video44.pause();
		video44.removeEventListener("timeupdate",pause_video44);
		document.getElementById("video44").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video44_obj.A;
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
		video44.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video44_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video44_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video44_obj.D;
		document.getElementById("buttonD").onclick=function() {
		lives--;
		if (lives === 1 || lives === 0) document.getElementById('lives').style.backgroundColor='darkred';	
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
video44.addEventListener("timeupdate", pause_video44);

document.getElementById('video44').addEventListener('ended',playNextVideo,false);



function showvideo103() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video103").style.display = "block";
	document.getElementById('credit').innerHTML=video103_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video103_obj.subtitles; /*****subtitles*****/
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
let pause_video103 = function(){
	if (video103.currentTime >= 2.7) {
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
		video103.pause();
		video103.removeEventListener("timeupdate",pause_video103);
		document.getElementById("video103").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video103_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video103_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video103.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video103_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video103_obj.D;
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
video103.addEventListener("timeupdate", pause_video103);

document.getElementById('video103').addEventListener('ended',playNextVideo,false);



function showvideo104() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video104").style.display = "block";
	document.getElementById('credit').innerHTML=video104_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video104_obj.subtitles; /*****subtitles*****/
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
let pause_video104 = function(){
	if (video104.currentTime >= 7) {
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
		video104.pause();
		video104.removeEventListener("timeupdate",pause_video104);
		document.getElementById("video104").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video104_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video104_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video104_obj.C;
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
		video104.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video104_obj.D;
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
video104.addEventListener("timeupdate", pause_video104);

document.getElementById('video104').addEventListener('ended',playNextVideo,false);



function showvideo105() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video105").style.display = "block";
	document.getElementById('credit').innerHTML=video105_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video105_obj.subtitles; /*****subtitles*****/
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
let pause_video105 = function(){
	if (video105.currentTime >= 3) {
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
		video105.pause();
		video105.removeEventListener("timeupdate",pause_video105);
		document.getElementById("video105").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video105_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video105_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video105_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video105_obj.D;
		document.getElementById("buttonD").onclick=function() {
		score++; score++; //GOLDEN VIDEO
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video105.play();
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
video105.addEventListener("timeupdate", pause_video105);

document.getElementById('video105').addEventListener('ended',playNextVideo,false);



function showvideo106() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video106").style.display = "block";
	document.getElementById('credit').innerHTML=video106_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video106_obj.subtitles; /*****subtitles*****/
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
let pause_video106 = function(){
	if (video106.currentTime >= 6) {
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
		video106.pause();
		video106.removeEventListener("timeupdate",pause_video106);
		document.getElementById("video106").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video106_obj.A;
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
			video106.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video106_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video106_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video106_obj.D;
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
video106.addEventListener("timeupdate", pause_video106);

document.getElementById('video106').addEventListener('ended',playNextVideo,false);



function showvideo107() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video107").style.display = "block";
	document.getElementById('credit').innerHTML=video107_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video107_obj.subtitles; /*****subtitles*****/
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
let pause_video107 = function(){
	if (video107.currentTime >= 0.75) {
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
		video107.pause();
		video107.removeEventListener("timeupdate",pause_video107);
		document.getElementById("video107").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video107_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video107_obj.B;
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
		video107.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video107_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video107_obj.D;
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
video107.addEventListener("timeupdate", pause_video107);

document.getElementById('video107').addEventListener('ended',playNextVideo,false);



function showvideo108() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video108").style.display = "block";
	document.getElementById('credit').innerHTML=video108_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video108_obj.subtitles; /*****subtitles*****/
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
let pause_video108 = function(){
	if (video108.currentTime >= 4.5) {
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
		video108.pause();
		video108.removeEventListener("timeupdate",pause_video108);
		document.getElementById("video108").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video108_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video108_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video108_obj.C;
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
		video108.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video108_obj.D;
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
video108.addEventListener("timeupdate", pause_video108);

document.getElementById('video108').addEventListener('ended',playNextVideo,false);



function showvideo109() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video109").style.display = "block";
	document.getElementById('credit').innerHTML=video109_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video109_obj.subtitles; /*****subtitles*****/
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
let pause_video109 = function(){
	if (video109.currentTime >= 8) {
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
		video109.pause();
		video109.removeEventListener("timeupdate",pause_video109);
		document.getElementById("video109").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video109_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video109_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video109_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video109_obj.D;
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
		video109.play();
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
video109.addEventListener("timeupdate", pause_video109);

document.getElementById('video109').addEventListener('ended',playNextVideo,false);



function showvideo110() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video110").style.display = "block";
	document.getElementById('credit').innerHTML=video110_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video110_obj.subtitles; /*****subtitles*****/
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
let pause_video110 = function(){
	if (video110.currentTime >= 4) {
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
		video110.pause();
		video110.removeEventListener("timeupdate",pause_video110);
		document.getElementById("video110").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video110_obj.A;
		document.getElementById("buttonA").onclick = function() {
			score++; score++; //GOLDEN VIDEO
			if (score > high_score) high_score = score;
			if (buttonA.onclick = false) this.onclick = null; 
			if (buttonB.onclick = false) this.onclick = null;
			if (buttonC.onclick = false) this.onclick = null;
			if (buttonD.onclick = false) this.onclick = null;
			if (buttonSkipVideo.onclick = false) this.onclick = null;
			document.getElementById("score").innerHTML = "SCORE: <br>" + score;
			document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
			this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
			video110.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video110_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video110_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video110_obj.D;
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
video110.addEventListener("timeupdate", pause_video110);

document.getElementById('video110').addEventListener('ended',playNextVideo,false);



function showvideo111() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video111").style.display = "block";
	document.getElementById('credit').innerHTML=video111_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video111_obj.subtitles; /*****subtitles*****/
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
let pause_video111 = function(){
	if (video111.currentTime >= 9) {
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
		video111.pause();
		video111.removeEventListener("timeupdate",pause_video111);
		document.getElementById("video111").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video111_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video111_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video111.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video111_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video111_obj.D;
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
video111.addEventListener("timeupdate", pause_video111);

document.getElementById('video111').addEventListener('ended',playNextVideo,false);



function showvideo112() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video112").style.display = "block";
	document.getElementById('credit').innerHTML=video112_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video112_obj.subtitles; /*****subtitles*****/
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
let pause_video112 = function(){
	if (video112.currentTime >= 2) {
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
		video112.pause();
		video112.removeEventListener("timeupdate",pause_video112);
		document.getElementById("video112").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video112_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video112_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video112_obj.C;
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
		video112.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video112_obj.D;
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
video112.addEventListener("timeupdate", pause_video112);

document.getElementById('video112').addEventListener('ended',playNextVideo,false);



function showvideo113() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video113").style.display = "block";
	document.getElementById('credit').innerHTML=video113_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video113_obj.subtitles; /*****subtitles*****/
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
let pause_video113 = function(){
	if (video113.currentTime >= 18) {
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
		video113.pause();
		video113.removeEventListener("timeupdate",pause_video113);
		document.getElementById("video113").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video113_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video113_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video113_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video113_obj.D;
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
		video113.play();
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
video113.addEventListener("timeupdate", pause_video113);

document.getElementById('video113').addEventListener('ended',playNextVideo,false);



function showvideo114() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video114").style.display = "block";
	document.getElementById('credit').innerHTML=video114_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video114_obj.subtitles; /*****subtitles*****/
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
let pause_video114 = function(){
	if (video114.currentTime >= 0.5) {
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
		video114.pause();
		video114.removeEventListener("timeupdate",pause_video114);
		document.getElementById("video114").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video114_obj.A;
		document.getElementById("buttonA").onclick = function() {
			lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
			video114.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video114_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video114_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video114_obj.D;
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
video114.addEventListener("timeupdate", pause_video114);

document.getElementById('video114').addEventListener('ended',playNextVideo,false);



function showvideo115() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video115").style.display = "block";
	document.getElementById('credit').innerHTML=video115_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video115_obj.subtitles; /*****subtitles*****/
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
let pause_video115 = function(){
	if (video115.currentTime >= 6) {
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
		video115.pause();
		video115.removeEventListener("timeupdate",pause_video115);
		document.getElementById("video115").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video115_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video115_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives++; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //EMERALD VIDEO
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
		video115.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video115_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video115_obj.D;
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
video115.addEventListener("timeupdate", pause_video115);

document.getElementById('video115').addEventListener('ended',playNextVideo,false);

function showvideo119() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video119").style.display = "block";
	document.getElementById('credit').innerHTML=video119_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video119_obj.subtitles; /*****subtitles*****/
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



let pause_video119 = function(){
	if (video119.currentTime >= 10) {
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
		video119.pause();
		video119.removeEventListener("timeupdate",pause_video119);
		document.getElementById("video119").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video119_obj.A;
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
			video119.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video119_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video119_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video119_obj.D;
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
video119.addEventListener("timeupdate", pause_video119);

document.getElementById('video119').addEventListener('ended',playNextVideo,false);


/*****************************************************************************************************************************************/

//doesnt work, only works inline
window.addEventListener('keydown', function(e) {
	//fix bug: music plays in settings when targeted and spacebar is pressed
	if ( ( (e.key == 'Spacebar' || e.key == 'Space') || (e.keyCode == 32) ) && (e.target == document.body) || 
	   (e.target == document.getElementsByClassName('modal-content')) || 
	   (e.target == document.getElementById('timer_song')) ) { 
	 		e.preventDefault(); 
	 	}
});

var disablePicInPic=document.querySelectorAll('video').forEach((disablePicInPic) => (disablePicInPic.disablePictureInPicture = true));

var disableDoubleClick=document.querySelectorAll('video').forEach((disableDoubleClick).onclick = function() { return false; });
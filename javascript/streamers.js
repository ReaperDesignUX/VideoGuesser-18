//"use strict"; breaks Firefox

//to stop double-click-fullscreen on video
/*document.getElementById('video1').onclick = function() { return false; }; document.getElementById('video2').onclick = function() { return false; }; document.getElementById('video3').onclick = function() { return false; }; document.getElementById('video4').onclick = function() { return false; }; document.getElementById('video5').onclick = function() { return false; };document.getElementById('video6').onclick = function() { return false; };*/

//showvideo16, <--don't remove these videos from HTML; (breaks code)
//showvideo97,showvideo98,showvideo99,showvideo100,showvideo101,showvideo102, <--don't remove these videos from HTML; (breaks code)
const videos = [
	showvideo17,showvideo18,showvideo22,showvideo23,showvideo28,showvideo31,showvideo32,showvideo33,
	showvideo34,showvideo35,showvideo36,showvideo37,showvideo39,showvideo41,showvideo42,showvideo43,
	showvideo44,showvideo116,showvideo117,showvideo118,
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

/*****************************************************************************************************************************************/

//🚫DO NOT TOUCH🚫
document.querySelectorAll('video').forEach((video) => (video.style.display = "none"));
document.getElementById('videoStart').style.display = "block";
document.getElementById('videoStart').style.display = "none";
playNextVideo();

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



function showvideo116() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video116").style.display = "block";
	document.getElementById('credit').innerHTML=video116_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video116_obj.subtitles; /*****subtitles*****/
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
let pause_video116 = function(){
	if (video116.currentTime >= 2.5) {
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
		video116.pause();
		video116.removeEventListener("timeupdate",pause_video116);
		document.getElementById("video116").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video116_obj.A;
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
			video116.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video116_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video116_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video116_obj.D;
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
video116.addEventListener("timeupdate", pause_video116);

document.getElementById('video116').addEventListener('ended',playNextVideo,false);



function showvideo117() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video117").style.display = "block";
	document.getElementById("video117").volume=0.5;
	document.getElementById('credit').innerHTML=video117_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video117_obj.subtitles; /*****subtitles*****/
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
let pause_video117 = function(){
	if (video117.currentTime >= 2) {
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
		video117.pause();
		video117.removeEventListener("timeupdate",pause_video117);
		document.getElementById("video117").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video117_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video117_obj.B;
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
		video117.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video117_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video117_obj.D;
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
video117.addEventListener("timeupdate", pause_video117);

document.getElementById('video117').addEventListener('ended',playNextVideo,false);



function showvideo118() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video118").style.display = "block";
	document.getElementById('credit').innerHTML=video118_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video118_obj.subtitles; /*****subtitles*****/
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
let pause_video118 = function(){
	if (video118.currentTime >= 3) {
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
		video118.pause();
		video118.removeEventListener("timeupdate",pause_video118);
		document.getElementById("video118").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video118_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video118_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video118_obj.C;
		document.getElementById("buttonC").onclick = function() {
			score+=3; lives+=3; document.getElementById('score').innerHTML="SCORE:<br>" + score; document.getElementById('lives').innerHTML="LIVES:<br>" + lives; //DIAMOND VIDEO
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video118.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video118_obj.D;
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
video118.addEventListener("timeupdate", pause_video118);

document.getElementById('video118').addEventListener('ended',playNextVideo,false);







//fix 97-102

//no more capital V

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
const videos = [
	showvideoRickRoll,
];

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
if (document.getElementById('video4').addEventListener('ended',function() {
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

function showvideoRickRoll() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("videoRickRoll").style.display = "block";
    document.getElementById("videoRickRoll").volume=0.25;
	document.getElementById('credit').innerHTML=videoRickRoll_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=videoRickRoll_obj.subtitles; /*****subtitles*****/
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
let pause_videoRickRoll = function(){
	if (videoRickRoll.currentTime >= 999) {
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
		videoRickRoll.pause();
		videoRickRoll.removeEventListener("timeupdate",pause_videoRickRoll);
		document.getElementById("videoRickRoll").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=videoRickRoll_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=videoRickRoll_obj.B;
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
		videoRickRoll.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=videoRickRoll_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=videoRickRoll_obj.D;
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
videoRickRoll.addEventListener("timeupdate", pause_videoRickRoll);

document.getElementById('videoRickRoll').addEventListener('ended',playNextVideo,false);
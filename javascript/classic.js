//"use strict"; breaks Firefox

//to stop double-click-fullscreen on video
/*document.getElementById('video1').onclick = function() { return false; }; document.getElementById('video2').onclick = function() { return false; }; document.getElementById('video3').onclick = function() { return false; }; document.getElementById('video4').onclick = function() { return false; }; document.getElementById('video5').onclick = function() { return false; };document.getElementById('video6').onclick = function() { return false; };*/

//showvideo2,showvideo3, <--don't remove these videos from HTML; (breaks code)
//video21 & video25 - .onload=video.play test
const videos = [
	showvideo4,showvideo5,showvideo6,showvideo7,showvideo8,showvideo9,showvideo10,showvideo11,
	showvideo12,showvideo13,showvideo14,showvideo15,showvideo19,showvideo20,showvideo21,showvideo24,
	showvideo25,showvideo26,showvideo27,showvideo28,showvideo29,showvideo30,showvideo40,showvideo45,
	showvideo46,showvideo47,showvideo48,showvideo49,showvideo89,showvideo90,showvideo91,showvideo92,
	showvideo93,showvideo95,showvideo96,showvideo120,
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

function showvideo2() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById('video2').style.display = "block" //show video2
	document.getElementById('credit').innerHTML=video2_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video2_obj.subtitles; /*****subtitles*****/
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
let pause_video2 = function(){
	if (video2.currentTime >= 4.0) {
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

		video2.pause();
		video2.removeEventListener("timeupdate",pause_video2);
		document.getElementById("video2").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video2_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonB").innerHTML=video2_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video2_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video2_obj.D;
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
		video2.play();
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
video2.addEventListener("timeupdate", pause_video2);

document.getElementById('video2').addEventListener('ended',playNextVideo,false);



function showvideo3() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video3").style.display = "block"; //show video3
    document.getElementById('credit').innerHTML=video3_obj.credit;  /*******credit******/
	document.getElementById('subtitles').innerHTML=video3_obj.subtitles; /*****subtitles*****/
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
let pause_video3 = function(){
	if (video3.currentTime >= 9.5) {
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

		video3.pause();
		video3.removeEventListener("timeupdate",pause_video3);
		document.getElementById("video3").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video3_obj.A;
		document.getElementById("buttonA").onclick = function() {
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
        video3.play();
        playCorrectAnswerAudio();
        stopTimerSong();
            { 
            this._30sTimerElement.innerHTML = (timeLeft = "");
            if (timeLeft === 0) (timeLeft = "");
            }
        };
		
		document.getElementById("buttonB").innerHTML=video3_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video3_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video3_obj.D;
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
video3.addEventListener("timeupdate", pause_video3);

document.getElementById('video3').addEventListener('ended',playNextVideo,false);



function showvideo4() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video4").style.display = "block"; //show video4
	document.getElementById('credit').innerHTML=video4_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video4_obj.subtitles; /*****subtitles*****/
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
let pause_video4 = function(){
	if (video4.currentTime >= 2) {
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
		video4.pause();
		video4.removeEventListener("timeupdate",pause_video4);
		document.getElementById("video4").style.pointerEvents = "none";

		document.getElementById("buttonA").innerHTML=video4_obj.A;
		document.getElementById("buttonA").onclick = function() {
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
        video4.play();
        playCorrectAnswerAudio();
        stopTimerSong();
            { 
            this._30sTimerElement.innerHTML = (timeLeft = "");
            if (timeLeft === 0) (timeLeft = "");
            }
        };
		
		document.getElementById("buttonB").innerHTML=video4_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video4_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video4_obj.D;
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
video4.addEventListener("timeupdate", pause_video4);

document.getElementById('video4').addEventListener('ended',playNextVideo,false);



function showvideo5() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video5").style.display = "block"; //show video5
	document.getElementById('credit').innerHTML=video5_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video5_obj.subtitles; /*****subtitles*****/
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
let pause_video5 = function(){
	if (video5.currentTime >= 4) {
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
		video5.pause();
		video5.removeEventListener("timeupdate",pause_video5);
		document.getElementById("video5").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video5_obj.A;
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
		
		document.getElementById("buttonB").innerHTML=video5_obj.B;
		document.getElementById("buttonB").onclick = function() {
		score++;
		if (score > high_score) high_score = score;

		if (buttonA.onclick = false)  this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video5.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video5_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video5_obj.D;
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
video5.addEventListener("timeupdate", pause_video5);

document.getElementById('video5').addEventListener('ended',playNextVideo,false);



function showvideo6() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video6").style.display = "block"; //show video6
	document.getElementById('credit').innerHTML=video6_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video6_obj.subtitles; /*****subtitles*****/
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
let pause_video6 = function(){
	if (video6.currentTime >= 2) {
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
		video6.pause();
		video6.removeEventListener("timeupdate",pause_video6);
		document.getElementById("video6").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video6_obj.A;
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
		video6.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video6_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video6_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video6_obj.D;
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
video6.addEventListener("timeupdate", pause_video6);

document.getElementById('video6').addEventListener('ended',playNextVideo,false);



function showvideo7() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video7").style.display = "block"; //show video7
	document.getElementById("video7").volume=0.5;
	document.getElementById('credit').innerHTML=video7_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video7_obj.subtitles; /*****subtitles*****/
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
let pause_video7 = function(){
	if (video7.currentTime >= 13) {
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
		video7.pause();
		video7.removeEventListener("timeupdate",pause_video7);
		document.getElementById("video7").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video7_obj.A;
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

		document.getElementById("buttonB").innerHTML=video7_obj.B;
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
		video7.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video7_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video7_obj.D;
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
video7.addEventListener("timeupdate", pause_video7);

document.getElementById('video7').addEventListener('ended',playNextVideo,false);



function showvideo8() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video8").style.display = "block"; //show video8
	document.getElementById('credit').innerHTML=video8_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video8_obj.subtitles; /*****subtitles*****/
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
let pause_video8 = function(){
	if (video8.currentTime >= 6.8) {
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
		video8.pause();
		video8.removeEventListener("timeupdate",pause_video8);
		document.getElementById("video8").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video8_obj.A;
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
		video8.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video8_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video8_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video8_obj.D;
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
video8.addEventListener("timeupdate", pause_video8);

document.getElementById('video8').addEventListener('ended',playNextVideo,false);



function showvideo9() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video9").style.display = "block"; //show video9
	document.getElementById("video9").volume=0.3;
	document.getElementById('credit').innerHTML=video9_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video9_obj.subtitles; /*****subtitles*****/
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
let pause_video9 = function(){
	if (video9.currentTime >= 1) {
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
		video9.pause();
		video9.removeEventListener("timeupdate",pause_video9);
		document.getElementById("video9").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video9_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video9_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video9_obj.C;
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
		video9.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video9_obj.D;
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
video9.addEventListener("timeupdate", pause_video9);

document.getElementById('video9').addEventListener('ended',playNextVideo,false);



function showvideo10() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video10").style.display = "block"; //show video10
	document.getElementById('credit').innerHTML=video10_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video10_obj.subtitles; /*****subtitles*****/
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
let pause_video10 = function(){
	if (video10.currentTime >= 2.2) {
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
		video10.pause();
		video10.removeEventListener("timeupdate",pause_video10);
		document.getElementById("video10").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video10_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video10_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video10_obj.C;
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
		video10.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video10_obj.D;
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
video10.addEventListener("timeupdate", pause_video10);

document.getElementById('video10').addEventListener('ended',playNextVideo,false);



function showvideo11() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video11").style.display = "block"; //show video11
	document.getElementById('credit').innerHTML=video11_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video11_obj.subtitles; /*****subtitles*****/
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
let pause_video11 = function(){
	if (video11.currentTime >= 3.3) {
		//playTimerSong(); 
		//30s timer
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		sleep(0).then(() => { /*var timerId =*/ setInterval(countdown, 1000); 
		});
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
		video11.pause();
		video11.removeEventListener("timeupdate",pause_video11);
		document.getElementById("video11").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video11_obj.A;
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
		video11.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video11_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video11_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video11_obj.D;
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
video11.addEventListener("timeupdate", pause_video11);

document.getElementById('video11').addEventListener('ended',playNextVideo,false);



function showvideo12() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video12").style.display = "block"; //show video12
	document.getElementById('credit').innerHTML=video12_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video12_obj.subtitles; /*****subtitles*****/
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
let pause_video12 = function(){
	if (video12.currentTime >= 1.6) {
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
		video12.pause();
		video12.removeEventListener("timeupdate",pause_video12);
		document.getElementById("video12").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video12_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video12_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video12_obj.C;
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
		video12.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video12_obj.D;
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
video12.addEventListener("timeupdate", pause_video12);

document.getElementById('video12').addEventListener('ended',playNextVideo,false);



function showvideo13() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video13").style.display = "block"; //show video13
	document.getElementById('credit').innerHTML=video13_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video13_obj.subtitles; /*****subtitles*****/
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
let pause_video13 = function(){
	if (video13.currentTime >= 1) {
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
		video13.pause();
		video13.removeEventListener("timeupdate",pause_video13);
		document.getElementById("video13").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video13_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video13_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video13_obj.C;
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

		document.getElementById("buttonD").innerHTML=video13_obj.D;
		document.getElementById("buttonD").onclick=function() {
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
		video13.play();
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
video13.addEventListener("timeupdate", pause_video13);

document.getElementById('video13').addEventListener('ended',playNextVideo,false);



function showvideo14() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video14").style.display = "block"; //show video14
	document.getElementById('credit').innerHTML=video14_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video14_obj.subtitles; /*****subtitles*****/
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
let pause_video14 = function(){
	if (video14.currentTime >= 1) {
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
		video14.pause();
		video14.removeEventListener("timeupdate",pause_video14);
		document.getElementById("video14").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video14_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video14_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video14_obj.C;
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
		video14.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video14_obj.D;
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
video14.addEventListener("timeupdate", pause_video14);

document.getElementById('video14').addEventListener('ended',playNextVideo,false);



function showvideo15() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video15").style.display = "block"; //show video15
	document.getElementById('credit').innerHTML=video15_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video15_obj.subtitles; /*****subtitles*****/
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
let pause_video15 = function(){
	if (video15.currentTime >= 1) {
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
		video15.pause();
		video15.removeEventListener("timeupdate",pause_video15);
		document.getElementById("video15").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video15_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video15_obj.B;
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
		video15.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video15_obj.C;
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

		document.getElementById("buttonD").innerHTML=video15_obj.D;
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
video15.addEventListener("timeupdate", pause_video15);

document.getElementById('video15').addEventListener('ended',playNextVideo,false);



function showvideo19() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video19").style.display = "block";
	document.getElementById('credit').innerHTML=video19_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video19_obj.subtitles; /*****subtitles*****/
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
let pause_video19 = function(){
	if (video19.currentTime >= 1) {
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
		video19.pause();
		video19.removeEventListener("timeupdate",pause_video19);
		document.getElementById("video19").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video19_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video19_obj.B;
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
		video19.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video19_obj.C;
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

		document.getElementById("buttonD").innerHTML=video19_obj.D;
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
video19.addEventListener("timeupdate", pause_video19);

document.getElementById('video19').addEventListener('ended',playNextVideo,false);



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


//.onload=video.play test
function showvideo21() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video21").style.display = "block";
	//document.querySelector('video').onload=video21.play();
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



function showvideo24() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video24").style.display = "block";
	//document.getElementById('video24').onload=video24.play();
	document.getElementById('credit').innerHTML=video24_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video24_obj.subtitles; /*****subtitles*****/
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
let pause_video24 = function(){
	if (video24.currentTime >= 2) {
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
		video24.pause();
		video24.removeEventListener("timeupdate",pause_video24);
		document.getElementById("video24").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video24_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video24_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video24_obj.C;
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
		video24.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video24_obj.D;
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
video24.addEventListener("timeupdate", pause_video24);

document.getElementById('video24').addEventListener('ended',playNextVideo,false);


//.onload=video.play() test 
function showvideo25() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video25").style.display = "block";
	//document.querySelector('video').onload=video25.play();
	document.getElementById('credit').innerHTML=video25_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video25_obj.subtitles; /*****subtitles*****/
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
let pause_video25 = function(){
	if (video25.currentTime >= 0.5) {
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
		video25.pause();
		video25.removeEventListener("timeupdate",pause_video25);
		document.getElementById("video25").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video25_obj.A;
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
		video25.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video25_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video25_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video25_obj.D;
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
video25.addEventListener("timeupdate", pause_video25);

document.getElementById('video25').addEventListener('ended',playNextVideo,false);



function showvideo26() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video26").style.display = "block";
    document.getElementById('credit').innerHTML=video26_obj.credit;  /*******credit******/
	document.getElementById('subtitles').innerHTML=video26_obj.subtitles; /*****subtitles*****/
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
let pause_video26 = function(){
	if (video26.currentTime >= 4) {
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

		video26.pause();
		video26.removeEventListener("timeupdate",pause_video26);
		document.getElementById("video26").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video26_obj.A;
		document.getElementById("buttonA").onclick = function() {
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
        video26.play();
        playCorrectAnswerAudio();
        stopTimerSong();
            { 
            this._30sTimerElement.innerHTML = (timeLeft = "");
            if (timeLeft === 0) (timeLeft = "");
            }
        };
		
		document.getElementById("buttonB").innerHTML=video26_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video26_obj.C;
		document.getElementById("buttonC").onclick = function() {
        lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video26_obj.D;
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
video26.addEventListener("timeupdate", pause_video26);

document.getElementById('video26').addEventListener('ended',playNextVideo,false);



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



function showvideo40() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video40").style.display = "block";
	document.getElementById("video40").volume=0.75;
	document.getElementById('credit').innerHTML=video40_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video40_obj.subtitles; /*****subtitles*****/
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
let pause_video40 = function () {
	if (video40.currentTime >= 8.5) {
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
		video40.pause();
		video40.removeEventListener("timeupdate", pause_video40);
		document.getElementById("video40").style.pointerEvents = "none";

		document.getElementById("buttonA").innerHTML = video40_obj.A;
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

		document.getElementById("buttonB").innerHTML = video40_obj.B;
		document.getElementById("buttonB").onclick = function () {
			lives++; document.getElementById('lives').innerHTML = "LIVES:<br>" + lives; //EMERALD VIDEO
			score++;
			if (score > high_score)
				high_score = score;
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
			video40.play();
			playCorrectAnswerAudio();
			stopTimerSong();
			{
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0)
					(timeLeft = "");
			}
		};

		document.getElementById("buttonC").innerHTML = video40_obj.C;
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

		document.getElementById("buttonD").innerHTML = video40_obj.D;
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
video40.addEventListener("timeupdate", pause_video40);

document.getElementById('video40').addEventListener('ended',playNextVideo,false);



function showvideo45() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video45").style.display = "block";
	document.getElementById('credit').innerHTML=video45_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video45_obj.subtitles; /*****subtitles*****/
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
let pause_video45 = function(){
	if (video45.currentTime >= 1.5) {
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
		video45.pause();
		video45.removeEventListener("timeupdate",pause_video45);
		document.getElementById("video45").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video45_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives++; document.getElementById('lives').innerHTML = "LIVES:<br>" + lives; //EMERALD VIDEO
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
		video45.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video45_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video45_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video45_obj.D;
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
video45.addEventListener("timeupdate", pause_video45);

document.getElementById('video45').addEventListener('ended',playNextVideo,false);



function showvideo46() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video46").style.display = "block";
	document.getElementById('credit').innerHTML=video46_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video46_obj.subtitles; /*****subtitles*****/
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
let pause_video46 = function(){
	if (video46.currentTime >= 1) {
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
		video46.pause();
		video46.removeEventListener("timeupdate",pause_video46);
		document.getElementById("video46").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video46_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video46_obj.B;
		document.getElementById("buttonB").onclick = function() {
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
		video46.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video46_obj.C;
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

		document.getElementById("buttonD").innerHTML=video46_obj.D;
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
video46.addEventListener("timeupdate", pause_video46);

document.getElementById('video46').addEventListener('ended',playNextVideo,false);



function showvideo47() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video47").style.display = "block";
	document.getElementById('credit').innerHTML=video47_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video47_obj.subtitles; /*****subtitles*****/
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
let pause_video47 = function(){
	if (video47.currentTime >= 2) {
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
		video47.pause();
		video47.removeEventListener("timeupdate",pause_video47);
		document.getElementById("video47").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video47_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video47_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video47_obj.C;
		document.getElementById("buttonC").onclick = function() {
		score++; score++ //GOLDEN VIDEO
		if (score > high_score) high_score = score;
		if (buttonA.onclick = false) this.onclick = null; 
		if (buttonB.onclick = false) this.onclick = null;
		if (buttonC.onclick = false) this.onclick = null;
		if (buttonD.onclick = false) this.onclick = null;
		if (buttonSkipVideo.onclick = false) this.onclick = null;
		document.getElementById("score").innerHTML = "SCORE: <br>" + score;
		document.getElementById("high_score").innerHTML = "HIGH SCORE: <br>" + high_score;
		this.style.backgroundColor = 'green'; this.style.color = '#fff'; 
		video47.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video47_obj.D;
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
video47.addEventListener("timeupdate", pause_video47);

document.getElementById('video47').addEventListener('ended',playNextVideo,false);

function showvideo48() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video48").style.display = "block";
	document.getElementById('credit').innerHTML=video48_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video48_obj.subtitles; /*****subtitles*****/
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
let pause_video48 = function(){
	if (video48.currentTime >= 1) {
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
		video48.pause();
		video48.removeEventListener("timeupdate",pause_video48);
		document.getElementById("video48").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video48_obj.A;
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

		document.getElementById("buttonB").innerHTML=video48_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video48_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video48_obj.D;
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
		video48.play();
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
video48.addEventListener("timeupdate", pause_video48);

document.getElementById('video48').addEventListener('ended',playNextVideo,false);



function showvideo49() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video49").style.display = "block";
	document.getElementById('credit').innerHTML=video49_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video49_obj.subtitles; /*****subtitles*****/
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
let pause_video49 = function(){
	if (video49.currentTime >= 0.1) {
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
		video49.pause();
		video49.removeEventListener("timeupdate",pause_video49);
		document.getElementById("video49").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video49_obj.A;
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
		video49.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML=video49_obj.B;
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
		
		document.getElementById("buttonC").innerHTML=video49_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonD").innerHTML=video49_obj.D;
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
video49.addEventListener("timeupdate", pause_video49);

document.getElementById('video49').addEventListener('ended',playNextVideo,false);



function showvideo89() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video89").style.display = "block";
	document.getElementById("video89").volume = 0.5;
	document.getElementById('credit').innerHTML=video89_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video89_obj.subtitles; /*****subtitles*****/
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
let pause_video89 = function(){
	if (video89.currentTime >= 10) {
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
		video89.pause();
		video89.removeEventListener("timeupdate",pause_video89);
		document.getElementById("video89").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video89_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video89_obj.B;
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
		video89.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video89_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video89_obj.D;
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
video89.addEventListener("timeupdate", pause_video89);

document.getElementById('video89').addEventListener('ended',playNextVideo,false);



function showvideo90() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video90").style.display = "block";
	document.getElementById("video90").currentTime = 3;
	document.getElementById('credit').innerHTML=video90_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video90_obj.subtitles; /*****subtitles*****/
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
let pause_video90 = function(){
	if (video90.currentTime >= 5) {
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
		video90.pause();
		video90.removeEventListener("timeupdate",pause_video90);
		document.getElementById("video90").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video90_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video90_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video90_obj.C;
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
		video90.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};

		document.getElementById("buttonD").innerHTML=video90_obj.D;
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
video90.addEventListener("timeupdate", pause_video90);

document.getElementById('video90').addEventListener('ended',playNextVideo,false);



function showvideo91() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video91").style.display = "block";
	document.getElementById('credit').innerHTML=video91_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video91_obj.subtitles; /*****subtitles*****/
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
let pause_video91 = function(){
	if (video91.currentTime >= 5) {
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
		video91.pause();
		video91.removeEventListener("timeupdate",pause_video91);
		document.getElementById("video91").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video91_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video91_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video91_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video91_obj.D;
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
		video91.play();
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
video91.addEventListener("timeupdate", pause_video91);

document.getElementById('video91').addEventListener('ended',playNextVideo,false);



function showvideo92() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video92").style.display = "block";
	document.getElementById("video92").volume=0.5;
	document.getElementById('credit').innerHTML=video92_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video92_obj.subtitles; /*****subtitles*****/
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
function pause_video92() {
	if (video92.currentTime >= 20) {
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
		video92.pause();
		video92.removeEventListener("timeupdate", pause_video92);
		document.getElementById("video92").style.pointerEvents = "none";

		document.getElementById("buttonA").innerHTML = video92_obj.A;
		document.getElementById("buttonA").onclick = function () {
			score++;
			if (score > high_score)
				high_score = score;
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
			video92.play();
			playCorrectAnswerAudio();
			stopTimerSong();
			{
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0)
					(timeLeft = "");
			}
		};

		document.getElementById("buttonB").innerHTML = video92_obj.B;
		document.getElementById("buttonB").onclick = function () {
			lives--;
			if (lives < 0)
				lives = 0;
			if (lives === 0) { setTimeout(function () { playGameOverAudio(); /*stopTimerSong();*/ /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false)
				this.onclick = null;
			document.getElementById("lives").innerHTML = "LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		};

		document.getElementById("buttonC").innerHTML = video92_obj.C;
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

		document.getElementById("buttonD").innerHTML = video92_obj.D;
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
video92.addEventListener("timeupdate", pause_video92);

document.getElementById('video92').addEventListener('ended',playNextVideo,false);



function showvideo93() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video93").style.display = "block";
	document.getElementById("video93").volume=0.25;
	document.getElementById('credit').innerHTML=video93_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video93_obj.subtitles; /*****subtitles*****/
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
let pause_video93 = function(){
	if (video93.currentTime >= 0.25) {
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
		video93.pause();
		video93.removeEventListener("timeupdate",pause_video93);
		document.getElementById("video93").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video93_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video93_obj.B;
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
		video93.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video93_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video93_obj.D;
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
video93.addEventListener("timeupdate", pause_video93);

document.getElementById('video93').addEventListener('ended',playNextVideo,false);



function showvideo95() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video95").style.display = "block";
	document.getElementById("video95").volume=0.25;
	document.getElementById('credit').innerHTML=video95_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video95_obj.subtitles; /*****subtitles*****/
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
let pause_video95 = function(){
	if (video95.currentTime >= 1.5) {
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
		video95.pause();
		video95.removeEventListener("timeupdate",pause_video95);
		document.getElementById("video95").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video95_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video95_obj.B;
		document.getElementById("buttonB").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonB.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};
		
		document.getElementById("buttonC").innerHTML=video95_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video95_obj.D;
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
		video95.play();
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
video95.addEventListener("timeupdate", pause_video95);

document.getElementById('video95').addEventListener('ended',playNextVideo,false);



function showvideo96() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video96").style.display = "block";
	document.getElementById("video96").volume=0.25;
	document.getElementById('credit').innerHTML=video96_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video96_obj.subtitles; /*****subtitles*****/
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
let pause_video96 = function(){
	if (video96.currentTime >= 4) {
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
		video96.pause();
		video96.removeEventListener("timeupdate",pause_video96);
		document.getElementById("video96").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video96_obj.A;
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
			video96.play();
			playCorrectAnswerAudio();
			stopTimerSong();
				{ 
				this._30sTimerElement.innerHTML = (timeLeft = "");
				if (timeLeft === 0) (timeLeft = "");
				}
		};

		document.getElementById("buttonB").innerHTML=video96_obj.B;
		document.getElementById("buttonB").onclick = function() {
			lives--;
			if (lives < 0) lives = 0;
			if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
			if (buttonB.onclick = false) this.onclick = null;
			document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
			this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
			playWrongAnswerAudio();
		}
		
		document.getElementById("buttonC").innerHTML=video96_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video96_obj.D;
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
video96.addEventListener("timeupdate", pause_video96);

document.getElementById('video96').addEventListener('ended',playNextVideo,false);



function showvideo120() {
	document.querySelectorAll('video').forEach((video) => (video.style.display = "none")) //hide videos
	document.getElementById("video120").style.display = "block";
	document.getElementById("video120").volume=0.2;
	document.getElementById('credit').innerHTML=video120_obj.credit; /*******credit******/
	document.getElementById('subtitles').innerHTML=video120_obj.subtitles; /*****subtitles*****/
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
let pause_video120 = function(){
	if (video120.currentTime >= 13) {
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
		video120.pause();
		video120.removeEventListener("timeupdate",pause_video120);
		document.getElementById("video120").style.pointerEvents = "none";
	
		document.getElementById("buttonA").innerHTML=video120_obj.A;
		document.getElementById("buttonA").onclick = function() {
		lives--;
		if (lives < 0) lives = 0;
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonA.onclick = false) this.onclick = null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		}

		document.getElementById("buttonB").innerHTML=video120_obj.B;
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
		video120.play();
		playCorrectAnswerAudio();
		stopTimerSong();
			{ 
			this._30sTimerElement.innerHTML = (timeLeft = "");
			if (timeLeft === 0) (timeLeft = "");
			}
		};
		
		document.getElementById("buttonC").innerHTML=video120_obj.C;
		document.getElementById("buttonC").onclick = function() {
		lives--;
		if (lives < 0) lives = 0; 
		if (lives === 0) { setTimeout(function() { playGameOverAudio(); /*stopTimerSong();*/ gameOver(); }, 1); }
		if (buttonC.onclick = false) this.onclick=null;
		document.getElementById("lives").innerHTML="LIVES: <br>" + lives;
		this.style.backgroundColor = 'darkred'; this.style.color = '#fff';
		playWrongAnswerAudio();
		};

		document.getElementById("buttonD").innerHTML=video120_obj.D;
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
video120.addEventListener("timeupdate", pause_video120);

document.getElementById('video120').addEventListener('ended',playNextVideo,false);


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
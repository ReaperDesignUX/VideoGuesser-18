gameOver = () => {
    if (lives === 0) document.getElementById('gameOverBox').style.display="block";
    isStorage && localStorage.setItem('high_score', high_score);
    document.getElementById('currentHighScore').innerHTML="<u style='color:royalblue;'>" + high_score + "</u>";
    buttonA.onclick=null; buttonB.onclick=null;buttonC.onclick=null;buttonD.onclick=null;buttonSkipVideo.onclick=null;
    buttonA.style='cursor:not-allowed'; buttonB.style='cursor:not-allowed'; buttonC.style='cursor:not-allowed'; buttonD.style='cursor:not-allowed';buttonSkipVideo.style='cursor:not-allowed;';
}
reload = () => { location.reload(true); }

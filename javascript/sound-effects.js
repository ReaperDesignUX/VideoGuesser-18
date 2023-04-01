function playCorrectAnswerAudio() {
	var audio = document.getElementById("correct_answer_audio");
	audio.volume = 0.5;
	audio.play();
}
function playWrongAnswerAudio() {
	var audio = document.getElementById("wrong_answer_audio");
	audio.volume = 1;
	audio.play();
}
function playGameOverAudio() {
	var audio = document.getElementById("game_over_audio");
	audio.volume = 0.75;
	audio.play();
}
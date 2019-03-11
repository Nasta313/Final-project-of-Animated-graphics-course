window.onload= function(){
	audio=new Audio();/* Создание элемента Audio, файл загружается в кэш*/
	audio.src="media/fon1.mp3";/* указание пути*/
	var playButton= document.getElementById("play");
	playButton.addEventListener("click", function() {
		if	(audio.paused){
			this.innerHTML="<img src='images/mus1.png' alt='music'>";
			this.title ="paused";
			audio.play();
			}
		else{
			this.innerHTML="<img src='images/mus2.png' alt='music'>";
			this.title ="play";
			audio.pause();
		}
		}, false);
}


import Team from "./modules/DataObject.js";

(() => {
	console.log('link successful');

	let
	burger = document.querySelector('#burger'),
	burgerContent = document.querySelector('#mainNav'),
	navFiller = document.querySelector('#mobileNavFiller'),
	homeButton = document.querySelector('#home-nav'),
	teamButton = document.querySelector('#team-nav'),
	workButton = document.querySelector('#work-nav'),
	contactButton = document.querySelector('#contact-nav'),

	flipCard = document.querySelectorAll('.card'),
	bioInfo = document.querySelector('.bios').children,

	teamTab = document.querySelector('#team'),
	workTab = document.querySelector('#team-work'),
	contactTab = document.querySelector('#contact-img'),
  scrollPosition = window.pageYOffset,

	video = document.querySelector("#video"),
  controls = document.querySelector(".video-controls"),
  playPause = document.querySelector(".play-pause"),
  playPauseIcon = document.querySelector("#plause"),
  mute = document.querySelector(".mute"),
  volIcon = document.querySelector("#volume"),
  fullScreen = document.querySelector(".full"),
  progressBar = document.querySelector("#progress-bar"),
  volBar = document.querySelector("#vol");


//Flip profile card and inject profile bio text//
flipCard.forEach(card =>{
		card.onmouseover = function (){
		let	profileCard = ("text/plain", this.id);
			bioInfo = document.querySelector(`#bio${profileCard}`).children;
			bioInfo[0].textContent = Team[profileCard].name;
			bioInfo[1].textContent = Team[profileCard].role;
			bioInfo[2].textContent = Team[profileCard].bio;

			console.log(profileCard);
//add class
			document.querySelector(`#${profileCard}`).classList.add("flip");
			document.querySelector(`#bio${profileCard}`).classList.remove("hidden");
//remove class
			 card.onmouseout = function (){
				 document.querySelector(`#${profileCard}`).classList.remove("flip");
				 document.querySelector(`#bio${profileCard}`).classList.add("hidden")
			 };
		};

	});

//my overcomplex way of toggling nav class//
window.onscroll = function (){
		scrollPosition = window.scrollY;
		console.log(scrollPosition);

		if (scrollPosition <= 714) {
			homeButton.classList.add("onPage");
			teamButton.classList.remove("onPage");
			workButton.classList.remove("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 715) {
			homeButton.classList.remove("onPage");
			teamButton.classList.add("onPage");
			workButton.classList.remove("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 2750) {
			teamButton.classList.remove("onPage");
			workButton.classList.add("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 4420) {
			workButton.classList.remove("onPage");
			contactButton.classList.add("onPage");
		};
};

//video controls
function plause() {
	 if (video.paused) {
		 video.play();
		 playPauseIcon.src = ("images/pause.png");;
	 } else {
		 video.pause();
		 playPauseIcon.src = ("images/play.png");
	 };
};

function sound() {
	if (video.muted == false) {
	 video.muted = true;
	 volIcon.src = ("images/mute.png");
} else {
	 video.muted = false;
	 volIcon.src = ("images/volume.png");
 };
};

function volumeCont() {
 video.volume = (volBar.value/10);
};

function expand() {
 if (video.requestFullscreen) {
	 video.requestFullscreen();
 } else if (video.mozRequestFullScreen) {
 video.mozRequestFullScreen();
 } else if (video.webkitRequestFullscreen) {
	 video.webkitRequestFullscreen();
 };
};

function updateProgress() {
 let progress = (100/video.duration) * video.currentTime;
 progressBar.value = progress;
}

function skip() {
 let time = video.duration * (progressBar.value/100);
 video.currentTime = time;
};

//Burger Menu Function//
	function burgerMenu() {
		burgerContent.classList.toggle("slideToggle");
		navFiller.classList.toggle("fill-it");
		burger.classList.toggle("expanded");
	};

//Burger Menu Event
	burger.addEventListener("click", burgerMenu, false);

	// EVENTS FOR VIDEO CONTROLLER
  playPause.addEventListener('click', plause);
  mute.addEventListener('click', sound);
  volBar.addEventListener('change', volumeCont);
  fullScreen.addEventListener('click', expand);
  video.addEventListener('timeupdate', updateProgress);
  progressBar.addEventListener('change', skip);
  video.addEventListener('click', plause);

})();

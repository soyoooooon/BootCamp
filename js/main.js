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
  scrollPosition = window.pageYOffset;



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
		// console.log(scrollPosition);

		if (scrollPosition <= 899) {
			homeButton.classList.add("onPage");
			teamButton.classList.remove("onPage");
			workButton.classList.remove("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 900) {
			homeButton.classList.remove("onPage");
			teamButton.classList.add("onPage");
			workButton.classList.remove("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 3254) {
			teamButton.classList.remove("onPage");
			workButton.classList.add("onPage");
			contactButton.classList.remove("onPage");
		};
		if (scrollPosition >= 4967) {
			workButton.classList.remove("onPage");
			contactButton.classList.add("onPage");
		};
};


//Burger Menu Function//
	function burgerMenu() {
		burgerContent.classList.toggle("slideToggle");
		navFiller.classList.toggle("fill-it");
		burger.classList.toggle("expanded");
	};

//Burger Menu Event
	burger.addEventListener("click", burgerMenu, false);

})();

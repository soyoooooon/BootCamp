(() => {
	console.log('link successful');

	let
	burger = document.querySelector('#burger'),
	burgerContent = document.querySelector('#mainNav'),
	navFiller = document.querySelector('#mobileNavFiller'),
	homeButton = document.querySelector('#home-nav'),
	teamButton = document.querySelector('#team-nav'),
	workButton = document.querySelector('#work-nav'),
	contactButton = document.querySelector('#contact-nav');
  scrollPosition = window.pageYOffset;

//overcomplex way of toggling nav class//
	window.onscroll = function (){
		scrollPosition = window.scrollY;
		console.log(scrollPosition);

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

	burger.addEventListener("click", burgerMenu, false);

})();

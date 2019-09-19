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
	dilCard = document.querySelector('#Dil'),
	yoonCard = document.querySelector('#Yoon'),
	sujinCard = document.querySelector('#Sujin'),
	jeffCard = document.querySelector('#Jeff'),
	flipCard = document.querySelectorAll('.card'),
  scrollPosition = window.pageYOffset;


//my overcomplex way of toggling nav class//
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

//Card Flip//

//get id on mouseover//
	flipCard.forEach(card =>{
      card.onmouseover = function (){
				profileCard = ("text/plain", this.id);
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
//"TOUCH" EVENT FOR MOBILE
			card.onmousedown = function (e){
				e.preventDefault();
				profileCard = ("text/plain", this.id);
				console.log(profileCard);
//toggle class
				document.querySelector(`#${profileCard}`).classList.toggle("flip");
				document.querySelector(`#bio${profileCard}`).classList.toggle("hidden");
			};

			});


//Burger Menu Function//
	function burgerMenu() {
		burgerContent.classList.toggle("slideToggle");
		navFiller.classList.toggle("fill-it");
		burger.classList.toggle("expanded");
	};

//Burger Menu Event
	burger.addEventListener("click", burgerMenu, false);

})();

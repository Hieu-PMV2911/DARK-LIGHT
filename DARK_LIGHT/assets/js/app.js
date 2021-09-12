// SHOW MENU Y HIDDEN
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

// MENU SHOW
if(navToggle){
	navToggle.addEventListener('click', ()=>{
		navMenu.classList.add('show-menu')
	})
}

// HIDDEN MENU

if(navClose){
	navClose.addEventListener('click', ()=>{
		navMenu.classList.remove('show-menu')
	})
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.querySelector('#nav-menu');
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// =============== Acordion skills ================================

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i=0; i< skillsContent.length; i++){
		skillsContent[i].className = 'skills__content skills__close';
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skills__content skills__open'
	}
}

skillsHeader.forEach(e =>{
	e.addEventListener('click',toggleSkills);
});

//========================= Qualification ================================

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
	tab.addEventListener('click', ()=>{
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active');
		})

		target.classList.add('qualification__active');

		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active');
		})
		tab.classList.add('qualification__active');
	})
})

//===================  Active Modal===========================================

const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
};

modalBtns.forEach((modalBtn , i) =>{
	modalBtn.addEventListener('click', ()=>{
		modal(i);
	});
});

modalCloses.forEach(modalClose =>{
	modalClose.addEventListener('click', ()=>{
		modalViews.forEach(modalView =>{
			modalView.classList.remove('active-modal');
		});
	});
});

// ============ SWIPER ===================
let swiper = new Swiper(".portfolio__container", {
        cssMode: true,
	loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
	  clickable: true,
        },
      });

// ============== pagination=================

let swiperPagination = new Swiper(".testimonial__container", {
        garbCursor: true,
	loop: true,
	spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
	  clickable: true,
	  dynamicBullets: true,
        },
	breakPoints:{
		568:{
			slidesPreView: 2,
		}
	}
});

// ==================SCROLL SECTION ACTIVE LINK================
const sections = document.querySelectorAll('section[id');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight;
		const sectionTop =  current.offsetTop - 50;

		const sectionId = current.getAttribute('id');
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		}
		else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	}) 
}
window.addEventListener('scroll', scrollActive);

// ============== Change Background color================================================================

function scrollHeader(){
	const nav = document.querySelector('#header');

	if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ========================= SHOW SCROLL UP =================
function scrollUp(){
	const scrollUp = document.querySelector('#scroll-up');
	if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// ==================DARK LIGHT THEMES ==========================
const themeButton = document.querySelector('#theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'uil-sun';

	// if user selected
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

	// we obtain the current theme that the interface
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

	// if user chose a topic 
if(selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// add or remove dark/light icon
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	// we save theme and the current icon that  the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
})
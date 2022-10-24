const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});



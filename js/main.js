const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
const nav = document.querySelector('.nav');
const heroImg = document.querySelector('.hero');
const modelInfo1 = document.querySelector('.models__info--1');
const modelImg1 = document.querySelector('.models__img--1');
const modelInfo2 = document.querySelector('.models__info--2');
const modelImg2 = document.querySelector('.models__img--2');
const modelInfo3 = document.querySelector('.models__info--3');
const modelImg3 = document.querySelector('.models__img--3');
const models = document.querySelector('.models');
const modalOpenBtn = document.querySelectorAll('.modal-signin__btn');
const modal = document.querySelector('.modal__shadow');
const modalInputs = document.querySelectorAll('.modal__input');
const modalSelects = document.querySelectorAll('.modal__select');
const modalError = document.querySelector('.modal__error');
const modalSendBtn = document.querySelector('.modal__send');
const modalCloseBtn = document.querySelector('.modal__close');

const heroOptions = { rootMargin: '-100px 0px 0px 0px' };
const heroObserver = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			nav.style.position = 'absolute';
		} else {
			nav.style.position = 'fixed';
			nav.style.zIndex = '2';
		}
	});
}, heroOptions);
heroObserver.observe(heroImg);

const model1Observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			modelInfo1.classList.add('models__info--animation');
		} else {
			modelInfo1.classList.remove('models__info--animation');
		}
	});
});
model1Observer.observe(modelImg1);

const model2Observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			modelInfo2.classList.add('models__info--animation');
		} else {
			modelInfo2.classList.remove('models__info--animation');
		}
	});
});
model2Observer.observe(modelImg2);

const model3Observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			modelInfo3.classList.add('models__info--animation');
		} else {
			modelInfo3.classList.remove('models__info--animation');
		}
	});
});

model3Observer.observe(modelImg3);

const modalOn = () => {
	modal.style.display = 'flex';
};

const modalClose = () => {
	modal.style.display = 'none';
	modalError.style.visibility = 'hidden';
	modalInputs.forEach((input) => (input.value = ''));
	modalSelects.forEach((select) => (select.value = '0'));
};

const modalSubmit = () => {
	if (inputCheck() === '0' || selectCheck() === '0') {
		modalError.textContent = 'Wypełnij wszystkie pola';
		modalError.style.color = 'red';
		modalError.style.visibility = 'visible';
	} else {
		modalError.textContent = 'Formularz został przesłany';
		modalError.style.color = 'forestgreen';
		modalError.style.visibility = 'visible';
	}
};

const inputCheck = () => {
	let inputCheckValue;
	modalInputs.forEach((input) => {
		if (input.value === '') {
			inputCheckValue = '0';
		}
	});
	return inputCheckValue;
};

const selectCheck = () => {
	let selectCheckValue;
	modalSelects.forEach((select) => {
		if (select.value === '0') {
			selectCheckValue = '0';
		}
	});
	return selectCheckValue;
};

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

modalOpenBtn.forEach((btn) => {
	btn.addEventListener('click', modalOn);
});

modalSendBtn.addEventListener('click', modalSubmit);
modalCloseBtn.addEventListener('click', modalClose);

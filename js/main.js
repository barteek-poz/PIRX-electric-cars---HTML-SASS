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
const modalInputName = document.querySelector('.modal__input-name');
const modalInputSurame = document.querySelector('.modal__input-surname');
const modalInputPhone = document.querySelector('.modal__input-phone');
const modalInputMail = document.querySelector('.modal__input-mail');
const modalSelectCar = document.querySelector('.modal__select-car');
const modalSelectShop = document.querySelector('.modal__select-shop');
const modalSelectDate = document.querySelector('.modal__select-date');
const modalSelectHour = document.querySelector('.modal__select-hour');
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

const modalSend = () => {
	if (
		modalInputName.value === '' ||
		modalInputSurame.value === '' ||
		modalInputPhone.value === '' ||
		modalInputMail.value === '' ||
		modalSelectCar.value === '0' ||
		modalSelectShop.value === '0' ||
		modalSelectHour.value === '0' ||
		modalSelectDate.value === '0'
	) {
		modalError.textContent = 'Wypełnij wszystkie pola';
		modalError.style.color = 'red';
		modalError.style.visibility = 'visible';
	} else {
		modalError.style.color = 'forestgreen';
		modalError.style.visibility = 'visible';
	}
};

const modalClose = () => {
	modal.style.display = 'none';
	modalInputName.value = '';
	modalInputSurame.value = '';
	modalInputPhone.value = '';
	modalInputMail.value = '';
	modalSelectCar.value = '0';
	modalSelectShop.value = '0';
	modalSelectHour.value = '0';
	modalSelectDate.value = '0';
	modalError.style.visibility = 'hidden';
};

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

modalOpenBtn.forEach((btn) => {
	btn.addEventListener('click', modalOn);
});

modalSendBtn.addEventListener('click', modalSend);
modalCloseBtn.addEventListener('click', modalClose);

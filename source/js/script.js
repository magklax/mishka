var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modalOverlay = document.querySelector('.modal');
var modalWindow = document.querySelector('.modal__wrapper');
var orderButton = document.querySelectorAll('.modal-open');
var modalButton = document.querySelector('.modal__btn');

/* Меню */
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  'use strict';
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* Модальное окно */

for (var i = 0; i < orderButton.length; i++) {
  orderButton[i].addEventListener('click', function (evt) {
    'use strict';
    evt.preventDefault();
    modalOverlay.classList.add('modal--show');
    modalWindow.classList.add('modal__wrapper--show');
  });
}

modalButton.addEventListener('click', function (evt) {
  'use strict';
  evt.preventDefault();
  if (modalOverlay.classList.contains('modal--show')) {
    modalOverlay.classList.remove('modal--show');
    modalWindow.classList.remove('modal__wrapper--show');
  }
});

window.addEventListener("keydown", function (evt) {
  'use strict';
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains("modal--show")) {
      modalOverlay.classList.remove("modal--show");
      modalWindow.classList.remove('modal__wrapper--show');
    }
  }
});

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//querySelectorAll alows to select all elements from show-modal class (in this case 3 of them)
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Showing text from all three modals (show-modal)
for (let i = 0; i < btnsOpenModal.length; i++) {
  //uruchomienie funkcji closeModal na X
  btnCloseModal.addEventListener('click', closeModal);
  //uruchomienie funkcji przy kliknięciu na overlay
  overlay.addEventListener('click', closeModal);
  //opening modals
  btnsOpenModal[i].addEventListener('click', openModal);
  //przeniesione wyżej nad for^
  // btnsOpenModal[i].addEventListener('click', function () {
  //   console.log('Button clicked');
  //   //showing hidden elements[window] (dont use dot)
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // });
  //przeniesione wyżej nad for^
  /////////DONT REPEAT YOURSELF//////////
  // btnCloseModal.addEventListener('click', function () {
  //   //closing window when X is clicked
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // });
  // overlay.addEventListener('click', function () {
  //   //closing window when click outside (overlay) window
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // });
  /////////DONT REPEAT YOURSELF/////
  //przeniesione wyżej nad for^
  //  const closeModal = function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // };) //przeniesione wyżej nad for^
}

//exiting modal by keybord(esc)

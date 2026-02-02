// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

const modal = document.querySelector('.backdrop');
// Находим ВСЕ кнопки открытия
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// Перебираем массив кнопок и каждой вешаем слушатель
modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});
modalBtnClose.addEventListener('click', toggleModal);

// if (modalBtnOpen && modalBtnClose && modal) {
//   modalBtnOpen.addEventListener('click', toggleModal);
//   modalBtnClose.addEventListener('click', toggleModal);
// }
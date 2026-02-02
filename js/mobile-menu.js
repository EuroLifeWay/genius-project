const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menulBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menulBtnClose.addEventListener('click', toggleMenu);

// if (modalBtnOpen && modalBtnClose && modal) {
//   modalBtnOpen.addEventListener('click', toggleModal);
//   modalBtnClose.addEventListener('click', toggleModal);
// }
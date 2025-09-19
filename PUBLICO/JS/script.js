// script.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  const backToTop = document.querySelector('.back-to-top');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  if (window.scrollY > 200) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
// script.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  const backToTop = document.querySelector('.back-to-top');
  if (header) {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  if (backToTop) {
    if (window.scrollY > 200) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  }
});

// Toggle sidebar en móviles
const sidebar = document.querySelector('.sidebar');
if (sidebar) {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '☰';
  toggleBtn.className = 'sidebar-toggle';
  document.body.prepend(toggleBtn);
  toggleBtn.addEventListener('click', () => {
    sidebar.style.transform = sidebar.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
  });
}

// Estilos para el botón toggle
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .sidebar-toggle {
      display: none;
      position: fixed;
      top: 10px;
      left: 10px;
      background: var(--secondary-color);
      color: var(--white);
      border: none;
      padding: 10px;
      border-radius: var(--border-radius);
      cursor: pointer;
      z-index: 1100;
    }
    @media (max-width: 768px) {
      .sidebar-toggle {
        display: block;
      }
    }
  </style>
`);
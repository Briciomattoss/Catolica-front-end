                                                                                                                                                                                                                                                                                      // Alert de boas-vindas só na primeira visita
if (!localStorage.getItem('welcomeShown')) {
  alert('Bem-vindo ao Tech Index! Explore nossos projetos e equipe.');
  localStorage.setItem('welcomeShown', 'true');
}

// Função para alternar modo claro/escuro
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// Criar botão de toggle dinamicamente no navbar
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav .container');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.textContent = 'Modo Claro/Escuro';
  btn.className = 'btn btn-sm btn-outline-info ms-3';
  btn.style.cursor = 'pointer';

  btn.addEventListener('click', () => {
    toggleDarkMode();
  });

  nav.appendChild(btn);
});
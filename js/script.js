// Scripts do Zé Fominha: ano do rodapé e menu do celular

// Ano automático no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
}

// Menu hambúrguer (celular)
const btnMenu = document.getElementById('btn-menu');
const menu = document.querySelector('.nav-base');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}
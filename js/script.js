// Scripts da página inicial do Zé Fominha

// Preenche o ano do rodapé automaticamente
const anoEl = document.getElementById('ano');
if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
}
// Carrossel: as setas rolam a lista de pratos
const lista = document.getElementById('course-list');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

if (lista && btnPrev && btnNext) {
    // Quanto rolar por clique: a largura de um card + o espaço entre eles
    function passo() {
        const card = lista.querySelector('.course-card');
        return card ? card.offsetWidth + 16 : 280;
    }

    btnNext.addEventListener('click', () => {
        lista.scrollBy({ left: passo(), behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
        lista.scrollBy({ left: -passo(), behavior: 'smooth' });
    });
}

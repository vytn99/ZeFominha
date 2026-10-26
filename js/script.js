// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav-base");

// Guardamos o texto original do botão para poder voltar depois
const textoOriginal = botaoMenu.textContent;

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () {
  // 3. Alterna (liga/desliga) a classe "ativo" no menu
  menu.classList.toggle("ativo"); 

  // 4. Verifica se o menu ficou ativo para mudar o texto do botão
  if (menu.classList.contains("ativo")) {
    botaoMenu.textContent = "✕ Fechar";
  } else {
    botaoMenu.textContent = textoOriginal; // Volta para o texto que estava antes (ex: "☰ Menu")
  }
});


const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        btnTema.textContent = " Tema claro";
    } else {
        btnTema.textContent = " Tema escuro";
    }
});

export default function initModal() {
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clicaFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (modalContainer && botaoAbrir && botaoFechar) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clicaFora);
  }
}

const modalContainer = document.querySelector('[data-modal="container"]');
const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');

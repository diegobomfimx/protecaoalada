export default class Modal {
  constructor(container, abrir, fechar) {
    this.modalContainer = document.querySelector(container);
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);

    // bind this ao callback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clicaFora = this.clicaFora.bind(this);
  }

  // abre ou fecha modal
  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }
  //adiciona evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  clicaFora(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }
  // adiciona eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clicaFora);
  }

  init() {
    if (this.modalContainer && this.botaoAbrir && this.botaoFechar) {
      this.addModalEvent();
    }
    return this;
  }
}

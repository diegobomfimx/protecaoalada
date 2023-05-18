export default class Acordeon {
  constructor(list) {
    this.listaAcordeon = document.querySelectorAll(list);
    this.classeAtivo = "ativo";
  }

  acordeonToggle(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  // adiciona os eventos ao acordeon
  addAcordeonEvent() {
    this.listaAcordeon.forEach((item) => {
      item.addEventListener("click", () => this.acordeonToggle(item));
    });
  }

  // iniciar função
  init() {
    if (this.listaAcordeon.length) {
      this.acordeonToggle(this.listaAcordeon[0]);
      this.addAcordeonEvent();
    }
    return this;
  }
}

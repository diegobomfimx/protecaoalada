import clicaFora from "./clica-fora.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropDownMenus = document.querySelectorAll(menus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }
  }

  addDropdownMenuEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add("ativo");
    clicaFora(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }
  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenuEvent();
    }

    return this;
  }
}

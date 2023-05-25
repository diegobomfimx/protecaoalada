import clicaFora from "./clica-fora.js";

export default class MenuMobile {
  constructor(button, menuLista, eventos) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(menuLista);

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (eventos === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = eventos;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add("active");
    this.menuButton.classList.add("active");
    clicaFora(this.menuList, this.eventos, () => {
      this.menuList.classList.remove("active");
      this.menuButton.classList.remove("active");
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}

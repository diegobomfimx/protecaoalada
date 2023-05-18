import clicaFora from "./clica-fora.js";
export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    clicaFora(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
}

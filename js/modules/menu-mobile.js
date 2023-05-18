import clicaFora from "./clica-fora.js";
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    clicaFora(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton && menuList) {
    menuButton.addEventListener("click", openMenu);
  }
}

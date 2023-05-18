export default function initAcordeon() {
  const listaAcordeon = document.querySelectorAll('[data-anime="acordeon"] dt');

  const classeAtivo = "ativo";

  function acordeonAtivo() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }

  if (listaAcordeon.length) {
    listaAcordeon[0].classList.add(classeAtivo);
    listaAcordeon[0].nextElementSibling.classList.add(classeAtivo);

    listaAcordeon.forEach((item) => {
      item.addEventListener("click", acordeonAtivo);
    });
  }
}

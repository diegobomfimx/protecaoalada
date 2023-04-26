function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function tabAtiva(index) {
      tabContent.forEach((conteudo) => {
        conteudo.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        tabAtiva(index);
      });
    });
  }
}

initTabNav();

function initAcordeon() {
  const listaAcordeon = document.querySelectorAll(".js-acordeon dt");

  const classeAtivo = "ativo";

  if (listaAcordeon.length) {
    listaAcordeon[0].classList.add(classeAtivo);
    listaAcordeon[0].nextElementSibling.classList.add(classeAtivo);

    function acordeonAtivo() {
      this.classList.toggle(classeAtivo);
      this.nextElementSibling.classList.toggle(classeAtivo);
    }

    listaAcordeon.forEach((item) => {
      item.addEventListener("click", acordeonAtivo);
    });
  }
}

initAcordeon();

function initScrollSuave() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

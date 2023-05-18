import initAcordeon from "./modules/acordeon-anime.js";
import initTabNav from "./modules/tab-nav.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import initModal from "./modules/modal.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initBtcPreco from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAcordeon();
initTabNav();
initAnimacaoScroll();
initModal();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initBtcPreco();

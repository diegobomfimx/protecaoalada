import Acordeon from "./modules/acordeon-anime.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtcPreco from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const acordeon = new Acordeon('[data-anime="acordeon"] dt');
acordeon.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]'
);
modal.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

fetchBtcPreco("https://blockchain.info/ticker", ".btc-preco");

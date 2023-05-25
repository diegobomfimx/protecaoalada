import Acordeon from "./modules/acordeon-anime.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtcPreco from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js";

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDown = new DropdownMenu("[data-dropdown]");
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const horaFuncionamento = new Funcionamento("[data-semana]");
horaFuncionamento.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

fetchBtcPreco("https://blockchain.info/ticker", ".btc-preco");

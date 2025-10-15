import SoftScroll from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/anima-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion-list.js";
import initModal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const softscroll = new SoftScroll('[data-menu="suave"] a[href^="#"]');
softscroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new initModal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

import SoftScroll from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/anima-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion-list.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const softscroll = new SoftScroll('[data-menu="suave"] a[href^="#"]');
softscroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

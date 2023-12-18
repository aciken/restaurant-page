import headerBuild from "./header";
import heroBuild from "./hero";
import removeDOM from "./removeDOM";
import orderHeroBuild from "./orderHero";
import contactHeroBuild from "./contactHero";
import "../src/styles/header.css";
import "../src/styles/hero.css";
import "../src/styles/font.css";
import "../src/styles/orderHero.css";
import "../src/styles/contactHero.css";


headerBuild();
heroBuild();


const homeBtn = document.querySelector('.home');
const orederBtn = document.querySelector('.order');
const contactBtn = document.querySelector('.contact');
homeBtn.classList = 'home clicked';

homeBtn.addEventListener('click', () =>{
    removeDOM();
    heroBuild();
    orederBtn.classList = 'order'
    homeBtn.classList = 'home clicked';
    contactBtn.classList = 'contact';
})

orederBtn.addEventListener('click', () =>{
    removeDOM();
    orderHeroBuild();
    orederBtn.classList = 'order clicked'
    homeBtn.classList = 'home';
    contactBtn.classList = 'contact';

})

contactBtn.addEventListener('click', () =>{
    removeDOM();
    contactHeroBuild();
    orederBtn.classList = 'order'
    homeBtn.classList = 'home';
    contactBtn.classList = 'contact clicked';
})


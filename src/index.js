import headerBuild from "./header";
import heroBuild from "./hero";
import removeDOM from "./removeDOM";
import orderHeroBuild from "./orderHero";
import contactHeroBuild from "./contactHero";
import "../src/styles/header.css";
import "../src/styles/hero.css";
import "../src/styles/font.css";


headerBuild();
heroBuild();

const homeBtn = document.querySelector('.home');
const orederBtn = document.querySelector('.order');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', () =>{
    removeDOM();
    heroBuild();
    console.log('home')
})

orederBtn.addEventListener('click', () =>{
    removeDOM();
    orderHeroBuild();
    console.log('order')
})

contactBtn.addEventListener('click', () =>{
    removeDOM();
    contactHeroBuild();
    console.log('contact')
})


import KFC from "../src/assets/KFChero.jpg"

const heroBuild = () =>{
    const content = document.getElementById('content');

    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const imagePart = document.createElement('div');
    imagePart.classList.add('image-part');
    hero.appendChild(imagePart); 

    const kfc = new Image();
    kfc.src = KFC;
    imagePart.appendChild(kfc);

    const menuText = document.createElement('h1');
    menuText.classList.add('menu-text');
    menuText.textContent = "Menu";
    imagePart.appendChild(menuText);

}

export default heroBuild;
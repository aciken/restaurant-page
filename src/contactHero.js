import KFCMap from "../src/assets/KFCMap.png";
import FClogo from "../src/assets/FClogo.png";
import IGlogo from "../src/assets/IGlogo.png";
import Xlogo from "../src/assets/Xlogo.png";

const contactHeroBuild = () =>{
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const allContent = document.createElement('div');
    allContent.classList.add('all-content');
    hero.appendChild(allContent);

    const contact = document.createElement('div');
    contact.classList.add('contact-part');
    allContent.appendChild(contact);

    const map = new Image();
    map.src = KFCMap;
    contact.appendChild(map);



    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.textContent = 'Contact Number +1234566789';
    contact.appendChild(text);

    const contactClick = document.createElement('div');
    contactClick.classList.add('contact-click');
    contact.appendChild(contactClick);

    const facebook = new Image();
    facebook.src = FClogo;
    facebook.classList.add('contact-logo');
    contactClick.appendChild(facebook);

    const instagram = new Image();
    instagram.src = IGlogo;
    instagram.classList.add('contact-logo');
    contactClick.appendChild(instagram);


    const x = new Image();
    x.src = Xlogo;
    x.classList.add('contact-logo');
    contactClick.appendChild(x);




}

export default contactHeroBuild;
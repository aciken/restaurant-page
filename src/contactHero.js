const contactHeroBuild = () =>{
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const heroText = document.createElement('p');
    heroText.textContent = "Contact"
    hero.appendChild(heroText);


}

export default contactHeroBuild;
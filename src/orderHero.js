const orderHeroBuild = () =>{

    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const heroText = document.createElement('p');
    heroText.textContent = "Order"
    hero.appendChild(heroText);


  
}

export default orderHeroBuild;
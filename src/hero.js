
const heroBuild = () =>{
    const content = document.getElementById('content');

    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const heroText = document.createElement('p');
    heroText.textContent = "Home"
    hero.appendChild(heroText);




}

export default heroBuild;
import Logo from "../src/assets/UFClogo.png";


const headerBuild = () =>{
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    nav.classList.add('nav');
    content.appendChild(nav);

    const logo = new Image();
    logo.src = Logo;
    nav.appendChild(logo);


    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    nav.appendChild(navList);

    const anchor1 = document.createElement('a');   
    const listEl1 = document.createElement('li');
    anchor1.href = "#"
    anchor1.textContent = 'text1';
    listEl1.appendChild(anchor1)
    navList.appendChild(listEl1);

    const anchor2 = document.createElement('a');
    const listEl2 = document.createElement('li');
    anchor2.href = "#"
    anchor2.textContent = 'text2';
    listEl2.appendChild(anchor2)
    navList.appendChild(listEl2);

    const anchor3 = document.createElement('a');
    const listEl3 = document.createElement('li');
    anchor3.href = "#"
    anchor3.textContent = 'text3';
    listEl3.appendChild(anchor3)
    navList.appendChild(listEl3);

}

export default headerBuild;
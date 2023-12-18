const removeDOM = () =>{
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('.footer');

    hero.remove();
    footer.remove();
}

export default removeDOM;

const footerBuilder = () =>{
    const content = document.getElementById('content');

    const footer =  document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    //foot1
    const footCol1 = document.createElement('div');
    footCol1.classList.add('footer-col');
    footer.appendChild(footCol1);

    const anchor1 = document.createElement('a');
    anchor1.classList.add('anchor');
    anchor1.textContent = 'Link 1'
    anchor1.href = '#';
    footCol1.appendChild(anchor1);

    const anchor2 = document.createElement('a');
    anchor2.classList.add('anchor');
    anchor2.textContent = 'Link 2'
    anchor2.href = '#';
    footCol1.appendChild(anchor2);

    const anchor3 = document.createElement('a');
    anchor3.classList.add('anchor');
    anchor3.textContent = 'Link 3'
    anchor3.href = '#';
    footCol1.appendChild(anchor3);
    
    //foot2
    const footCol2 = document.createElement('div');
    footCol2.classList.add('footer-col');
    footer.appendChild(footCol2);

    const anchor4 = document.createElement('a');
    anchor4.classList.add('anchor');
    anchor4.textContent = 'Link 4'
    anchor4.href = '#';
    footCol2.appendChild(anchor4);

    const anchor5 = document.createElement('a');
    anchor5.classList.add('anchor');
    anchor5.textContent = 'Link 5'
    anchor5.href = '#';
    footCol2.appendChild(anchor5);

    const anchor6 = document.createElement('a');
    anchor6.classList.add('anchor');
    anchor6.textContent = 'Link 6'
    anchor6.href = '#';
    footCol2.appendChild(anchor6);
    
    //foot3
    const footCol3 = document.createElement('div');
    footCol3.classList.add('footer-col');
    footer.appendChild(footCol3);
    
    const anchor7 = document.createElement('a');
    anchor7.classList.add('anchor');
    anchor7.textContent = 'Link 7'
    anchor7.href = '#';
    footCol3.appendChild(anchor7);

    const anchor8 = document.createElement('a');
    anchor8.classList.add('anchor');
    anchor8.textContent = 'Link 8'
    anchor8.href = '#';
    footCol3.appendChild(anchor8);

    const anchor9 = document.createElement('a');
    anchor9.classList.add('anchor');
    anchor9.textContent = 'Link 9'
    anchor9.href = '#';
    footCol3.appendChild(anchor9);

} 

export default footerBuilder;
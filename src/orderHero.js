import MenuBurger from "../src/assets/MenuBurger.png";
import MenuChickenBurger from "../src/assets/MenuChickenBurger.png";
import MenuBurrito from "../src/assets/MenuBurrito.png";
import MenuNuggets from "../src/assets/MenuNuggets.png";
import MenuWrap from "../src/assets/MenuWrap.png";
import MenuFries from "../src/assets/MenuFries.png";

const orderHeroBuild = () =>{

    const hero = document.createElement('div');
    hero.classList = 'hero order-page';
    content.appendChild(hero);

    const heroGrid = document.createElement('div');
    heroGrid.classList.add('hero-grid');
    hero.appendChild(heroGrid);
 

    //Card1
    const foodCard1 = document.createElement('div');
    foodCard1.classList.add('food-card');
    heroGrid.appendChild(foodCard1);

    const foodImage1 = new Image();
    foodImage1.src = MenuBurger;
    foodCard1.appendChild(foodImage1);

    const foodText1 = document.createElement('p');
    foodText1.classList.add('food-text');
    foodText1.textContent = "Classic Burger";
    foodCard1.appendChild(foodText1);

    //Card2
    const foodCard2 = document.createElement('div');
    foodCard2.classList.add('food-card');
    heroGrid.appendChild(foodCard2);

    const foodImage2 = new Image();
    foodImage2.src = MenuChickenBurger;
    foodCard2.appendChild(foodImage2);

    const foodText2 = document.createElement('p');
    foodText2.classList.add('food-text');
    foodText2.textContent = "Chicken Burger";
    foodCard2.appendChild(foodText2);

    //Card3
    const foodCard3 = document.createElement('div');
    foodCard3.classList.add('food-card');
    heroGrid.appendChild(foodCard3);

    const foodImage3 = new Image();
    foodImage3.src = MenuBurrito;
    foodCard3.appendChild(foodImage3);

    const foodText3 = document.createElement('p');
    foodText3.classList.add('food-text');
    foodText3.textContent = "Maxxx Burrito";
    foodCard3.appendChild(foodText3);

    //Card4    
    const foodCard4 = document.createElement('div');
    foodCard4.classList.add('food-card');
    heroGrid.appendChild(foodCard4);

    const foodImage4 = new Image();
    foodImage4.src = MenuNuggets;
    foodCard4.appendChild(foodImage4);


    const foodText4 = document.createElement('p');
    foodText4.classList.add('food-text');
    foodText4.textContent = "Chicken Nuggets";
    foodCard4.appendChild(foodText4);

    //Card5
    const foodCard5 = document.createElement('div');
    foodCard5.classList.add('food-card');
    heroGrid.appendChild(foodCard5);

    const foodImage5 = new Image();
    foodImage5.src = MenuWrap;
    foodCard5.appendChild(foodImage5);

    const foodText5 = document.createElement('p');
    foodText5.classList.add('food-text');
    foodText5.textContent = "Moisty Wrap";
    foodCard5.appendChild(foodText5);

    //Card6
    const foodCard6 = document.createElement('div');
    foodCard6.classList.add('food-card');
    heroGrid.appendChild(foodCard6);

    const foodImage6 = new Image();
    foodImage6.src = MenuFries;
    foodCard6.appendChild(foodImage6);

    const foodText6 = document.createElement('p');
    foodText6.classList.add('food-text');
    foodText6.textContent = "Potato fries";
    foodCard6.appendChild(foodText6);


  
}

export default orderHeroBuild;
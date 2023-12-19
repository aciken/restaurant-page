import FastFood from "../src/assets/FastFood.jpg";
import FoodDelivery from "../src/assets/FoodDelivery.jpg";
import FoodWide from "../src/assets/WideBurger.jpg";

const heroBuild = () =>{
    const content = document.getElementById('content');

    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const foodGrid = document.createElement('div');
    foodGrid.classList.add('food-grid');
    hero.appendChild(foodGrid);

    const foodImage = new Image();
    foodImage.src = FastFood;
    foodImage.classList = 'food-image food-img'
    foodGrid.appendChild(foodImage);

    const deliveryImage = new Image();
    deliveryImage.src = FoodDelivery;
    deliveryImage.classList = 'food-image delivery-img'
    foodGrid.appendChild(deliveryImage);

    const wideImage = new Image();
    wideImage.src = FoodWide;
    wideImage.classList = 'wide-image wide-img'
    foodGrid.appendChild(wideImage);



}

export default heroBuild;
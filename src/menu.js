import imgOneA from "../images/nutral/rikka-takanashi-takanashi-rikka.gif";
import imgTwoB from "../images/nutral/rem-transparent.gif";
import imgThreeC from "../images/nutral/anime-chunibyo.gif";
import imgFourD from "../images/nutral/anime-dance.gif";
import ingFiveE from "../images/nutral/ryuko-kill-la-kill.gif";
import defaultImg from "../images/nutral/default.gif";

export default function loadMenu() {
    const bigContainer = document.getElementById("bigContainer");
    bigContainer.innerHTML = "";

    const menuCards = document.createElement("div");
    menuCards.classList.add("menuCards");

    const menuItems = [
        {name: "Okonomiyaki", image: "/pizza.png", description: "Savory Japanese pancake packed with veggies and a touch of magic."},
        {name: "Rendang", image: "/burger.png", description: "Slow-cooked Indonesian beef curry with bold, rich spices."},
        {name: "Shakshuka", image: "/pizza.png", description: "Middle Eastern spiced tomato stew with perfectly poached eggs."},
        {name: "Char Siu Bao", image: "/pizza.png", description: "Steamed buns bursting with sweet and savory BBQ pork."},
        {name: "Empanadas", image: "/pizza.png", description: "Golden pockets of joy, stuffed with savory or sweet surprises."},
        {name: "Gözleme", image: "/pizza.png", description: "Crispy Turkish flatbread with a melty, savory filling."},
    ];

    let imgList = [imgOneA, imgTwoB, imgThreeC, imgFourD, ingFiveE];

    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"><h2>${item.name}</h2></div>
            <div class="card-back">
                <p>${item.description}</p>
            </div>
        </div>`;
        menuCards.appendChild(card);
        ranImgA(card.querySelector(".card-front"), imgList);
    });
    bigContainer.appendChild(menuCards);
}

function ranImgA(cardFront, imgPool) {

    if (imgPool.length === 0) {
        cardFront.style.backgroundImage = `url(${defaultImg})`;
        console.error("No images left!")
        return;
    }


    const randomIndex = Math.floor(Math.random() * imgPool.length);
    const selectedImage = imgPool.splice(randomIndex, 1)[0];


    cardFront.style.backgroundImage = `url(${selectedImage})`;
    console.log("Setting background image to:", imgPool[selectedImage]);

}
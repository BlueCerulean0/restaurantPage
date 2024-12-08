import imgOne from '../images/ok-ent.gif';
import imgTwo from '../images/tumblr_inline_oipbei3aEK1qhg2eh_540.gif';
import imgThree from '../images/21374c0effb667b485fd34af7a2fedc0.gif';
import imgFour from '../images/icegif-1174.gif';

export default function loadHome() {

    console.log("load home");

    const bigContainer = document.getElementById("bigContainer");
    bigContainer.innerHTML = "";

    const content = document.createElement("div");
    content.classList.add("content");

    const info = document.createElement("div");
    info.classList.add("info");
    content.appendChild(info);

    const foodInfo = document.createElement("div");
    foodInfo.classList.add("foodInfo");
    info.appendChild(foodInfo);

    const heading = document.createElement("h1");
    const span = document.createElement("span");
    span.textContent = 'GetFood';
    heading.appendChild(span);
    heading.appendChild(document.createTextNode(" here or you'll be "));
    heading.appendChild(document.createTextNode("cursed forever!"));
    foodInfo.appendChild(heading);


    bigContainer.innerHTML = `
        <div id="content">
            <div class="info">
                <div class="foodInfo">
                    <h1><span>GetFood</span> here or you'll be cursed forever!</h1><p>You don't wanna be cursed, do you? So order away! Also don't forget to spread the news about the greatest
                        restaurant in town, you'll also get cursed otherwise!</p>
                </div>
                <div class="orderBtn">
                    <button>Order Now</button>
                    <button>Book A Table</button>
                </div>
            </div>
            <div class="image"></div>
        </div>
    `;

    ranImg()
}

function ranImg() {

    let imgList = [imgOne, imgTwo, imgThree, imgFour];

    const image = document.querySelector(".image");
    const randomIndex = Math.floor(Math.random() * imgList.length);

    console.log("Setting background image to:", imgList[randomIndex]);
    image.style.backgroundImage = `url(${imgList[randomIndex]})`;
}

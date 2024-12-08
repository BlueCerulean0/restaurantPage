console.log("it's working!");

import './style.css'
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadShop from "./shop.js";
import loadAbout from "./about.js";

loadHome();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const shop = document.querySelector(".shop");
const about = document.querySelector(".about");


home.addEventListener("click", e => {loadHome()})
menu.addEventListener("click", e => {loadMenu()})
shop.addEventListener("click", e => {loadShop()})
about.addEventListener("click", e => {loadAbout()})
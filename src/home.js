
import foodalgo from './foodalgo.png'

let homeContainer = document.createElement("div");
homeContainer.classList.add("home-container");

let homeTitle =  document.createElement("div");
homeTitle.classList.add("home-title");
homeTitle.innerText = "Our journey";

let foodAlgoImg =  document.createElement("img");
foodAlgoImg.src = foodalgo;
foodAlgoImg.classList.add("food-algo");

let homeDescription =  document.createElement("span");
homeDescription.classList.add("food-algo-description");
homeDescription.innerText = "We have a state of the art algo";

homeContainer.append(homeTitle, foodAlgoImg, homeDescription)

function loadHome() {
    console.log("Home!");
    return homeContainer;
};

export default loadHome;


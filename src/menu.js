import ultramodern from './ultramodern.jpg'

let menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");

let menuTitle =  document.createElement("div");
menuTitle.classList.add("menu-title");
menuTitle.innerText = "Look at this expensive food";

let ultraModernImg =  document.createElement("img");
ultraModernImg.src = ultramodern;
ultraModernImg.classList.add("ultra-modern");

let menuDescription =  document.createElement("span");
menuDescription.classList.add("menu-description");
menuDescription.innerText = "Let me tell you about this food.";

menuContainer.append(menuTitle, ultraModernImg, menuDescription)


function loadMenu() {
    return menuContainer;
};
    
export default loadMenu;


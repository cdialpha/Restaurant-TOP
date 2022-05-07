import logo from './logo.svg'

let headerElement = document.createElement("div");
headerElement.classList.add("header");
    
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-div"); 
    
    let img =document.createElement("img");
    img.src = logo;
    console.log(img);
    img.classList.add("logo");
    
    let headerTitle =  document.createElement("span")
    headerTitle.classList.add("title");
    headerTitle.innerText = "FEEDBACK on WestPine"

    logoDiv.append(img, headerTitle);


    let navContainer = document.createElement("div");
    navContainer.classList.add("nav");

        let homeNav = document.createElement("span"); 
        homeNav.classList.add("nav-element");   
        homeNav.innerText = "HOME";

        let menuNav = document.createElement("span"); 
        menuNav.classList.add("nav-element");
        menuNav.innerText = "MENU";

        let contactNav = document.createElement("span"); 
        contactNav.classList.add("nav-element");
        contactNav.innerText = "contact";

        navContainer.append(homeNav, menuNav, contactNav);



headerElement.append(logoDiv, navContainer);


function loadHeader() { 
    return headerElement;
};

export default loadHeader; 

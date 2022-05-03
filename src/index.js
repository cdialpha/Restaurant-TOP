import style from './main.css';

// This JS file houses the tab-switching logic to dynamically render the restraunt page

//import blank from 'home.js';
//import blank from 'contact.js';
//import blank from 'menu.js';


let header = document.querySelector("h1");
let mainDiv = document.createElement("div");
mainDiv.classList.add("new");

document.appendChild("mainDiv");


// some tabs to be built out in the future
let tabs= Array.from(document.querySelectorAll(".tab")); 

//tabs.forEach( item => {
//    item.addEventListener("click", tabSwitcher(e))
//})

/*
function clearContent(){ 
    mainDiv.styles="";
    while (mainDiv.lastChild) { 
         mainDiv.removeChild() 
    }
}
*/


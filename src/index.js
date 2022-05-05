import style from './main.css';
import loadHeader from './header' ;
import renderHome from './home';
import renderContact from './contact';
import renderMenu from './menu';
import html from "./temp.html";


let content = document.querySelector("content");
//console.log(content);
document.body.append(loadHeader());

//renderHome();

let navElements = Array.from(document.querySelectorAll("nav-elements")); 
/* 
navElements.forEach(x => x.addEventListener("click", (e) => { 
        clearContent();
        if (e.target.innerText == "HOME" ) { 
            renderHome()
            console.log("routing to homepage")
        }
        else if (e.target.innerText == "CONTACT") {
            renderContact();
            console.log("routing to contact page")
        } 
        else if (e.target.innerText == "Menu") {
            renderMenu();
            console.log("routing to menu")
        }
        else {
            console.log("ERROR!")
        }
    }
)
); 
*/ 

//console.log(navElements);



function clearContent(){ 
    document.styles="";
    while (document.lastChild) { 
         document.removeChild() 
    }
}
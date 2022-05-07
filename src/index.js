import style from './main.css';
import loadHeader from './header' ;
import loadHome from './home';
//import renderContact from './contact';
import loadMenu from './menu';
import html from './temp.html';
//import clearContent from './clearContent'


let content = document.querySelector("#content");

content.append(loadHeader());
content.append(loadHome());

let navElements = Array.from(document.querySelectorAll(".nav-element")); 

console.log(navElements);

navElements.forEach(x => x.addEventListener("click", (e) => { 
        console.log("clicked!");
        clearContent();
        if (e.target.innerText == "HOME" ) { 
            content.append(loadHome());
        }
        //else if (e.target.innerText == "CONTACT") {
        //    renderContact();
        //    console.log("routing to contact page")
        //} 
        else if (e.target.innerText == "MENU") {
            content.append(loadMenu());
        }
        else {
            console.log("ERROR!")
        }
   
    }
)
); 

//console.log(navElements);

function clearContent() {
    console.log(content);
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
    console.log("done")
}


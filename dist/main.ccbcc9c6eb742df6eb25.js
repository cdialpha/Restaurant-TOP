(self["webpackChunkrestraunt_landing_page"] = self["webpackChunkrestraunt_landing_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// This JS file houses the tab-switching logic to dynamically render the restraunt page

//import blank from 'home.js';
//import blank from 'contact.js';
//import blank from 'menu.js';

let mainDiv = document.getElementById("content");

// some tabs to be built out in the future
let tabs= Array.from(document.querySelectorAll(".tab")); 

//tabs.forEach( item => {
//    item.addEventListener("click", tabSwitcher(e))
//})

function clearContent(){ 
    mainDiv.styles="";
    while (mainDiv.lastChild) { 
         mainDiv.removeChild() 
    }
}
 


//clearContent();

//mainDiv.innerText = "Changed!";
mainDiv.style.background = "red";



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jY2JjYzljNmViNzQyZGY2ZWIyNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHJhdW50X2xhbmRpbmdfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIEpTIGZpbGUgaG91c2VzIHRoZSB0YWItc3dpdGNoaW5nIGxvZ2ljIHRvIGR5bmFtaWNhbGx5IHJlbmRlciB0aGUgcmVzdHJhdW50IHBhZ2VcblxuLy9pbXBvcnQgYmxhbmsgZnJvbSAnaG9tZS5qcyc7XG4vL2ltcG9ydCBibGFuayBmcm9tICdjb250YWN0LmpzJztcbi8vaW1wb3J0IGJsYW5rIGZyb20gJ21lbnUuanMnO1xuXG5sZXQgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gc29tZSB0YWJzIHRvIGJlIGJ1aWx0IG91dCBpbiB0aGUgZnV0dXJlXG5sZXQgdGFicz0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKSk7IFxuXG4vL3RhYnMuZm9yRWFjaCggaXRlbSA9PiB7XG4vLyAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJTd2l0Y2hlcihlKSlcbi8vfSlcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7IFxuICAgIG1haW5EaXYuc3R5bGVzPVwiXCI7XG4gICAgd2hpbGUgKG1haW5EaXYubGFzdENoaWxkKSB7IFxuICAgICAgICAgbWFpbkRpdi5yZW1vdmVDaGlsZCgpIFxuICAgIH1cbn1cbiBcblxuXG4vL2NsZWFyQ29udGVudCgpO1xuXG4vL21haW5EaXYuaW5uZXJUZXh0ID0gXCJDaGFuZ2VkIVwiO1xubWFpbkRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
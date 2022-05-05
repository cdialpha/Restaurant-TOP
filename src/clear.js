// removes style and removes children except for header

const clearContent = function(){
    const content = document.querySelector('#content');
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

export default clearContent;
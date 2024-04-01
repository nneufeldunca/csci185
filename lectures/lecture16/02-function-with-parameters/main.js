// make a function:

// function makeRed(){
//     document.querySelector("body").style.backgroundColor = "#ed6161";
// }

// function makeBlue(){
//     document.querySelector("body").style.backgroundColor = "#619bed";
// }

// function makeGreen(){
//     document.querySelector("body").style.backgroundColor = "#61ed71";
// }

function changeColor(color){
    const bodyEl = document.querySelector("body");
    bodyEl.style.backgroundColor = color;
}
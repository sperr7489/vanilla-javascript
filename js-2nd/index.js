
const WINDOWSIZE = window.innerWidth;
let BODYCOLOR = document.body.style.backgroundColor;


function changeColorOfWindow() {
    if (window.innerWidth <= 800) {
        BODYCOLOR = "red";
        console.log("red로 바뀌었다.");

    }
    else if (window.innerWidth > 800 && window.innerWidth <= 1500) {
        BODYCOLOR = "blue";
        console.log("blue로 바뀌었다.");

    }
    else {
        BODYCOLOR = "teal";
        console.log("teal로 바뀌었다.");


    }

    document.body.style.backgroundColor = BODYCOLOR;

}

window.addEventListener("resize", changeColorOfWindow);
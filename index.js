// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("#title");

// <⚠️ /DONT DELETE THIS ⚠️>

/*

✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {

    changeColorWhenOver: function () {
        title.style.color = colors[0];
    }
    ,
    changeColorWhenOut: function () {
        title.style.color = colors[1];
    }
    ,
    changeTextResize: function () {
        title.style.color = colors[2];
    }
    ,
    changeTextResize: function () {
        title.textContent = "qrohiphop is so hard";
    },

    changTextWhenRightClick: function () {
        title.textContent = "This is right click event";
    }
}
title.addEventListener("mouseover", superEventHandler.changeColorWhenOver);
title.addEventListener("mouseout", superEventHandler.changeColorWhenOut);
window.addEventListener("resize", superEventHandler.changeTextResize);
title.addEventListener("contextmenu", superEventHandler.changTextWhenRightClick);



const range = document.querySelector(".input-range");
const rangeInfo = document.querySelector(".range-number__info");
const inputGuess = document.querySelector(".guess-number");
const playBtn = document.querySelector(".result-check");
const inputStatus = document.querySelector(".input-range__status");
let machineVal;
let rangeVal;
function changeRange(event) {
    rangeVal = range.value;
    rangeInfo.innerText = `Generate a number between 0 and ${rangeVal}`;
    machineVal = Math.floor(Math.random() * rangeVal);

}
function createNum(event) {
    machineVal = Math.floor(Math.random() * rangeVal);
}

function checkBlank() {
    if (inputGuess.value === "") {
        alert("예상하는 값을 입력하세요");
    }
}
function checkResult(event) {
    checkBlank();
    createNum(event);
    if (inputGuess.value !== "") {

        if (parseInt(inputGuess.value) === machineVal) {
            inputStatus.children[0].innerText = `you Choose: ${inputGuess.value}, 
            the Machine Choose: ${machineVal}`;
            inputStatus.children[1].innerText = `You win!!!`;
        } else {
            inputStatus.children[0].innerText = ` you Choose: ${inputGuess.value},
            the Machine Choose: ${machineVal}`;
            inputStatus.children[1].innerText = `You lost!!!`;
        }
    }


}
console.log()
range.addEventListener("change", changeRange);
playBtn.addEventListener("click", checkResult);



const selection = document.querySelector(".country-list"),
    input = form.querySelector("option");
const USER_LS = "country";
function saveCountry(text) {
    localStorage.setItem(USER_LS, text);
}
function askForCountry() {
    selection.addEventListener("select", handleSelect);
}
function handleSelect(event) {
    event.preventDefault();//기존 브라우저에 설정되어 있는 서브밋 이벤트를 막아주는것이다. 
    const currentValue = input.value;
    saveCountry(currentValue);
}

function init() {
    askForCountry();
}
init();

https://velog.io/@yunji0614/TIL-save-selectedValue-in-localStorage
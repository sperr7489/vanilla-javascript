
const clockTitle = document.querySelector(".until-Christmas-Eve");
const xMasEve = new Date(2021, 11, 24);
const xMasEveTime = xMasEve.getTime();

console.log(xMasEve);

function dayCount() {

    const date = new Date();
    const dateTime = date.getTime();

    const dDayCount = parseInt((xMasEveTime - dateTime) / 1000); //이 부분에서 이제 
    //크리스마스까지 걸리는 밀리세컨즈 단위의 시간이 계산된다. 초가 나왔다!!
    let min = parseInt(dDayCount / 60); //분
    let sec = dDayCount % 60;// 초

    let hour = parseInt(min / 60);
    min = min % 60;

    let day = parseInt(hour / 24);
    hour = hour % 24;

    clockTitle.innerText =
        `${day < 10 ? `0${day}` : day}:${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;


}
function init() {
    dayCount();
    setInterval(dayCount, 1000);
}
init();

const form = document.querySelector(".toDo-form"),
    input = form.querySelector(".toDo-input");
const pendingList = document.querySelector(".toDo-pending"),
    finishedList = document.querySelector(".toDo-finished");

const PENDING_LS = "pending",
    FINISHED_LS = "finished";


let pending = [],
    finished = [];


function saveToFininshed() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}
function cancelFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    paintToDo_Pending(li.children[0].innerText);
    deleteFinished(event);
}
function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanFinished = finished.filter(function (toDo) {

        return toDo.id !== parseInt(li.id);
        //삭제 버튼이눌린 것과 다른 아이디를 가지고 있는 것들은 새로운 cleanToDos 배열로 설정하여
        // 새로운 todo로 만들어준다. 
    });
    finished = cleanFinished;
    saveToFininshed();
}
function checkPending(event) {

    const btnChecked = event.target;
    const liChecked = btnChecked.parentNode;
    const delBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const finishSpan = document.createElement("span");



    delBtn.addEventListener("click", deleteFinished);
    cancelBtn.addEventListener("click", cancelFinished);

    finishSpan.innerText = liChecked.children[0].innerText;
    delBtn.innerHTML = "❌";
    cancelBtn.innerHTML = "🔨";

    deletePending(event);

    const finishLi = document.createElement("li");
    const newId = finished.length + 1;

    finishLi.appendChild(finishSpan);
    finishLi.appendChild(delBtn);
    finishLi.appendChild(cancelBtn);
    finishLi.id = newId;
    finishedList.appendChild(finishLi);

    const finishObj = {
        text: finishSpan.innerText,
        id: newId
    };

    finished.push(finishObj);
    saveToFininshed();

}

function deletePending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPending = pending.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
        //삭제 버튼이눌린 것과 다른 아이디를 가지고 있는 것들은 새로운 cleanToDos 배열로 설정하여
        // 새로운 todo로 만들어준다. 
    });
    pending = cleanPending;
    saveToPending();
}

function saveToPending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function paintToDo_Pending(text) {
    //pending 배열에 추가 시켜주는 것. 
    const pendingLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkedBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = pending.length + 1;
    delBtn.innerHTML = "❌";
    checkedBtn.innerHTML = "✅";
    delBtn.addEventListener("click", deletePending);//deleteToDo 함수 만들어주기.
    checkedBtn.addEventListener("click", checkPending);
    //--이벤트 리스너 --//

    span.innerText = text;
    pendingLi.appendChild(span);
    pendingLi.appendChild(delBtn);
    pendingLi.appendChild(checkedBtn);
    pendingLi.id = newId;
    pendingList.appendChild(pendingLi);
    const pendingObj = {
        text: text,
        id: newId
    };
    pending.push(pendingObj);

    saveToPending();//panding에 대한 것을 저장. 
}

function paintToDo_Finished(text) {
    const finishedLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = finished.length + 1;
    delBtn.innerHTML = "❌";
    cancelBtn.innerHTML = "🔨";
    delBtn.addEventListener("click", deleteFinished);//deleteToDo 함수 만들어주기.
    cancelBtn.addEventListener("click", cancelFinished);
    //--이벤트 리스너 --//

    span.innerText = text;
    finishedLi.appendChild(span);
    finishedLi.appendChild(delBtn);
    finishedLi.appendChild(cancelBtn);
    finishedLi.id = newId;
    finishedList.appendChild(finishedLi);
    const finishedObj = {
        text: text,
        id: newId
    };
    finished.push(finishedObj);

    saveToFininshed();//panding에 대한 것을 저장. 

}

function handleSubmit(event) {
    // event는 submit이벤트이다. 
    event.preventDefault();
    const currentValue = input.value;
    paintToDo_Pending(currentValue);
    input.value = "";
}

function loadToPending() {
    const loadedToPending = localStorage.getItem(PENDING_LS);
    if (loadedToPending !== null) {
        const parsedToPending = JSON.parse(loadedToPending);
        parsedToPending.forEach(function (toDo) {
            paintToDo_Pending(toDo.text);
        });
    }
}

function loadToFinished() {
    const loadedToFinished = localStorage.getItem(FINISHED_LS);
    if (loadedToFinished !== null) {
        const parsedToFinished = JSON.parse(loadedToFinished);
        parsedToFinished.forEach(function (toDo) {
            paintToDo_Finished(toDo.text);
        });
    }
}
function init() {
    loadToPending();
    loadToFinished();
    form.addEventListener("submit", handleSubmit);
}
init();


// 1. 인풋으로 입력받은 값을 pending에 넣어준다. 
// 2. pending에 넣은 것을 delete와 check 버튼을 추가해 저장해준다.
// 3. pending에서 체크 된것은 finished로 옮겨준다. 
// 4. finished에서 delete버튼과 미완료 버튼을 만들어준다. 
// 5. 각 배열에 있는것들은 모두 localStorage에 저장되어야 한다. 
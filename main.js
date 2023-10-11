const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addMovie(){
    if(inputBox.value === ""){
        alert("Please insert a movie or show you want to watch!")
    }else{
        let li= document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }}, false);

function saveData (){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showMovie(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showMovie()
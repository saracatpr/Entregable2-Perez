const inputBox = document.getElementById("input-box")

const listContainer = document.getElementById("list-container")

function addMovie(){
    if(inputBox.value === ""){
        alert("Please insert a movie or show you want to watch!")
    }else{
        let li= document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked")
    }
}, false);



// let watchlist = ["Ballerina", "Bottoms", "Suzume"];


// let listItems = document.querySelectorAll('li');

// for (let i = 0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent);
// }

// for (let i = 0; i < watchlist.length; i++) {
//     console.log(watchlist[i]);
// }

// let liArray = [];
// let liElements = document.querySelectorAll("li");
// for (let i=0; i<liElements.length; i++){
//     liArray.push(liElements[i]);
// }


//  const ul = document.querySelector('ul');
// const lis = ul.querySelectorAll('li');
// const array = [];

// lis.forEach((li) => {
//     array.push(li.textContent);
// });

// console.log(array); 
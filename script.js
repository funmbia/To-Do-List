// Author: funmbia
// Updated: Feb 2, 2024

function getDate() {
    let today = new Date();
    var day = today.getDate();
    var mth = today.getMonth();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById("today").innerHTML = "" + months[mth] + " " + day;
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must type something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let label = document.createElement("label");
        label.innerHTML = "\u270e"; 
        li.appendChild(label);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "LABEL"){
        let li = e.target.parentElement;
        var newText = prompt("Edit task:", li.textContent.substring(0, li.textContent.length-2));
        if (newText !== null) {
            li.textContent = newText;
            let label = document.createElement("label");
            label.innerHTML = "\u270e"; 
            li.appendChild(label);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            saveData();
        }
    }

}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
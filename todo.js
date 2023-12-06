const inputBox = document.querySelector("#input-box");
const containerBox = document.querySelector(".list-container");

console.log(containerBox);

function addTask() {
  if (inputBox.value === "") {
    alert("you must add something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    containerBox.appendChild(li); // where this li will be displayed

    // adding the cross sign

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData()
  }
  inputBox.value = ""; // makes the input box empty again
}


// checking(strike through) and removing the list
containerBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // always write tag name (LI) in capital
    e.target.classList.toggle("checked");

    saveData()

  } else if (e.target.tagName === "SPAN")
  {
e.target.parentElement.remove()
saveData()
  }
} );

// storing the data
function saveData(){
    localStorage.setItem("data", containerBox.innerHTML)
}


// displaying the saved data when website is opened again 

function showTask(){
containerBox.innerHTML = localStorage.getItem('data')
}


showTask()
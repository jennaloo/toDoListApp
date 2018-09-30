function addToDo() {
    var stuff = document.getElementById("my-input");
    var newP = document.createElement("p");
    newP.innerText = stuff.value;
    newP.className = "text-center"
    document.getElementById('todos-go-here').appendChild(newP);
    stuff.value = "";
}

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem("todoItem")) || [];
    for (let i = saved.length - 1; i >= 0; i--){
            addToList(saved[i]);
    }
}

function promptNew() {
    var todo ;
    todo = prompt("Please enter a new task for the to do list:");
    while(todo === ""){
        todo = prompt ("You must enter something:");
    }
    addToList(todo);
}

function addToList(todo) {
        const mainDiv = document.getElementById("ft_list");
        const newItem = document.createElement("div");
        newItem.classList.add("newItem");
        newItem.innerText = todo;
        mainDiv.prepend(newItem);
        newItem.onclick = function () {
            if(confirm("Are you sure you've completed this task?"))
                newItem.remove();
                saveTodo();
        }
        saveTodo();
}

function saveTodo() {
    const mainDiv = document.getElementById("ft_list");
    const saved = [];
    for (const element of mainDiv.children){
        saved.push(element.textContent);
    }
    localStorage.setItem("todoItem", JSON.stringify(saved));
}


    



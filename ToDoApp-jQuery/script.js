

const todoInput = document.getElementById('input');
const todoButton = document.getElementById('addBtn');
const todoList = document.querySelector("ul");
const trashBtn = document.getElementsByClassName("trashBtn");

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem");

    if(newTodo.innerText !== ""){
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trashBtn");
        newTodo.appendChild(trashButton);
        todoList.appendChild(newTodo);
    }
    todoInput.value = "";

    for(var i=0; i<trashBtn.length;i++){
        trashBtn[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}



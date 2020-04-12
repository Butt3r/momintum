const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");


const TODOS_LIST = 'toDos';

function printTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("btn");
    delBtn.innerHTML= " 🥨";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    
}


function submitHandeler(event)
{
    const currentVal = todoInput.value;

    if(currentVal !== "")
    {
    event.preventDefault();
    printTodo(currentVal);
    todoInput.value = "";
    }
}


function loadTodo()
{
    const toDos = localStorage.getItem(TODOS_LIST);
    if(toDos)
    {
    console.log("add toDo");
    } 
    
}



function init()
{
    loadTodo();
    todoForm.addEventListener("submit", submitHandeler)
}

init();
const toDoForm = document.querySelector(".js-todoForm"),
toDoInput = toDoForm.querySelector(".todo-input"),
toDoList = document.querySelector(".js-todoList");


const TODOS_LIST = 'toDos';
let toDosArr = [];


function printTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("delbtn");
    const span = document.createElement("span");
    const toDoId = toDosArr.length + 1;
    delBtn.innerHTML= " ❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoId;
    toDoList.appendChild(li);

    const toDosObj = { text: text, id: toDoId, }
    toDosArr.push(toDosObj);
    saveTodos();




}


function submitHandeler(event)
{
    event.preventDefault();
    const currentVal = toDoInput.value;

    if(currentVal !== "" && currentVal.length < 20)
    {
    printTodo(currentVal);
    toDoInput.value = "";
    }

    if(currentVal.length > 30)
    {
      alert("too long! please, try again");
      window.location.reload();
    }


}


function loadTodos()
{
    const toDos = localStorage.getItem(TODOS_LIST);
    if(toDos)
    {
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function(toDo)
    {
        printTodo(toDo.text);
    });
}     
} 

   
function saveTodos()
{
    localStorage.setItem(TODOS_LIST,JSON.stringify(toDosArr));
}

function deleteTodo(event)
{

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const clean =toDosArr.filter(function(toDo)
    {
        return toDo.id !== parseInt(li.id);
    });
    

    console.log(clean);
    toDosArr = clean;
    saveTodos();

    if(btn)
    {
        document.getElementById("cheer").innerText = "well done! 🍬";
        
    }

    
}




function init()
{
    loadTodos();
    toDoForm.addEventListener("submit", submitHandeler)
}

init();
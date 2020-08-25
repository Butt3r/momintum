const toDoForm = document.querySelector(".js-todoForm"),
toDoInput = toDoForm.querySelector(".todo-input"),
toDoList = document.querySelector(".js-todoList"),
toDoWarn = document.querySelector(".warn");


const TODOS_LIST = 'toDos';
let toDosArr = [];


function printTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("delbtn");
    const span = document.createElement("span");
    const toDoId = toDosArr.length + 1;
    delBtn.innerHTML= "🚀";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoId;
    toDoList.appendChild(li);

    const toDosObj = { text: text, id: toDoId, }
    if(toDosArr.length < 6)
    {
    toDosArr.push(toDosObj);
    saveTodos();
    }


}


function warning()
{
    toDoWarn.classList.remove('hide');
    toDoWarn.innerText = "Wow, you’ve got a lot of passion!";
    toDoWarn.classList.remove('animation');
    setTimeout(function()
    {
        toDoWarn.classList.add('animation');
    }, 50)
}

function submitHandeler(event)
{

    event.preventDefault();

    if(toDosArr.length == 6)
    {
        alert("Wow, you've got a lot of passion! but, first You must finish it.")
        //warning();
    }

    if(toDosArr.length < 6)
    {
    currentVal = toDoInput.value;
    if(currentVal !== "")
    {
    printTodo(currentVal);
    toDoInput.value = "";
    }
    

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
    popup();
   

    
}


function popup()
{
    toDoWarn.classList.add('hide');
    const obj = document.querySelector(".cheer");
    obj.innerText = "well done! 🌟";
    obj.classList.remove('animation');
    setTimeout(function()
    {
        obj.classList.add('animation');
    }, 10)
}


function init()
{
    loadTodos();
    toDoForm.addEventListener("submit", submitHandeler)
}

init();
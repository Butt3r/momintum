const toDoForm = document.querySelector(".js-todoForm"),
toDoInput = toDoForm.querySelector(".todo-input"),
toDoList = document.querySelector(".js-todoList");



const TODOS_LIST = 'toDos';
const today = document.querySelector(".today");
let toDosArr = [];





function printTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("delbtn");
    const span = document.createElement("span");
    const toDoId = toDosArr.length + 1;
    
    //delBtn.innerHTML= "";
    var src = "<img src=\'images/checkmark.png\'>";
    delBtn.innerHTML= src;
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoId;
    toDoList.appendChild(li);

    const toDosObj = { text: text, id: toDoId, }
    if(toDosArr.length < 3)
    {
    toDosArr.push(toDosObj);
    saveTodos();
    }

    if(toDosArr.length == 3)
    {
        toDoInput.classList.add('hide');
        today.classList.remove('hide');
        today.innerText = "TODAY";
    }
   


}

function submitHandeler(event)
{
    event.preventDefault();

    // if(toDosArr.length == 3)
    // {
    //     alert("Wow, you've got a lot of passion!")
    // }

    if(toDosArr.length < 3)
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
    toDoInput.classList.remove('hide');
    today.classList.add('hide');
    saveTodos();
    popup();
   

    
}


function popup()
{
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
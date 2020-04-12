const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
      

const USER_LIST = "currentUser",
      SHOWING_NAME = "showing";



function saveName(text)
{
  localStorage.setItem(USER_LIST, text);
}


function setName()
{
    form.classList.add(SHOWING_NAME);
    form.addEventListener("submit",  submitHandeler);

}


function getName()
{
    const currentUser = localStorage.getItem(USER_LIST);
   
    if(!currentUser)
    {
        console.log("input any user name");
        setName();
       
    }
    else
    {
        printGreeting(currentUser);
    }
}

function printGreeting(text)
{
    form.classList.remove(SHOWING_NAME);
    greeting.classList.add(SHOWING_NAME);
    greeting.innerText = `Hello ${text}`;
}

function submitHandeler(event)
{
    const currentVal = input.value;

    if(currentVal !== "")
    {
        event.preventDefault();
        console.log(currentVal);
        printGreeting(currentVal);
        saveName(currentVal);
    }
   
    
}




function init()
{
    getName();
}

init();
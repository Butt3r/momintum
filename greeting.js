const form = document.querySelector(".js-form"),
      input = form.querySelector(".name-input"),
      greeting = document.querySelector(".js-greetings"),
      todo = document.querySelector(".js-todoForm");
    
     
const USER_LIST = "currentUser",
      SHOWING_NAME = "showing";
    
      
    
function saveName(text)
{
  localStorage.setItem(USER_LIST, text);
}


function setName()
{

    greeting.classList.remove(SHOWING_NAME);
    form.classList.add(SHOWING_NAME);
    form.addEventListener("submit",  submitHandeler);
}

function submitHandeler(event)
{
    event.preventDefault();
    const currentVal = input.value;
  
    if(currentVal !== "")
    {
        printGreeting(currentVal);
        saveName(currentVal);
    }

} 
function printGreeting(text)
{
    
    form.classList.remove(SHOWING_NAME);
    greeting.classList.add(SHOWING_NAME);

    const G_date = new Date();
    const hours = G_date.getHours();

    const greetings = ["Hello,", "Hi,", "Welcome home", "Howdy!", "How's your day?", "What's up?", "Good to see you,", "What's new?", "I am here for you,", "Have a good day"];
    const greetings2 = ["Good morning", "Good afternoon", "Good evening"];
    const randomStr = greetings[Math.floor(Math.random() * greetings.length)];
    console.log("random greet =>", randomStr);

    if(hours > 7 && hours < 12)
    {
    greeting.innerText = `${greetings2[0]} ${text}.`;
    }
    else if(hours > 12 && hours < 16)
    {
    greeting.innerText = `${greetings2[1]} ${text}.`;
    }
    else if(hours >= 21)
    {
    greeting.innerText = `${greetings2[2]} ${text}.`;
    }
    else
    {
    greeting.innerText = `${randomStr} ${text}.`;
    }

    greeting.addEventListener('click', EditName);
    todo.classList.add('show');
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LIST);
   
    if(!currentUser)
    {
        setName();
    }
    else
    {
        printGreeting(currentUser);
    }
}


function EditName()
{
    localStorage.removeItem(USER_LIST);
    loadName();
}


function init()
{
    const currentUser = loadName();
    if(!currentUser)
    {
        setName();
    }
    
    loadName();
}



init();

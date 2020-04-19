const form = document.querySelector(".js-form"),
      input = form.querySelector(".name-input"),
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
    const G_date = new Date();
    const hours = G_date.getHours();

    form.classList.remove(SHOWING_NAME);
    greeting.classList.add(SHOWING_NAME);

  
    const greetings = ["Hello,", "Hi,", "Welcome Home", "Howdy!", "How's your day?", "What's up?", "Good to see you,", "What's new?", "waiting for you,", "I am here for you,", "You can make it!"];
    const randomStr = greetings[Math.floor(Math.random() * greetings.length)];
    console.log("random month =>", randomStr);

    if(hours > 7 && hours < 12)
    {
    greeting.innerText = `Good Morning, ${text}.`;
    }
    else if(hours > 12 && hours < 16)
    {
    greeting.innerText = `Good Afternoon, ${text}.`;
    }
    else if(hours >= 21)
    {
    greeting.innerText = `Good Evening, ${text}.`;
    }
    else
    {
    greeting.innerText = `${randomStr} ${text}.`;
    }
}

function submitHandeler(event)
{
    event.preventDefault();
    const currentVal = input.value;

    if(currentVal !== "")
    {
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
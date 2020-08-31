const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector(".js-title"),
      twFormat = document.querySelector("#tw"),
      teFormat = document.querySelector("#te");
     

      let twenty = localStorage.getItem("twenty");
      let twelve = localStorage.getItem("twelve");


    
function goTwentyFour()
{
    twFormat.classList.add('colored');
    teFormat.classList.remove('colored');
    localStorage.setItem("twenty", "enabled");
    localStorage.setItem("twelve", null);

}

function goTwelve()
{
  
    teFormat.classList.add('colored');
    twFormat.classList.remove('colored');
    localStorage.setItem("twelve", "enabled");
    localStorage.setItem("twenty", null);    
   
}

function setTwentyFour()
{
    
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
     //var seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
}

function setTwelve()
{
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    //var sec = d.getSeconds();

    hours = ((hours + 11) % 12 + 1);

    clockTitle.innerText = `${hours}:${min < 10 ? `0${min}`: min}`;

}

function setDefault()
{
   
    if(twenty === null || twelve === null)
    {
        teFormat.classList.add('colored');
        localStorage.setItem("twelve", "enabled");
    }         

}


function getTimeFormat()
{
    twenty = localStorage.getItem("twenty"); 
    twelve = localStorage.getItem("twelve");

    if(twelve === 'enabled')
    {
        setTwelve();
    }
    else if(twenty === 'enabled')
    {
        setTwentyFour();
    }
}


function paintColored()
{
    if(twenty === 'enabled')
    {
        twFormat.classList.add('colored');
    }
    else
    {
        teFormat.classList.add('colored');
    }
    
}

function init()
{
    setDefault();
    paintColored();
    getTimeFormat();
    setInterval(getTimeFormat, 1000);
}

init(); 
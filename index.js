const title = document.querySelector("#title");

const BASE_COLOR = "tomato";
const NEW_COLOR = "Darkcyan";


function clickHandler()
{
    const currColor = title.style.color;
    if(currColor === BASE_COLOR) title.style.color = NEW_COLOR;
    else title.style.color = BASE_COLOR;
    
    
}

function init()
{
    title.style.color = BASE_COLOR;
    title.addEventListener("click", clickHandler);
}
init();





//window.addEventListener("resize", resizeHandler);



const CLICKED_CALSS = "clicked";

const title = document.querySelector("#title");

function clickHandler()
{
    title.classList.toggle(CLICKED_CALSS);

    // const hasContain = title.classList.contains(CLICKED_CALSS);
    // if(!hasContain)
    // title.classList.add(CLICKED_CALSS);
    // else
    // title.classList.remove(CLICKED_CALSS);
    
}

function init()
{
   title.addEventListener("click", clickHandler);
}
init();





//window.addEventListener("resize", resizeHandler);



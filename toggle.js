const toggle = document.querySelector("#btn");
let lightMode = localStorage.getItem("lightMode");

const enableLightMode = () => 
{
    document.body.classList.toggle("light");
    localStorage.setItem("lightMode", "enabled");
    
};

const disableLightMode  = () => 
{
    document.body.classList.remove("light");
    localStorage.setItem("lightMode", null);
};

if(lightMode === 'enabled')
{
    enableLightMode();
}

toggle.addEventListener("click", function(e){
lightMode = localStorage.getItem("lightMode");
if(lightMode !== "enabled")
{
    enableLightMode();
}
else
{
    disableLightMode();
}
});


//toggle.addEventListener("click", function(e){
//document.body.classList.toggle("light")
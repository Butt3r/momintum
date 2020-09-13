//const toggle = document.querySelector("#btn");
const toggle = document.querySelector(".toggleContainer"),
      toggleOn = document.querySelector("#toggle-on"),
      toggleOff = document.querySelector("#toggle-off");

let darkMode = localStorage.getItem("darkMode");
toggleOn.classList.add("hide");

const enableDarkMode = () => 
{
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", "enabled");
    toggleOff.classList.add("hide");
    toggleOn.classList.remove("hide");
    
};

const disableDarkMode = () => 
{
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", null);
    toggleOff.classList.remove("hide");
    toggleOn.classList.add("hide");
    
};

if(darkMode === 'enabled')
{
    enableDarkMode();
}

toggle.addEventListener("click", function(e){
darkMode = localStorage.getItem("darkMode");
if(darkMode !== "enabled")
{
    enableDarkMode();
}
else
{
    disableDarkMode();
}
});





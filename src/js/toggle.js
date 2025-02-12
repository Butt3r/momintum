const toggle = document.querySelector(".toggleContainer"),
      toggleOn = document.querySelector("#toggle-on"),
      toggleOff = document.querySelector("#toggle-off"),
      bg = document.querySelector(".background");

let darkMode = localStorage.getItem("darkMode");
toggleOn.classList.add("hide");

const enableDarkMode = () => 
{
    bg.classList.toggle("dark");
    localStorage.setItem("darkMode", "enabled");
    toggleOff.classList.add("hide");
    toggleOn.classList.remove("hide");
    
};

const disableDarkMode = () => 
{
    bg.classList.remove("dark");
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





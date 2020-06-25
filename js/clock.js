const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector(".js-title");
 

function getCurrentTime()
{
    const date = new Date();
    const seconds = date.getSeconds();
    // const milli = date.getMilliseconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}
                            

function init()
{
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}

init(); 
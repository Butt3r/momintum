const weatherAPI = document.querySelector(".js-weather"),
      qpalce = document.querySelector(".js-place");

const API_KEY = "180b7c652db881478c7246ddb81ef82f";
const COORDS = "coords";



function getWeather(lat, lon)
{
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
.then(function(response)
{
    return response.json();
})
.then(function(json)
{

    const temperature = (Math.round(json.main.temp));
    const place = json.name.replace("-si", " ");
    weatherAPI.innerText = `${temperature}°`;
    qpalce.innerText = `${place}`;

    
});

}
function getError()
{
    console.log("can't access geo location");
    
}


function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function geoHandler(position)
{
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {

        latitude,
        longitude

    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function askForCoords()
{
    navigator.geolocation.getCurrentPosition(geoHandler, getError)
}




function loadCoords()
{
    const loadedCoords  = localStorage.getItem(COORDS);
    if(loadedCoords === null)
    {
       askForCoords(); 
    } 
    else
    {
       const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}





function init()
{
loadCoords();
}

init();
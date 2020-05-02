const COORDS = 'coords';


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
    } else {
        //get weahter
    }
}





function init()
{
loadCoords();
}

init();
const CITYINPUT =  document.querySelector("#cityInput");
const CITYNAME = document.querySelector("#city");
const COORDINATES = document.querySelector("#gps");
const BUTTON = document.querySelector("button");

BUTTON.addEventListener("click", fetchCoordinates);

// fetchCoordinates function calls openstreetmap API to get, on click, coordinates of the city entered in the input.

async function fetchCoordinates(){
    const city = CITYINPUT.value
    CITYNAME.textContent = city

    let promise = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1&limit=1`);
    let response = await promise.json();
    const {lat, lon} = response[0];
    //console.log(response[0])
    COORDINATES.textContent = `Coordonnées GPS: ${lat}, ${lon} `;
    }

fetchCoordinates()

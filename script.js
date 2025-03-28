const CITYINPUT =  document.querySelector("#cityInput");
const CITYNAME = document.querySelector("#city");
const COORDINATES = document.querySelector("#gps");
const BUTTON = document.querySelector("button");
const TEMPERATURE = document.querySelector("#temperature");
const DETAILS = document.querySelector("#details");

BUTTON.addEventListener("click", callApi);

CITYINPUT.value = "";


// fetchCoordinates function calls openstreetmap API to get coordinates of the city entered in the input.
async function fetchCoordinates(){
    const city = CITYINPUT.value
    CITYNAME.textContent = city
    let promise = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1&limit=1`);
    let response = await promise.json();
    const {lat, lon} = response[0];
    COORDINATES.textContent = `Coordonnées GPS: ${lat}, ${lon} `;
    return {lat, lon}
    }
 
// fetchWeather function calls openmeteo API to get local temperature of the coordinates returned by fetchCoordinates()
async function fetchWeather(lat, lon){
    let promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
    let response = await promise.json();
    let cityTemp = response.current.temperature_2m
    TEMPERATURE.textContent = `${cityTemp}°C`;
    DETAILS.textContent = "Température actuelle";
}

// callAPI function calls, on click, fetchCoordinates() and fetchWeather() and raises an error if the city is unknown.
async function callApi(){
    try {
        const results = await fetchCoordinates()
        let cityLat = results.lat;
        let cityLon = results.lon;
        fetchWeather(cityLat, cityLon);
        CITYINPUT.value = "";
    } catch (e){
        CITYNAME.textContent = "Ville non trouvée";
        DETAILS.textContent = "Vérifier le nom de la ville";
        COORDINATES.textContent = "-";
        TEMPERATURE.textContent = "-";
    };    
}
    



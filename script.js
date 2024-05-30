function searchWeather() {
    const location = document.getElementById("location-input").value;
    const temp = document.getElementById("temperature");
    const hum = document.getElementById("humidity");
    const wind = document.getElementById("wind-speed");
    const locationOutput= document.getElementById("location");
    hum.innerText=10;
    temp.innerText=44;
    wind.innerText=34;
    locationOutput.innerText=location;
}
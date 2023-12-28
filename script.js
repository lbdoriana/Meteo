let APIKEY = `9503a8b95baf76df06905a775d1bbc62`;
let input = document.getElementById("search-input")
let button = document.querySelector("#search-button")
//  button.addEventListener('click', )

button.addEventListener('click', getWeatherData);
function getWeatherData() {
  let pays = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementsByClassName("city")[0].innerHTML = `${data.name}`
      document.getElementsByClassName("description")[0].innerHTML = `${data.weather[0].description}`;
      document.getElementsByClassName("temp")[0].innerHTML = `${Math.round(data.main.temp)}°C`;
      document.getElementsByClassName("humidity")[0].innerHTML = `${data.main.humidity}%`;
      document.getElementsByClassName("wind-speed")[0].innerHTML = `${data.wind.speed} m/s`;
    })
}




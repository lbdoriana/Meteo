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
    .catch((error) => {
      console.error(error);
      alert(`Erreur : ${error.message}`);
      res.status(500).send('');
    });
    }

    function getImageUrl(description) {
      // Ajouter des images correspondant à chaque description
      switch (description) {
        case "ciel dégagé":
          return "images.jpeg";
        case "peu nuageux":
          return "https://i.imgur.com/4yjyJvB.jpg";
        case "nuages épars":
          return "https://i.imgur.com/4yjyJvB.jpg";
        case "couvert":
          return "https://i.imgur.com/4yjyJvB.jpg";
        case "pluie légère":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "pluie modérée":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "pluie forte":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "neige légère":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "neige modérée":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "neige forte":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        case "orage":
          return "https://i.imgur.com/7J9WZ8t.jpg";
        default:
          return "https://i.imgur.com/7J9WZ8t.jpg";
      }
    }
    description()






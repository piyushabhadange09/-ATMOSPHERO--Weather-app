// alert("Welcome to weather app.");
const apiKey = "a27481a83232ef97063d417a0b217c3d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    //update city name and other dara.
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "IMG/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "IMG/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "IMG/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "IMG/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "IMG/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

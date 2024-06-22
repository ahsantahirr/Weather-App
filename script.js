const apiKey = "c153479685c47f1b34a83591f3b1acbe";
const cityCoords = {
  karachi: { lat: 24.8607, lon: 67.0011 },
  lahore: { lat: 31.5497, lon: 74.3436 },
  islamabad: { lat: 33.6844, lon: 73.0479 },
  rawalpindi: { lat: 33.5651, lon: 73.0169 },
  peshawar: { lat: 34.0151, lon: 71.5249 }
};

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("citySelect").value;
  const { lat, lon } = cityCoords[city];
  fetchWeatherData(lat, lon, city);
});

function fetchWeatherData(lat, lon, city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temperature").innerText = `${Math.floor(data.main.temp)}°C`;
      document.getElementById("cityName").innerText = city.charAt(0).toUpperCase() + city.slice(1);
      document.getElementById("humidity").innerText = `${data.main.humidity}%`;
      document.getElementById("wind").innerText = `${data.wind.speed} km/h`;
    });
}

// Fetch initial weather data for Karachi on page load
fetchWeatherData(cityCoords.karachi.lat, cityCoords.karachi.lon, "karachi");

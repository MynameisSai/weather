document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "4947638626214d438b403e75d0422778";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=china&appid=" + apiKey;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.querySelector('.weather-info');
        weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
          <p>Humidity: ${data.main.humidity}%</p> `;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        const weatherInfo = document.querySelector('.weather-info');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
      });
  });
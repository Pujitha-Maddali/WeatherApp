const apiKey = "52faa7f63e0236db410eefb1bf73af66"; // Your API Key

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(`Error: ${data.message}`);
                return;
            }

            document.getElementById("weatherResult").classList.remove("hidden");
            document.getElementById("cityName").innerText = `🌍 ${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
            document.getElementById("weatherDescription").innerText = `🌥 Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("windSpeed").innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert("City not found or network issue. Try again!");
            console.error("Error fetching data:", error);
        });
}
/*
Створити віджет з погодою, який буде відображати 5 довільних параметрів погоди в місті.
Назва міста повинна вводитись у інпут.
Після цього повинна з'явитися секція з погодою (динамічно додайте DOM вузли на сторінку).

https://openweathermap.org/current - за цим посиланням документація на отримання погоди

https://openweathermap.org/api/geocoding-api - за цим посиланням документація на отримання координатів міста

За логікою виконання  - ви пишете назву у інпут і після цього один запит для отримання координатів, а після виконання першого - запит на саму погоду

Можна використовувати як синтаксис Promise, так і async/await (але останній бажаніше)
*/


async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    // const apiKey1 = c9e61a0d42ec14f1f2b8f11d7be0d7be;

    try {
        // Step 1: Get coordinates using OpenWeatherMap Geocoding API
        const coordinatesResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=c9e61a0d42ec14f1f2b8f11d7be0d7be`);
        const coordinatesData = await coordinatesResponse.json();
                
        if (coordinatesData.length === 0) {
            console.error('City not found');
            return;
        }

        const { lat, lon } = coordinatesData[0];

        // Step 2: Get weather data using OpenWeatherMap API
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c9e61a0d42ec14f1f2b8f11d7be0d7be`);
        
        const weatherData = await weatherResponse.json();

        // // Display weather information
        displayWeather(weatherData);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = ''; // Clear previous data

    // Extract and display relevant weather information
    const weatherParams = ['name', 'main.temp', 'main.pressure', 'main.feels_like', 'main.humidity', 'wind.speed'];
    const units = ['', '', '', '', '%', 'm/s'];

    for (let i = 0; i < weatherParams.length; i++) {
        const param = weatherParams[i];
        const unit = units[i];
        const value = param.split('.').reduce((obj, key) => obj[key], weatherData);

        const paramElement = document.createElement('p');
        paramElement.textContent = `${param.replace('_', ' ')}: ${value}${unit}`;

        weatherContainer.appendChild(paramElement);
    }
}

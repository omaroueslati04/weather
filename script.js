const apiKey = '1edaf9ddd0e84a1a0a1374b994cbce05';  


const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);  


        if (data.cod === '404') {
            alert('Ville non trouvée');
            return;
        }

        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        locationElement.textContent = `Localisation: ${location}`;
        temperatureElement.textContent = `Température: ${temperature}°C`;
        descriptionElement.textContent = `Description: ${description}`;
    } catch (error) {
        console.error('Erreur de récupération des données météo:', error);
    }
}


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Veuillez entrer une ville');
    }
});

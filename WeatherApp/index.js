const apiKey = `826899c8b6f3a8502548a8ebaa58cb21`; // deactivated😉
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.toString();

  if (city) {
    try {
      const data = await getWeatherData(city);
      showWeatherData(data);
    } catch (error) {
      console.error(error);
      errorDisplay(error.message);
    }
  } else {
    errorDisplay("Please Enter a City!");
  }
});

function showWeatherData(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("p");
  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");
  card.appendChild(cityDisplay);

  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `Temp: ${(temp - 273.15).toFixed(1)}°C`;
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(tempDisplay);

  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity: ${humidity}`;
  humidityDisplay.classList.add("humidityDisplay");
  card.appendChild(humidityDisplay);

  const weatherConditionsDisplay = document.createElement("p");
  weatherConditionsDisplay.textContent = description;
  weatherConditionsDisplay.classList.add("weatherConditionsDisplay");
  card.appendChild(weatherConditionsDisplay);

  const weatherEmoji = document.createElement("p");
  weatherEmoji.textContent = emojiDisplay(id);
  weatherEmoji.classList.add("emojiDisplay");
  card.appendChild(weatherEmoji);
}

async function getWeatherData(input) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Could not fetch weather data!");
  }
  return await response.json();
}

function emojiDisplay(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 400 && weatherId < 500:
      return "☔";
    case weatherId >= 500 && weatherId < 600:
      return "☔";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function errorDisplay(message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(error);
}

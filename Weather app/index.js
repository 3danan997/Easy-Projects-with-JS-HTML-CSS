const textBox = document.querySelector(".textBox");
const weatherCard = document.querySelector(".weatherCard");
const API_key = "dc51e28b9f894f769c316ee7fc0a0aea";

textBox.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityName = event.srcElement[0].value;
  if (cityName.length !== 0) {
    const weatherData = await getWeatherData(cityName);
    weatherDisplay(weatherData);
  } else {
    displayError("Please enter a city!");
  }
});

async function getWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Couldn't fetch weather data`);
  }

  return await response.json();
}

function weatherDisplay(weatherData) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = weatherData;

  weatherCard.style.display = "block";
  weatherCard.textContent = "";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("h3");
  const humidityDisplay = document.createElement("h4");
  const descDisplay = document.createElement("h2");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `humidity: ${humidity}`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  // cityDisplay.classList.add()
  // tempDisplay.classList.add()
  // humidityDisplay.classList.add()
  // descriptionDisplay.classList.add()

  weatherCard.append(
    cityDisplay,
    tempDisplay,
    humidityDisplay,
    descDisplay,
    weatherEmoji
  );
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 400 && weatherId < 500:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "☄️";
    case weatherId == 800:
      return "☀️";
    case weatherId > 800:
      return "☁️";
    default:
      return "";
  }
}

function displayError(msg) {
  weatherCard.style.display = "block";
  weatherCard.textContent = "";

  const errorMsg = document.createElement("h2");
  errorMsg.textContent = msg;

  weatherCard.append(errorMsg);
}

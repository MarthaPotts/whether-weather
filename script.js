let searchHistory = []; 
let weatherApiRootUrl = 'https://api.openweathermap.org';
let weatherApiKey = '77ad88c1295b1b624d571e5ca36da725'; 

//Get 
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input'); 
let currentContainer = document.querySelector('#currently'); 
let forecastContainer = document.querySelector('#forecast'); 
let searchHxContainer = document.querySelector('#history'); 

//display search history list 
function displaySearchHx() {
    searchHxContainer.innerHTML = ''; 

    for (var i = searchHistory.length -1; i >= 0; i--) {
        let btn = document.createElement('button'); 
        btn.setAttribute('type', 'button'); 
        btn.classList.add('history-btn', 'btn-history');
        btn.setAttribute('data-search', searchHistory[i]); 
        btn.textContent = searchHistory[i]; 
        searchHxContainer.append(btn);  
    }
}
//localStorage
function setHistory(search) {
    if (searchHistory.indexOf(search) !== -1) {
        return; 
    }
    searchHistory.push(search); 
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    displaySearchHx(); 
}
function getHistory() {
    let priorSearch = localStorage.getItem('search-history'); 
    if (priorSearch) {
        searchHistory = JSON.parse(priorSearch); 
    }
    displaySearchHx(); 
}
//display current weather data
function displayCurrent(city, weather) {
    let date = dayjs().format('M/D/YYYY'); 

    let currentTemp = weather.temp; 
    let windSpeed = weather.wind_speed; 
    let humidity = weather.humidity; 
    let uvi = weather.uvi; 
    let iconUrl = 
    `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    let iconDesc = weather.weather[0].description || weather[0].main;

    let card = document.createElement('div'); 
    let cardBody = document.createElement('div'); 
    let heading = document.createElement('h2'); 
    let weatherIcon = document.createElement('img'); 
    let tempEl = document.createElement('p'); 
    let windEl = document.createElement('p'); 
    let humidityEl = document.createElement('p'); 
    let uvEl = document.createElement('p'); 
    let uviBadge = document.createElement('button'); 

    card.setAttribute('class', 'card'); 
    cardBody.setAttribute('class', 'card-body'); 
    card.append(cardBody); 

    heading.setAttribute('class', 'card-title'); 
    tempEl.setAttribute('class', 'card-text'); 
    windEl.setAttribute('class', 'card-text'); 
    humidityEl.setAttribute('class', 'card-text'); 

    heading.textContent = `${city} (${date})`; 
    weatherIcon.setAttribute('src', iconUrl); 
    weatherIcon.setAttribute('alt', iconDesc); 
    weatherIcon.setAttribute('class', 'weather-img'); 
    heading.append(weatherIcon); 
    tempEl.textContent = `Temp: ${currentTemp} °F`; 
    windEl.textContent = `Wind: ${windSpeed} MPH`; 
    humidityEl.textContent = `Humidity: ${humidity} %`;
    cardBody.append(heading, tempEl, windEl, humidityEl); 

    uvEl.textContent = 'UV Index: '; 
    uviBadge.classList.add('btn'); 
        if (uvi <3){
            uviBadge.classList.add('btn-success'); 
        } else if (uvi <7) {
            uviBadge.classList.add('btn-warning');
        } else {
            uviBadge.classList.add('btn-danger'); 
        }
    uviBadge.textContent = uvi; 
    uvEl.append(uviBadge); 
    cardBody.append(uvEl); 

    currentContainer.innerHTML = ''; 
    currentContainer.append(card); 
}
//render card with weather api data 
function displayForecastCard(forecast) {
    var timestamp = forecast.dt; 
    var iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    var iconDescr = forecast.weather[0].description;
    var forecastTemp = forecast.temp.day;
    var { humidity } = forecast;
    var windSpeed = forecast.wind_speed;
  
    // Create elements for a card
    var col = document.createElement('div');
    var card = document.createElement('div');
    var cardBody = document.createElement('div');
    var cardTitle = document.createElement('h5');
    var weatherIcon = document.createElement('img');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
  
    col.append(card); 
    card.append(cardBody); 
    cardBody.append(cardTitle, weatherIcon, tempEl, windEl, humidityEl); 

    col.setAttribute('class', 'column');
    col.classList.add('forecast-card'); 
    card.setAttribute('class', 'card-bg'); 
    cardBody.setAttribute('class', 'fc-card-body'); 
    cardTitle.setAttribute('class', 'card-title');

    tempEl.setAttribute('class', 'card-text');
    windEl.setAttribute('class', 'card-text');
    humidityEl.setAttribute('class', 'card-text');

    //data
    cardTitle.textContent = dayjs.unix(timestamp).format('M/D/YYYY'); 
    weatherIcon.setAttribute('src', iconUrl); 
    weatherIcon.setAttribute('alt', iconDescr); 
    tempEl.textContent = `Temp: ${forecastTemp} °F`;
    windEl.textContent = `Wind: ${windSpeed} MPH`;
    humidityEl.textContent = `Humidity: ${humidity} %`;

    forecastContainer.append(col); 
}
//display forecast 
function displayForecast(dailyForecast) {
    let startDt = dayjs().add(1, 'day').startOf('day').unix(); 
    let endDt = dayjs().add(6, 'day').startOf('day').unix(); 

    let headingColumn = document.createElement('div'); 
    let heading = document.createElement('h4');

    headingColumn.setAttribute('class', 'heading-column'); 
    heading.textContent = '5-Day Forecast'; 
    headingColumn.append(heading); 

    forecastContainer.innerHTML = ''; 
    forecastContainer.append(headingColumn); 
        for (var i = 0; i <dailyForecast.length; i ++) {
            if(dailyForecast[i].dt >= startDt && dailyForecast[i].dt < endDt) {
                displayForecastCard(dailyForecast[i]); 
            }
        }
}
//show all 
function displayAll(city, data) {
    displayCurrent(city, data.current); 
    displayForecast(data.daily); 
}
//get data 
function getWeather(location) {
    let { lat } = location; 
    let { lon } = location; 
    let city = location.name; 
    let apiUrl = 
    `${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;

    fetch(apiUrl)
    .then(function(res) {
        return res.json(); 
    })
    .then(function(data) {
        displayAll(city, data); 
    })
    .catch(function(err){
        console.error(err); 
    }); 
}
function getCoordinates(search) {
    let apiUrl = 
    `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;

    fetch(apiUrl)
    .then(function(res){
        return res.json(); 
    })
    .then(function(data){
        if (!data[0]){
            alert('location not found')
        } else {
            setHistory(search); 
            getWeather(data[0]); 
        }
    })
    .catch(function (err) {
        console.error(err); 
    }); 
}
//handle events 
function searchSubmitHandler(e) {
    if (!searchInput.value) {
        return; 
    }
    e.preventDefault(); 
    let search = searchInput.value.trim(); 
    getCoordinates(search); 
    searchInput.value = ''; 
}
function searchHxHandler(e) {
    if (!e.target.matches('.btn-history')) {
        return; 
    }
    let btn = e.target; 
    let search = btn.getAttribute('data-search'); 
    getCoordinates(search); 
}
getHistory(); 
searchForm.addEventListener('submit', searchSubmitHandler); 
searchHxContainer.addEventListener('click', searchHxHandler); 
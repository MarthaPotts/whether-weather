let forecastData = document.getElementById('forecast'); 

function renderForecast(forecast) {

    let icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`; 
    let iconType = forecast.weather[0].description; 
    let temp = forecast.temp.day; 
    let { humidity } = forecast; 
    let windSpeed = forecast.wind_speed; 

    let newDiv = document.createElement('div'); 
    let card = document.createElement('div'); 
    let cardBody = document.createElement('div'); 
    let cardHeader = document.createElement('h4'); 
    let weatherIcon = document.createElement('img'); 
    let tempBox = document.createElement('p'); 
    let windBox = document.createElement('p'); 
    let humidityBox = document.createElement('p'); 

    newDiv.append(card); 
    card.append(cardBody); 
    cardBody.append(cardHeader, weatherIcon, tempBox, windBox, humidityBox); 

    newDiv.setAttribute('class', 'col'); 
    newDiv.classList.add('forecastCard'); 
    card.setAttribute('class', 'card bg-primary h-100 text-white'); // 
    cardBody.setAttribute('class', 'card-body p-2'); //
    cardHeader.setAttribute('class', 'card-title'); //
    tempBox.setAttribute('class', 'card-text'); 
    windBox.setAttribute('class', 'card-text');

    cardHeader.textContent = //set date 
    weatherIcon.setAttribute('src', icon); 
    weatherIcon.setAttribute('alt', iconType); 
    tempBox.textContent = `Temp: ${temp}F`; 
    windBox.textContent = `Wind: ${windSpeed} MPH`; 
    humidityBox.textContent = `Humdidity: ${humidity} %`; 

    forecastData.append(newDiv); 
}

//display forecast 
function renderForecastData(dailyForecast){
    
    let startDate = dayjs(). add(1, 'day').startOf('day').unix(); 
    let endDate = dayjs().add(6, 'day').startOf('day').unix(); 

    let header = document.createElement('div'); 
    let heading = document.createElement('h4'); 

    header.setAttribute('class', 'col-12'); 
    heading.textContent = '5-Day Forecast: '; 
    header.append(heading); 

    forecastData.innerHTML = ''; 
    forecastData.append(header); 

    for (let i = 0; i < dailyForecast.length; i++){
        if (dailyForecast[i].dt >= startDate && dailyForecast[i].dt < endDate) {
            renderForecast(dailyForecast[i]); 
        }
    }
}

function renderAll(city, data) {
    renderToday(city, data.current); 
    renderForecast(data.daily); 
}

//planB
//forecast 
// let forecastOne = document.getElementById('day1');
// let forecastTwo = document.getElementById('day2');
// let forecastThree = document.getElementById('day3');
// let forecastFour = document.getElementById('day4');
// let forecastFive = document.getElementById('day5'); 
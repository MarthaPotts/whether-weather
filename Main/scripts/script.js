//global variables 
let rootUrl = 'https://api.openweathermap.org'; 
let apiKey = '77ad88c1295b1b624d571e5ca36da725'; 

//refers to the class 'current' of Today section
let renderCurrent = document.querySelector('.current'); 

//today

//fetch data 
let currentData; 
//make this the onecall prn 
function getApi() {
    let requestUrl = `${rootUrl}/data/2.5/weather?q=${search}&appid=${APIkey}`;
    //pass url through fetch() 
    fetch(requestUrl)
    .then(function(res) {
        return res.json(); 
    })
    .then(function(data) {
        //console.log(data)
    }) 
    .catch(function(err) {
        console.error(err); 
    }); 
}

//parse data: 

function renderToday(city, weather) {

  let temp = weather.temp; 
  let windSpeed = weather.wind_speed; 
  let humidity = weather.humidity; 
  let uvi = weather.uvi; 
  let icon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`; 
  let iconType = weather.weather[0].description || weather[0].main; 

//today = id=current refers to the id of the Today container 
//let today = document.getElementById('current'); 

//render today: 
  let card = document.createElement('div'); 
  let cardBody = document.createElement('div'); 
  let cardHeader = document.createElement('h2'); 
  let currentIcon = document.createElement('img'); 
  let currentTemp = document.createElement('p'); 
  let currentWind = document.createElement('p'); 
  let currentHumidity = document.createElement('p'); 
  let currentUvi = document.createElement('p'); 
  let renderUvi = document.createElement('button'); 

  card.setAttribute('class', 'card'); 
  cardBody.setAttribute('class', 'cardBody'); 
  card.append(cardBody); 

  cardHeader.setAttribute('class', 'title'); 
  currentTemp.setAttribute('class', 'text'); 
  currentWind.setAttribute('class', 'text'); 
  currentHumidity.setAttribute('class', 'text'); 

  cardHeader.textContent = `${city} (${date})`; 
  currentIcon.setAttribute('src', icon); 
  currentIcon.setAttribute('alt', iconType); 
  currentIcon.setAttribute('class', 'img'); 
  cardHeader.append(currentIcon); 
  currentTemp.textContent = `Temp: ${temp}F`; 
  currentWind.textContent = `Wind: ${windSpeed} MPH`; 
  currentHumidity.textContent = `Humidity: ${humidity} %`; 
  cardBody.append(cardHeader, currentTemp, currentWind, currentHumidity); 
  currentUvi.textContent = 'UV Index: '; 
  renderUvi.classList.add('btn', 'btn-sm'); 
    if(uvi <3){
        renderUvi.classList.add('btn-success'); 
    } else if (uvi < 7 ) {
        renderUvi.classList.add('btn-danger'); 
    }
  renderUvi.textContent = uvi; 
  currentUvi.append(renderUvi); 
  cardBody.append(currentUvi); 

  renderCurrent.innerHTML = ''; 
  renderCurrent.append(card); 
}









// //toDo: 
// enter city Search 
// -> fetch(apiUrl) // one call 
// return Response; 
// parse Response; 
// for: 
//     today
//     5 day forecast 
// Render data/ html/css 
// save data: localStorage 
// retrieve data 

//multi script: today, forecast, search ???? neater? 
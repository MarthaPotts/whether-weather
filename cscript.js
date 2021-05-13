//assignment
var renderCurrent = document.querySelector('.current');

var forecastOne = document.getElementById('day1');
var forecastTwo = document.getElementById('day2');
var forecastThree = document.getElementById('day3');
var forecastFour = document.getElementById('day4');
var forecastFive = document.getElementById('day5');
APIKEY = "77ad88c1295b1b624d571e5ca36da725";

var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=Columbus&appid=${APIKEY}`;
//var currentData = 
//var forecastData = 
//var getData =//JSON.parse(localStorage.getItem())
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    getForecast(data);
})
function getForecast(data){
    console.log(data); 
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&exclude={part}&appid=${APIKEY}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)//localStorage.setItem(data)//JSON.stringify()
})
};
/////////////////////////////////////////////////////////////////////////

//assignment
//don't forget to change vars to const and let where appropriate
var renderCurrent = document.querySelector('.current');

var forecastOne = document.getElementById('day1');
var forecastTwo = document.getElementById('day2');
var forecastThree = document.getElementById('day3');
var forecastFour = document.getElementById('day4');
var forecastFive = document.getElementById('day5');

var APIKey = "77ad88c1295b1b624d571e5ca36da725";
//if two sets of data/2 calls to API,name the 2 datasets
var currentData; 
var forecastData; 

function getUVI(data){
  fetch(`http:api.openweathermap.org/data/2.5/weather?q=lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data.current.uvi);
  })
}
function getApi(){
  //set url to variable
  var requestUrl = 'api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${APIkey}'
  //pass url through fetch()
  fetch(requestUrl)
  //"makes a promise" to return the response from the request sent to(the server for) the url
    .then(function(response){
      // return response passed through .json(), string/object data
       return response.json();
    })
    .then(function(data){ //promise to return data
      console.log(data)//put the code to display the weather data in here/or call a *function* to display it
      getUVI(data) //console.log the data //set data to localStorage(only need to store the city name in local storage, to act on the API call)
      //localStorage.setItem(data)
    })

//only need to store city name in local storage which will then trigger an API (chain of) call(s) when clicked (fresh data); 
//only need the for loop for the forecast data, not the current data; 
//write ~3 separate functions to retrieve the data you need similar to 'getUVI'
    
    //need a function to fetch forecast data
  
    //loop over the data to sort/render to the window/get from localStorage //var currentData = JSON.parse(localStorage.getItem("data"))
    for(var i=-0; i < data.length; i++){
      //create the elements needed/wanted to render(our data: cityName, date, temp, humidity, wind speed, uv index)
      //current
      var cityName = document.createElement('h3');
      var weatherIcon = document.createElement('i');
      var currentDate = document.createElement('p');
      var currentTemp = documet.createElement('p');
      var currentHumidity = document.createElement('p');
      var currentWindSpeed = document.createElement('p'); 
      var uvIndex = document.createElement('p');
      //forecast
      //make a function or statement for this? (once created, textContent= looped datat item)(?can ya automate variable declarations?)
      //after textContent =, appendChild
      var dayOneDate = document.createElement('p');
      var dayOneIcon = document.createElement('p');
      var dayOneTemp = document.createElement('p');
      var dayOneHumidity = document.createElement('p');

      var dayTwoDate = document.createElement('p');
      var dayTwoIcon = document.createElement('p');
      var dayTwoTemp = document.createElement('p');
      var dayTwoHumidity= document.createElement('p');

      var dayThreeDate= document.createElement('p');
      var dayThreeIcon= document.createElement('p');
      var daythreeTemp= document.createElement('p');
      var dayThreeHumidity= document.createElement('p');

      var dayFourDate= document.createElement('p');
      var dayFourIcon= document.createElement('p');
      var dayFourTemp= document.createElement('p');
      var dayFourHumdity= document.createElement('p');

      var dayFiveDate= document.createElement('p');
      var dayFiveIcon= document.createElement('p');
      var dayFiveTemp= document.createElement('p');
      var dayFiveHumidity= document.createElement('p');

  //need to render current weather and forecast (uv index needs textcolor/backgroundcolor change)
      //current
      cityName.textContent = data[i].name
      weatherIcon.textContent = data[i].weather.icon
      currentDate.textContent = data[i].
      currentTemp.textContent = data[i].main.temp//also has unit specification unit.value? or another var?
      currentHumidity.textContent = data[i].main.humidity
      currentWindSpeed.textContent = data[i].wind.speed//also has unit spec
      uvIndex.textContent = data[i].
      //forecast
      dayOneDate.textContent = data[i].
      dayOneIcon.textContent = data[i].
      dayOneTemp .textContent = data[i].
      dayOneHumidity.textContent = data[i].

      dayTwoDate.textContent = data[i].
      dayTwoIcon.textContent = data[i]. 
      dayTwoTemp.textContent = data[i].
      dayTwoHumidity.textContent = data[i].

      dayThreeDate.textContent = data[i].
      dayThreeIcon.textContent = data[i].
      dayThreeTemp.textContent = data[i].
      dayThreeHumidity.textContent = data[i].

      dayFourDate.textContent = data[i].
      dayFourIcon.textContent = data[i].
      dayFourTemp.textContent = data[i].
      dayFourHumdity.textContent = data[i].

      dayFiveDate.textContent = data[i].
      dayFiveIcon.textContent = data[i].
      dayFiveTemp.textContent = data[i].
      dayFiveHumidity.textContent = data[i].

      //appendChild, to the parent container (append(varName))..?appendChild()?
      //current
      renderCurrent.append(cityName);
      renderCurrent.append(weatherIcon);
      renderCurrent.append(currentDate);
      renderCurrent.append(currentTemp);
      renderCurrent.append(currentHumidity);
      renderCurrent.append(currentWindSpeed);
      renderCurrent.append(uvIndex);
      //forecast
      forecastOne.append(dayOneDate);
      forecastOne.append(dayOneIcon);
      forecastOne.append(dayOneTemp);
      forecastOne.append(dayOneHumidity);

      forecastTwo.append(dayTwoDate);
      forecastTwo.append(dayTwoIcon);
      forecastTwo.append(dayTwoTemp);
      forecastTwo.append(dayTwoHumidity);

      forecastThree.append(dayThreeDate);
      forecastThree.append(dayThreeIcon);
      foreastThree.append(dayThreeTemp);
      forecastThree.append(dayThreeHumidity);

      forecastFour.append(dayFourDate);
      forecastFour.append(dayFourIcon);
      forecastFour.append(dayFourTemp);
      forecastFour.append(dayFourHumdity);

      forecastFive.append(dayFiveDate);
      forecastFive.append(dayFiveIcon);
      forecastFive.append(dayFiveTemp);
      forecastFive.append(dayFiveHumidity);
      
      //need function to set local storage/set a click to render history, generate access click to history
    
    }
}
  


//eventlisteners
  //search-btn click needs to trigger function to fetch data, add a city, clear
  //saved cities by click
  pretendSearchBtn.addEventListener("click", getWeather); //if you add () it will try to call it; pass a reference otherwise so it will work; 
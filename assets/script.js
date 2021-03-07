//assignment
//don't forget to change vars to const and let where appropriate
var renderCurrent = document.querySelector('.current');

var forecastOne = document.getElementById('day1');
var forecastTwo = document.getElementById('day2');
var forecastThree = document.getElementById('day3');
var forecastFour = document.getElementById('day4');
var forecastFive = document.getElementById('day5');

//if two sets of data/2 calls to API,name the 2 datasets
var currentData =
var forecastData =

//OWM, Free Account Key (can I store this as a variable? the whole url request?)
//renders own icons :)

//get the html linked to js
//functions
//use getApi function from class:

function getApi(){
  //set url to variable
  var requestUrl = '#'
  //pass url through fetch()
  fetch(requestUrl)
  //"makes a promise" to return the response from the request sent to(the server for) the url
    .then(function(response){
      // return response passed through .json(), string/object data
       return response.json();
    })
    .then(function(data){ //promise to return data
      console.log(data) //console.log the data //set data to localStorage
    })
    //loop over the data to sort/render to the window/get from localStorage
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
      cityName.textContent = data[i].
      weatherIcon.textContent = data[i].
      currentDate.textContent = data[i].
      currentTemp.textContent = data[i]. 
      currentHumidity.textContent = data[i].
      currentWindSpeed.textContent = data[i].
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

      //appendChild, to the parent container (append(varName))
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
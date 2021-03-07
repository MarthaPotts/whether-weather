//assignment


//get the html linked to js
//functions
//use getApi function from class:

function getApi(){
  //set url to variable
  var requestUrl = '#'
  //pass url through fetch()
  fetch(requestUrl)
  //"makes a promise" to return the response from the request sent to the url
    .then(function(response){
      // return response passed through .json(), string/object data
       return response.json();
    })
    .then(function(data){ //promise to return data
      console.log(data) //console.log the data
    })
    //loop over the data to sort/render to the window
    for(var i=-0; i < data.length; i++){
      //create the elements needed/wanted to render
      
    }
}
  // retrieve city weather data from API and put in local strorage

  //sort local storage and render in specific sections/elements


//eventlisteners
  //search-btn click needs to trigger function to fetch data, add a city, clear
  //saved cities by click
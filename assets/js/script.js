// let userInput = document.getElementById("user-input").value;
// let city = userInput.split(',')[0];
// let state = userInput.split(',').trim()[1];
const searchBtn = document.getElementById('search-btn');
const APIKey = "20e2f100b18fdd9bed85c53b103a2750";

// https://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&appid=20e2f100b18fdd9bed85c53b103a2750

function getWeather(city) {
    let querySearch = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    return fetch(querySearch)
    .then((response) => {
        console.log(response); // more data than we need (meta data) does include BODY
        if (!response.ok) {
          throw response; // like return, but executes the catch block
        }
        return response.json(); // behind-the-scenes similar to JSON.parse(body)
    })
    .then(function(data) {
        console.log(data); // now we have access to the important stuff
        // render on the page to display
        // where the data must be utilized. 
    })
      .catch(function(error) { // whatever value is thrown (on line 6)
        console.error(error) // console function to get details about error obj
    });
}

function getWeatherForecast(city) {
    let querySearch = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
    return fetch(querySearch)
    .then((response) => {
        console.log(response); // more data than we need (meta data) does include BODY
        if (!response.ok) {
          throw response; // like return, but executes the catch block
        }
        return response.json(); // behind-the-scenes similar to JSON.parse(body)
    })
    .then(function(data) {
        console.log(data); // now we have access to the important stuff
        // render on the page to display
        // where the data must be utilized. 
    })
      .catch(function(error) { // whatever value is thrown (on line 6)
        console.error(error) // console function to get details about error obj
    });
}

searchBtn.addEventListener('click', (event) => {
    event.preventDefault;
let input = document.getElementById("user-input")
let city = input.value.trim()
// console.log(userInput);
// let city = userInput.split(',')[0];
// console.log(city)
// let state = userInput.split(',')[1];
// console.log(state)
getWeather(city);
getWeatherForecast(city);
})

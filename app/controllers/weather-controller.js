import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
let val = 0;

function drawCel() {
  let template = `<div class="row flexend ml-1">
                  <span><h3>${store.State.weather.city}</h3></span><span class="img-fluid"><img src="http://openweathermap.org/img/w/${store.State.weather.icon}.png" alt=""></span>
                  </div>
                  <div class="ml-1">
                  <h3>${store.State.weather.cel}°C<button class="btn btn-primary btn-circle btn-circle-sm m-1" onclick="app.weatherController.toggleFC()">C/F</button></h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
  val = 1
}

function drawClock() {
  debugger
  let currentTime = store.State.weather.time - 21600;
  let leftover = currentTime % (24 * 3600)
  let currentHours = Math.floor(leftover / 3600);
  let currentMinutes = Math.floor((leftover % 3600) / 60);
  let timeOfDay = (currentHours < 12) ? "AM" : "PM";
  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  currentHours = (currentHours == 0) ? 12 : currentHours;
  let stringMinutes = currentMinutes.toString();
  stringMinutes = (currentMinutes < 10 ? "0" : "") + stringMinutes;
  let stringHours = currentHours.toString();
  let currentTimeString = stringHours + ":" + stringMinutes + " " + timeOfDay;
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  console.log("doing my job every 60 seconds")
  console.log(currentTimeString)
}

function drawWeather() {
  let template = `<div class="row flexend ml-1">
                  <span><h3>${store.State.weather.city}</h3></span><span class="img-fluid"><img src="http://openweathermap.org/img/w/${store.State.weather.icon}.png" alt=""></span>
                  </div>
                  <div class="ml-1">
                  <h3>${store.State.weather.fahr}°F<button class="btn btn-primary btn-circle btn-circle-sm m-1" onclick="app.weatherController.toggleFC()">C/F</button></h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
  val = 0
  drawClock()
}

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
    setInterval(WeatherService.getWeather, 60000)
  }

  toggleFC() {
    if (val == 0) {
      drawCel()
    } else {
      drawWeather()
    }
  }





}

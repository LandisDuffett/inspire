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

function drawWeather() {
  let template = `<div class="row flexend ml-1">
                  <span><h3>${store.State.weather.city}</h3></span><span class="img-fluid"><img src="http://openweathermap.org/img/w/${store.State.weather.icon}.png" alt=""></span>
                  </div>
                  <div class="ml-1">
                  <h3>${store.State.weather.fahr}°F<button class="btn btn-primary btn-circle btn-circle-sm m-1" onclick="app.weatherController.toggleFC()">C/F</button></h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
  val = 0
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }

  toggleFC() {
    if (val == 0) {
      drawCel()
    } else {
      drawWeather()
    }
  }

}

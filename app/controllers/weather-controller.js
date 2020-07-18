import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
let val = 0;

function drawCel() {
  let template = `<div>
    
                  <h3>${store.State.weather.city}</h3>
                  </div>
                  <div>
                  <h3>${store.State.weather.cel}°F<button class="btn btn-primary btn-circle btn-circle-sm m-1" onclick="app.weatherController.toggleFC()">C/F</button></h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
  val = 1
}

function drawWeather() {
  let template = `<div>
    
                  <h3>${store.State.weather.city}</h3>
                  </div>
                  <div>
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

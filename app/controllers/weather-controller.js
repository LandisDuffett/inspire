import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen

function drawWeather() {
  let template = `<div>
                  <h3>${store.State.weather.city}</h3>
                  </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-primary btn-sm active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Fahrenheit
  </label>
  <label class="btn btn-danger btn-sm">
    <input type="radio" name="options" id="option2" autocomplete="off"> Celsius
  </label>
</div>
                  <div>
                  <h3>${store.State.weather.fahr}</h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}

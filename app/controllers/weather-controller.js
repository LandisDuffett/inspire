import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen

function drawCel() {
  let template = `<div>
                  <h3>${store.State.weather.city}</h3>
                  </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-primary btn-sm active">
    <input type="radio" name="options" id="option1" autocomplete="off" onclick="app.weatherController.changeFahr()"> Fahrenheit
  </label>
  <label class="btn btn-danger btn-sm">
    <input type="radio" name="options" id="option2" onclick="app.weatherController.changeCel()" autocomplete="off"> Celsius
  </label>
</div>
                  <div>
                  <h3>${store.State.weather.cel}C</h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
}

function drawWeather() {
  let template = `<div>
                  <h3>${store.State.weather.city}</h3>
                  </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-primary btn-sm active">
    <input type="radio" name="options" id="option1" autocomplete="off" onclick="app.weatherController.changeFahr()"> Fahrenheit
  </label>
  <label class="btn btn-danger btn-sm">
    <input type="radio" name="options" id="option2" onclick="app.weatherController.changeCel()" autocomplete="off"> Celsius
  </label>
</div>
                  <div>
                  <h3>${store.State.weather.fahr}F</h3>
                  </div>`
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }

  changeFahr() {
    drawWeather()
  }
  changeCel() {
    drawCel()
  }
}

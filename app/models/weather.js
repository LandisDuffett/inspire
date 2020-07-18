export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.fahr = Math.round(1.8 * (data.main.temp - 273) + 32)
    this.cel = Math.round(data.main.temp - 273.15)
    this.icon = data.weather[0].icon
    this.time = data.dt
  }

  drawClock() {
    let currentTime = this.time;
    let leftover = currentTime % (24 * 3600)
    let currentHours = Math.floor(leftover / 3600);
    let currentMinutes = Math.floor((leftover % 3600) / 60);
    currentHours = currentHours - 6;
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    let stringMinutes = currentMinutes.toString();
    stringMinutes = (currentMinutes < 10 ? "0" : "") + stringMinutes;
    let stringHours = currentHours.toString();
    stringHours = (currentHours < 10 ? "0" : "") + stringHours;
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";
    let currentTimeString = stringHours + ":" + stringMinutes + " " + timeOfDay;
    return currentTimeString;
  }

  updateClock() {
    setInterval(this.drawClock, 60000)
  }

}
import TimeService from "../services/time-service.js";
import store from "../store.js";

function _drawTime() {
    let currentTime = store.State.time.unixtime + store.State.time.offset + store.State.time.dstoffset
    let leftover = currentTime % (24 * 3600)
    let currentHours = Math.floor(leftover / 3600);
    let currentMinutes = Math.floor((leftover % 3600) / 60);
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";
    let current12Hours = (currentHours > 12) ? currentHours - 12 : currentHours;
    current12Hours = (current12Hours == 0) ? 12 : current12Hours;
    let stringMinutes = currentMinutes.toString();
    stringMinutes = (currentMinutes < 10 ? "0" : "") + stringMinutes;
    let stringHours = current12Hours.toString();
    let currentTimeString = stringHours + ":" + stringMinutes + " " + timeOfDay;
    if (currentHours >= 3 && currentHours <= 11) {
        document.getElementById("greeting").innerHTML = "Good Morning!"
    } else if (currentHours >= 12 && currentHours <= 16) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!"
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening!"
    }
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    //document.getElementById("clock").innerHTML = currentTimeString;

}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class TimeController {
    constructor() {
        //TODO Remember to register your subscribers
        store.subscribe("time", _drawTime);
        TimeService.getTime();
        setInterval(TimeService.getTime, 30000)
    }
}
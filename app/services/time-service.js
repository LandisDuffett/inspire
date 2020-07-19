import store from "../store.js";
import Time from "../models/time.js";

const _timeApi = axios.create({
  baseURL: "//worldtimeapi.org/api/timezone/America/Boise",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class TimeService {
  constructor() {
    //this.getTime()
    this.getTime()
  }
  getTime() {
    _timeApi.get().then(res => {
      store.commit("time", new Time(res.data))
    }).catch(err => console.error(err))
  }

}

const timeService = new TimeService();
export default timeService;
import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() {
    this.getImage()
  }

  getImage() {
    imgApi.get().then(res => {
      store.commit("image", new Image(res.data))
    }).catch(err => console.error(err))

  }
}

const imageService = new ImageService();
export default imageService;

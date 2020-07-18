import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
    document.body.style.backgroundImage = `url("${store.State.image}")`
}


export default class ImageController {
    constructor() {
        //TODO Remember to register your subscribers
        store.subscribe("image", _drawImage);
        ImageService.getImage();
    }
}

import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function _drawQuote() {
    document.getElementById("quote").innerHTML = store.State.quote.body
    document.getElementById("author").innerHTML = `--${store.State.quote.author}`
}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
    constructor() {
        //TODO Remember to register your subscribers
        store.subscribe("quote", _drawQuote);
        QuoteService.getQuote();
    }
}

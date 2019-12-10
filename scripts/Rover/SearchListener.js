import {fetchPhotos} from "./PhotoFetcher.js"
import PhotoList from "./PhotosList.js"

const addSearchEventListener = () => {

    const searchEvent = document.querySelector("#date_button")
    searchEvent.addEventListener(
        "click",
        theSearchEvent => {
            const searchDate = document.querySelector("#date_form").value
            fetchPhotos(searchDate, "Spirit")
            .then(fetchPhotos(searchDate, "Opportunity"))
            .then(fetchPhotos(searchDate, "Curiosity"))
            .then(PhotoList)
        }
    )

}

export default addSearchEventListener
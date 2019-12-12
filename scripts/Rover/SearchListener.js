import {fetchPhotos} from "./PhotoFetcher.js"
import PhotoList from "./PhotosList.js"

const addSearchEventListener = () => {

    const searchEvent = document.getElementById("search_button")
    searchEvent.addEventListener(
        "click",
        theSearchEvent => {
            const searchDate = document.querySelector("#date_form").value
            const roverName = document.querySelector(".probe_dropdown").value
            fetchPhotos(searchDate, roverName)
            .then(PhotoList)
        }
    )

}

export default addSearchEventListener
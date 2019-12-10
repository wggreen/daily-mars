import {fetchPhoto} from "./PhotoFetcher.js"
import PhotoList from "./PhotoList.js"

const addSearchEventListener = () => {

    const searchEvent = document.querySelector("#date_button")
    searchEvent.addEventListener(
        "click",
        theSearchEvent => {
            const searchDate = document.querySelector("#date_form").value
            fetchPhoto(searchDate)
            .then(PhotoList)
        }
    )

}

export default addSearchEventListener
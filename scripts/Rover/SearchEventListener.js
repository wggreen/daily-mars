let roverPhotos = []

export const useRoverPhotos = () => {
    return roverPhotos
}

import {getPhotos} from "./PhotoDataProvider.js"

const addSearchEventListeners = () => {

    const searchEvent = document.querySelector("#date_button")
    console.log(searchEvent)
    searchEvent.addEventListener(
        "click",
        theSearchEvent => {
            const dateFormatted = document.querySelector("#date_form").value
            getPhotos(dateFormatted, "spirit")
            .then(response => response.json())
            .then(response => response.array.forEach(taco => {
                roverPhotos.push()
                console.log(roverPhotos)
            }))
        }
    )
}


export default addSearchEventListeners
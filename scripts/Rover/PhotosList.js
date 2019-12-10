/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import PhotoHTML from "./PhotoHTML.js"
import usePhotos from "./PhotoFetcher.js"

const PhotoList = () => {

    let fetchedPhotos = usePhotos()


    // Get a reference to the `<section class="fishList">` element
    const contentTarget = document.querySelector(".rover_photos")

    // Add to the existing HTML in the content element
    contentTarget.innerHTML = `
            ${
                fetchedPhotos.map(photo => PhotoHTML(photo)).join(" ")
            }
    `
}

export default PhotoList
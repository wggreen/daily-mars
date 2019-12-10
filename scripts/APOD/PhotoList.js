import PhotoHTML from "./PhotoHTML.js"
import usePhoto from "./PhotoFetcher.js"

const PhotoList = () => {

    let fetchedPhoto = usePhoto()


    // Get a reference to the `<section class="fishList">` element
    const contentTarget = document.querySelector(".APODS")

    // Add to the existing HTML in the content element
    contentTarget.innerHTML = `
            ${
                PhotoHTML(fetchedPhoto)
            }
    `
}

export default PhotoList
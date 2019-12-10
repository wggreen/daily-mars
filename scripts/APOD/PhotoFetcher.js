import dateFormat from "./dateFormat.js"

let APOD = {}

export const fetchPhoto = (searchDate) => {
    return fetch(`https://api.nasa.gov/planetary/apod?date=${searchDate}&api_key=mEv8f89p1VFxd5WgDGm4KkzLg7ZPfzjcWhbX88so`)
        .then(response => response.json())
        .then(singlePhoto => {
            dateFormat(singlePhoto)
            APOD = singlePhoto
        })
};
            
    
let usePhoto = () => {
    return APOD
}

export default usePhoto
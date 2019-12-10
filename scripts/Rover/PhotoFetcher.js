let photos = []

export const fetchPhotos = (searchDate, roverName) => {
    return fetch(`
                    https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${searchDate}&api_key=mEv8f89p1VFxd5WgDGm4KkzLg7ZPfzjcWhbX88so 
    `)
        .then(response => response.json())
        .then(
            parsedPhotos => {
                parsedPhotos.photos.forEach(photo => {
                    let dateFormatted = photo.earth_date.split("-")
                    dateFormatted.push(dateFormatted[0])
                    dateFormatted.shift()
                    dateFormatted = dateFormatted.join("/")
                    photo.earth_date = dateFormatted
                    photo.rover = roverName
                    photos.push(photo)
                });
            }
        )
}

let usePhotos = () => {
    return photos
}

export default usePhotos
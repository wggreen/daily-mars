let photos = []

export const usePhotos = () => {
    return photos
}

export const getPhotos = (searchDate, roverName) => {
    return fetch(`
                    https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${searchDate}&api_key=mEv8f89p1VFxd5WgDGm4KkzLg7ZPfzjcWhbX88so 
    `)
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictions = parsedConvictions.slice().sort()
            }
        )
}
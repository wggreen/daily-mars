let dateFormat = (photo) => {
    let dateFormatted = photo.date.split("-")
    dateFormatted.push(dateFormatted[0])
    dateFormatted.shift()
    dateFormatted = dateFormatted.join("/")
    photo.date = dateFormatted
    return photo
}

export default dateFormat
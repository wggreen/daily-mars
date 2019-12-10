const PhotoHTML = (photo) => {
    return `
        <section class="APOD">
                <div class="APOD_title">
                    <h2>
                        ${photo.title}
                    </h2>
                </div>
                <div class="APOD_photo">
                    <img class="APOD__img" src="${photo.url}" alt="Astronomy Picture of the Day">
                </div>
            <div class="APOD_info">
                <span class="APOD__date">
                    Earth date: ${photo.date}
                </span>
                <span class="APOD__explanation">
                    ${photo.explanation}
                </span>
            </div>
        </section>
    `
}

export default PhotoHTML
const PhotoHTML = (photo) => {
    return `
        <section class="rover_data">
            <div class="rover__name">
                <h2>
                    ${photo.rover}
                </h2>
            </div>
            <div class="rover__photo">
                <img class="rover___image" src="${photo.img_src}" alt="a picture from the Mars rover">
            </div>
            <div class="rover__info">
                <span class="rover___data">
                    Earth date: ${photo.earth_date}
                </span>
                <span class="camera__name">
                    Camera: ${photo.camera.name}
                </span>
                <span>
                    ID: ${photo.id}
                </span>
            </div>
        </section>
    `
}

export default PhotoHTML
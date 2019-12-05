const PhotoComponent = (photo) => {
    return `
        <section class="rover_data">
            <div class="rover_photo">
                <img class="rover__image" src="${photo.img_src}" alt="a picture from the Mars rover">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}">Details</button>
        
            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.length}</div>
                <div>Food: ${fish.food.join(",")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default PhotoComponent
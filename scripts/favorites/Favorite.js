export const Favorite = (favorite) => {
    return `
        <section class="favorite">
            <div class="favorite_source">
                <span>
                    source: ${favorite.source}
                </span>
            </div>
            <div class="favorite_date">
                <span>
                    date: ${favorite.date}
                </span>
            </div>
            <button id="deleteFavorite--${favorite.id}">
                Delete favorite
            </button>
        </section>
    `
}
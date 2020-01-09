let favorites = []

export const useFavorites = () => {
    return favorites
}

export const saveFavorite = favorite => {    
    return fetch("http://localhost:5050/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favorite)
    })
        .then(getFavorites)
}

export const getFavorites = () => {
    return fetch("http://localhost:5050/favorites")
        .then(response => response.json())
        .then((favoriteArray) => {
            favorites = favoriteArray.slice()
        })
}

export const deleteFavorite = favoriteId => {
    return fetch(`http://localhost:5050/favorites/${favoriteId}`, {
        method: "DELETE"
    })
        .then(getFavorites)
}
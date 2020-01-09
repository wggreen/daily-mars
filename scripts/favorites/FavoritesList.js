import {useFavorites, saveFavorite, deleteFavorite} from "./FavoritesProvider.js"
import {Favorite} from "./Favorite.js"

const eventHub = document.querySelector(".appContainer")

export const FavoritesList = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("favorite_button")) {
            // Construct `favorite_object` here
            const newFavorite = {
                source: "APOD",
                date: document.querySelector(".APOD__date").textContent
            }
    
            // Save new favorite
            saveFavorite(newFavorite)
                // .then(
                //     () => {
                //         // Get the favorites
                //         const updatedFavorites = useFavorites()
        
                //         // Now that you have an array of favorites, render them
                //     }
                // )
        }
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("showFavorites")) {
            const favorites = useFavorites()
            const render = () => {
                let contentTarget = document.querySelector(".favorites_button")
                contentTarget.innerHTML = ""
                contentTarget.innerHTML = `
                    <button id="hideFavorites>
                        Hide favorites
                    </button>
                `
                contentTarget = document.querySelector(".favorites")
                contentTarget.innerHTML = ""
                let favoritesHTML = favorites.map(favorite => Favorite(favorite)).join(" ")
                contentTarget.innerHTML = `
                    ${favoritesHTML}
                `
            }
            render()
        }
    })
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("hideFavorites")) {
            let contentTarget = document.querySelector(".favorites_button")
            contentTarget.innerHTML = ""
            contentTarget.innerHTML = `
                <button id="showFavorites">
                    Show Favorites
                </button>
            `
            contentTarget = document.querySelector(".favorites")
            contentTarget.innerHTML = ""
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteFavorite")) {
            const [prefix, id] = clickEvent.target.id.split("--")

            const render = favorites => {
                let contentTarget = document.querySelector(".favorites")
                contentTarget.innerHTML = ""
                let favoritesHTML = favorites.map(favorite => Favorite(favorite)).join(" ")
                contentTarget.innerHTML = `
                    ${favoritesHTML}
                `
            }

            deleteFavorite(id)
                .then(() => render(useFavorites()))
        }
    })
}
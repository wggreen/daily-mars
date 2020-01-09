import SearchHTML from "./SearchHTML.js"
import addSearchEventListener from "./SearchListener.js"
import {getFavorites} from "../favorites/FavoritesProvider.js"
import {FavoritesList} from "../favorites/FavoritesList.js"

SearchHTML()
addSearchEventListener()
getFavorites()
    .then(() => FavoritesList())
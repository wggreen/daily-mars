const SearchHTML = () => {

    const contentElement = document.querySelector(".date_search")

    contentElement.innerHTML += `
        <label for="date_form">Enter a date:</label>
        <input type="date" id="date_form"></input>
        <button id="date_button">Search</button>
    `
}

export default SearchHTML
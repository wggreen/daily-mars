const contentTarget = document.getElementById("search_area")
const probes = ["spirit", "opportunity", "curiosity"]

const ProbeSelect = () => {
   
    const render = () => {
        contentTarget.innerHTML = 
        `<select class="probe_dropdown" id="probeSelect">
            <option value="0">Please select a probe...</option>
        ${
            probes.map(probe =>
                `<option class="probe" value=${probe}>${probe}</option>`                
            )
        }
        </select>
        <label for="date_form">Enter a date:</label>
        <input type="date" id="date_form"></input>
        <button id="search_button">Search</button>
        `
    }

    render()
}

export default ProbeSelect
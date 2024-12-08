export default function loadShop() {
    const bigContainer = document.getElementById("bigContainer");
    bigContainer.innerHTML = "";

    const container = document.createElement('div');
    container.classList.add("container");

    if (!container) {
        console.error('Container element not found!');
        return;
    }
    container.innerHTML = '';
    container.style.display = "block";

    const sign = document.createElement('div');
    sign.classList.add('sign');
    sign.innerHTML = `
    <div id="sign">
            <div><h1>Reserve A Table!</h1></div>
            <div id="form">
                <form action="#" method="get" id="signUp">
                    <fieldset id="info">
                        <div id="nameContainer">
                            <input type="text" id="firstName" placeholder="Name" required>
                        </div>
                        <div class="dateAndTime">
                            <input type="date" id="dateInput" name="dateInput" required>
                            <input type="time" id="timeInput" name="timeInput" required>
                        </div>
                        <div id="map">
                            <input type="email" placeholder="Email" name="email" required>
                            <input type="tel" name="phone" placeholder="Your phone number" required>
                        </div>
                        <select>
                            <option value="2">2 Persons</option>
                            <option value="4">4 Persons</option>
                            <option value="6">6 Persons</option>
                            <option value=">8">8+ Persons</option>
                        </select>
                    </fieldset>
                    <button type="submit" id="create" onclick="alert('Thanks for using our services!')">Reserve!</button>
                </form>
            </div>
        </div>`;

    container.appendChild(sign);
    bigContainer.appendChild(container);
}
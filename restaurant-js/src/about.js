function loadAbout() {
    let div = document.querySelector("#content");

    let welcome = document.createElement('h1');
    welcome.textContent = "About Us";

    let description = document.createElement('p');
    description.textContent = "We are a virtual restaurant offering delicious virtuals meals to our customers via Zoom.";
    div.appendChild(welcome);
    div.appendChild(description);
}

export {loadAbout}
function pageLoad() {
    let div = document.querySelector("#content");

    let welcome = document.createElement('h1');
    welcome.textContent = "Welcome to Elaine's Virtual Restaurant!";

    let description = document.createElement('p');
    description.textContent = "Brought to you via Zoom. Join the meeting now: www.virtual-restaurant.meeting.zoom.us";
    div.appendChild(welcome);
    div.appendChild(description);
}

export {pageLoad}
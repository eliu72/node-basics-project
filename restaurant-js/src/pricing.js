function loadPricing() {
    let div = document.querySelector("#content");

    let welcome = document.createElement('h1');
    welcome.textContent = "Pricing";

    let description = document.createElement('p');
    description.textContent = "Per guest: $35. We deliver your meal directly to your door for your online restaurant experience.";
    div.appendChild(welcome);
    div.appendChild(description);
}

export {loadPricing}
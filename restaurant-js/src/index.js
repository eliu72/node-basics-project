import {pageLoad} from "./page-load.js";
import {loadAbout} from "./about.js";
import {loadPricing} from "./pricing.js";

pageLoad();

document.querySelector("#about").addEventListener('click', () => {
    document.querySelector("#content").innerHTML = '';
    loadAbout();
})

document.querySelector("#pricing").addEventListener('click', () => {
    document.querySelector("#content").innerHTML = '';
    loadPricing();  
})
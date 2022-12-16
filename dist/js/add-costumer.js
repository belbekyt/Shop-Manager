import { Costumer, costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";
const sendForm = document.querySelector("#submitCostumerForm");
const nameInput = document.querySelector("#nameInput");
const surnameInput = document.querySelector("#surnameInput");
const countryInput = document.querySelector("#countryInput");
const cityInput = document.querySelector("#cityInput");
const streetInput = document.querySelector("#streetInput");
const sexInput = document.querySelector("#sexInput");
sendForm.addEventListener("click", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const surname = surnameInput.value;
    const country = countryInput.value;
    const city = cityInput.value;
    const street = streetInput.value;
    const id = costumers.length + 1;
    const sex = sexInput.checked;
    const costumer = new Costumer(id, name, surname, city, street, country, sex);
    costumers.push(costumer);
    renderCostumers(costumers, true);
});

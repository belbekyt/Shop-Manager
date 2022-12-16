import { Costumer, costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";

const sendForm: HTMLButtonElement = document.querySelector("#submitCostumerForm");
const nameInput: HTMLInputElement = document.querySelector("#nameInput");
const surnameInput: HTMLInputElement = document.querySelector("#surnameInput");
const countryInput: HTMLInputElement = document.querySelector("#countryInput");
const cityInput: HTMLInputElement = document.querySelector("#cityInput");
const streetInput: HTMLInputElement = document.querySelector("#streetInput");
const sexInput: HTMLInputElement = document.querySelector("#sexInput");

sendForm.addEventListener("click", (e) => {
    e.preventDefault();

    const name: string = nameInput.value;
    const surname: string = surnameInput.value;
    const country: string = countryInput.value;
    const city: string = cityInput.value;
    const street: string = streetInput.value;
    const id: number = costumers.length+1;
    const sex: boolean = sexInput.checked;

    const costumer = new Costumer(id, name, surname, city, street, country, sex);

    costumers.push(costumer);
    renderCostumers(costumers, true);
})
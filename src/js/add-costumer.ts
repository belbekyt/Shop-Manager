import { Costumer, costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";

sendFormCostumer.addEventListener("click", (e) => {
    e.preventDefault();

    addCostumerHolder.classList.add("hidden-up");

    const name: string = nameInput.value;
    const surname: string = surnameInput.value;
    const country: string = countryInput.value;
    const city: string = cityInput.value;
    const street: string = streetInput.value;
    const id: number = costumers.length+1;
    const sex: boolean = sexInput.checked;

    nameInput.value = "";
    surnameInput.value = "";
    countryInput.value = "";
    cityInput.value = "";
    streetInput.value = "";
    sexInput.checked = false;

    const costumer = new Costumer(id, name, surname, city, street, country, sex);

    costumers.push(costumer);
    renderCostumers(costumers, true);
})
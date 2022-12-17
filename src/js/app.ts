import { costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";

import { orders } from "./orders.js";
import { renderOrders } from "./render-orders.js";

renderCostumers(costumers, true);

const cardsViewCostumers: HTMLElement = document.querySelector("#card-view-costumers");
const listViewCostumers: HTMLElement = document.querySelector("#list-view-costumers");
const addCostumer: HTMLElement = document.querySelector("#add-costumer");

const cardViewOrders: HTMLElement = document.querySelector("#card-view-orders");
const listViewOrders: HTMLElement = document.querySelector("#list-view-orders");

const addCostumerHolder: HTMLElement = document.querySelector("#add-costumer-holder");
const costumersHolder: HTMLElement = document.querySelector("#costumers-holder");

cardsViewCostumers.addEventListener("click", () => {
    renderCostumers(costumers, true);
})

listViewCostumers.addEventListener("click", () => {
    renderCostumers(costumers, false);
})

cardViewOrders.addEventListener("click", () => {
    renderOrders(orders, true);
})

listViewOrders.addEventListener("click", () => {
    renderOrders(orders, false);
})

addCostumer.addEventListener("click", () => {
    costumersHolder.classList.add("hidden-up");
    addCostumerHolder.classList.remove("hidden-up");
    listViewCostumers.classList.remove("text-black");
    cardsViewCostumers.classList.remove("text-black");
    addCostumer.classList.add("text-black");
})
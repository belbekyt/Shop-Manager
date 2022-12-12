import { costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";

import { orders } from "./orders.js";
import { renderOrders } from "./render-orders.js";

renderCostumers(costumers, true);

const cardsViewCostumers: HTMLElement = document.querySelector("#card-view-costumers");
const listViewCostumers: HTMLElement = document.querySelector("#list-view-costumers");

const cardViewOrders: HTMLElement = document.querySelector("#card-view-orders");
const listViewOrders: HTMLElement = document.querySelector("#list-view-orders");

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
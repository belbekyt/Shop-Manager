import { costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";
import { orders } from "./orders.js";
import { renderOrders } from "./render-orders.js";
renderCostumers(costumers, true);
const cardsViewCostumers = document.querySelector("#card-view-costumers");
const listViewCostumers = document.querySelector("#list-view-costumers");
const addCostumer = document.querySelector("#add-costumer");
const cardViewOrders = document.querySelector("#card-view-orders");
const listViewOrders = document.querySelector("#list-view-orders");
const addCostumerHolder = document.querySelector("#add-costumer-holder");
const costumersHolder = document.querySelector("#costumers-holder");
cardsViewCostumers.addEventListener("click", () => {
    renderCostumers(costumers, true);
});
listViewCostumers.addEventListener("click", () => {
    renderCostumers(costumers, false);
});
cardViewOrders.addEventListener("click", () => {
    renderOrders(orders, true);
});
listViewOrders.addEventListener("click", () => {
    renderOrders(orders, false);
});
addCostumer.addEventListener("click", () => {
    costumersHolder.classList.add("hidden-up");
    addCostumerHolder.classList.remove("hidden-up");
    listViewCostumers.classList.remove("text-black");
    cardsViewCostumers.classList.remove("text-black");
    addCostumer.classList.add("text-black");
});

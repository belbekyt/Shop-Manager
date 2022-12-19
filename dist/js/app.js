import { costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";
import { orders } from "./orders.js";
import { renderOrders } from "./render-orders.js";
renderCostumers(costumers, true);
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
    createCostumerHolder.classList.remove("hidden-up");
    listViewCostumers.classList.remove("text-black");
    cardsViewCostumers.classList.remove("text-black");
    addCostumer.classList.add("text-black");
});
addOrder.addEventListener("click", () => {
    ordersHolder.classList.add("hidden-up");
    createOrderHolder.classList.remove("hidden-up");
    listViewOrders.classList.remove("text-black");
    cardViewOrders.classList.remove("text-black");
    addOrder.classList.add("text-black");
});

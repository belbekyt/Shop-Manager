import { renderOrders } from "./render-orders.js";
import { orders } from "./orders.js";
const costumersBtn = document.querySelector("#menu-costumers");
const ordersBtn = document.querySelector("#menu-orders");
const createOrderBtn = document.querySelector("#menu-create-order");
const createCostumerBtn = document.querySelector("#menu-create-costumer");
const costumersSection = document.querySelector("#costumers-section");
const ordersSection = document.querySelector("#orders-section");
const createOrderSection = document.querySelector("#orders-create-section");
const createCostumerSection = document.querySelector("#costumer-create-section");
const costumersHolder = document.querySelector("#costumers-holder");
const ordersHolder = document.querySelector("#orders-holder");
const createOrderHolder = document.querySelector("#create-order");
const createCostumerHolder = document.querySelector("#create-costumer");
//idk why but this.id or e.target.id is not working so i can't use foreach
costumersBtn.addEventListener("click", () => {
    menuHandler(costumersBtn.id);
});
ordersBtn.addEventListener("click", () => {
    menuHandler(ordersBtn.id);
});
createOrderBtn.addEventListener("click", () => {
    menuHandler(createOrderBtn.id);
});
createCostumerBtn.addEventListener("click", () => {
    menuHandler(createCostumerBtn.id);
});
const menuHandler = (id) => {
    switch (id) {
        case "menu-costumers":
            hide();
            costumersSection.classList.remove("hidden-up");
            costumersHolder.classList.remove("hidden-up");
            break;
        case "menu-orders":
            hide();
            ordersSection.classList.remove("hidden-up");
            ordersHolder.classList.remove("hidden-up");
            renderOrders(orders, true);
            break;
        case "menu-create-order":
            hide();
            createOrderSection.classList.remove("hidden-up");
            createOrderHolder.classList.remove("hidden-up");
            break;
        case "menu-create-costumer":
            hide();
            createCostumerSection.classList.remove("hidden-up");
            createCostumerHolder.classList.remove("hidden-up");
            break;
    }
};
const hide = () => {
    costumersSection.classList.add("hidden-up");
    ordersSection.classList.add("hidden-up");
    createOrderSection.classList.add("hidden-up");
    createCostumerSection.classList.add("hidden-up");
    costumersHolder.classList.add("hidden-up");
    ordersHolder.classList.add("hidden-up");
    createOrderHolder.classList.add("hidden-up");
    createCostumerHolder.classList.add("hidden-up");
};

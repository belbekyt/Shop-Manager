import { renderOrders } from "./render-orders.js";
import { orders } from "./orders.js";
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
    hideList.forEach(elem => {
        elem.classList.add("hidden-up");
    });
};

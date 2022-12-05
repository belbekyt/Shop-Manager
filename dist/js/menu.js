const costumersBtn = document.querySelector("#menu-costumers");
const ordersBtn = document.querySelector("#menu-orders");
const createOrderBtn = document.querySelector("#menu-create-order");
const createCostumerBtn = document.querySelector("#menu-create-costumer");
const costumersSection = document.querySelector("#costumers-section");
const ordersSection = document.querySelector("#orders-section");
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
            costumersSection.classList.remove("hidden");
            break;
        case "menu-orders":
            hide();
            ordersSection.classList.remove("hidden");
            break;
    }
};
const hide = () => {
    costumersSection.classList.add("hidden");
    ordersSection.classList.add("hidden");
};

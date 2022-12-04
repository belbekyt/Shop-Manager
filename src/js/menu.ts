const costumersBtn: HTMLElement = document.querySelector("#menu-costumers");
const ordersBtn: HTMLElement = document.querySelector("#menu-orders");
const createOrderBtn: HTMLElement = document.querySelector("#menu-create-order");
const createCostumerBtn: HTMLElement = document.querySelector("#menu-create-costumer");

//idk why but this.id or e.target.id is not working so i can't use foreach
costumersBtn.addEventListener("click", () => {
    menuHandler(costumersBtn.id);
})

ordersBtn.addEventListener("click", () => {
    console.log(ordersBtn.id);
})

createOrderBtn.addEventListener("click", () => {
    console.log(createOrderBtn.id);
})

createCostumerBtn.addEventListener("click", () => {
    console.log(createCostumerBtn.id);
})

const menuHandler = (id) => {
    console.log(id);
}
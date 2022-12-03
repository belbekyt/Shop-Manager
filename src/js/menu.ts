const costumersBtn: HTMLElement = document.querySelector("#menu-costumers");
const ordersBtn: HTMLElement = document.querySelector("#menu-orders");
const createOrderBtn: HTMLElement = document.querySelector("#menu-create-order");
const createCostumerBtn: HTMLElement = document.querySelector("#menu-create-costumer");

const menuButtons: HTMLElement[] = [costumersBtn, ordersBtn, createOrderBtn, createCostumerBtn];

costumersBtn.addEventListener("click", () => {
    console.log("hi")
})

const setMenu = () => {
    console.log("hi");
}
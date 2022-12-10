import { Order } from "./orders.js";

const ordersHolder: HTMLElement = document.querySelector("#orders-holder");

const createOrderCard = (order: Order) => {
    const orderElement: HTMLElement = document.createElement("div");
    orderElement.classList.add("card");
    orderElement.innerHTML = `
        <div class="orders-card-heading">Order ${order.orderid}</div>
        <div class="orders-card-body">
            <p>Costumer: ${order.costumerid}</p>
            <p>Items: ${order.items}</p>
            <p>Cost: ${order.total} PLN</p>
        </div>
    `;

    return orderElement;
}

export const renderOrders = (orders: object[]) => {
    console.log("hi");
    ordersHolder.innerHTML = "";
    orders.forEach((order: Order) => {
        ordersHolder.appendChild(createOrderCard(order));
    })
}
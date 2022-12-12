import { Order } from "./orders.js";

const ordersHolder: HTMLElement = document.querySelector("#orders-holder");
const cardViewOrders: HTMLElement = document.querySelector("#card-view-orders");
const listViewOrders: HTMLElement = document.querySelector("#list-view-orders");

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

const createOrderList = (order: Order) => {
    const orderElement: HTMLElement = document.createElement("div");
    orderElement.classList.add("card-list");
    orderElement.innerHTML = `
        <p class="list-element">Order ${order.orderid}</p>
        <p class="list-element">Costumer: ${order.costumerid}</p>
        <p class="list-element">Items: ${order.items}</p>
        <p class="list-element">Cost: ${order.total} PLN</p>
    `;

    return orderElement;
}

export const renderOrders = (orders: object[], structure: boolean) => {
    ordersHolder.innerHTML = "";
    ordersHolder.className = "";

    if(structure){
        listViewOrders.classList.remove("text-black");
        cardViewOrders.classList.add("text-black");
        ordersHolder.classList.add("card-view-style");

        orders.forEach((order: Order) => {
            ordersHolder.appendChild(createOrderCard(order));
        })
    }
    else{
        cardViewOrders.classList.remove("text-black");
        listViewOrders.classList.add("text-black");
        ordersHolder.classList.add("list-view-style");

        orders.forEach((order: Order) => {
            ordersHolder.appendChild(createOrderList(order));
        })
    }
}
import { Order } from "./orders.js";
import { Costumer, costumers } from "./costumers.js";

let x: string;

const createOrderCard = (order: Order) => {
    checkCostumerName(order.costumerid, costumers);
    const orderElement: HTMLElement = document.createElement("div");
    orderElement.classList.add("card");
    orderElement.innerHTML = `
        <div class="orders-card-heading">Order ${order.orderid}</div>
        <div class="orders-card-body">
            <p>Costumer: ${x}</p>
            <p>Items: ${order.items}</p>
            <p>Cost: ${order.total} PLN</p>
        </div>
    `;

    return orderElement;
}

const createOrderList = (order: Order) => {
    checkCostumerName(order.costumerid, costumers);
    const orderElement: HTMLElement = document.createElement("div");
    orderElement.classList.add("card-list");
    orderElement.innerHTML = `
        <p class="list-element">Order ${order.orderid}</p>
        <p class="list-element">Costumer: ${x}</p>
        <p class="list-element">Items: ${order.items}</p>
        <p class="list-element">Cost: ${order.total} PLN</p>
    `;

    return orderElement;
}

const checkCostumerName = (id: number, costumers: object[]) => {
    costumers.forEach((costumer: Costumer) => {
        if(costumer.id == id){
            x = costumer.name + " " + costumer.surname;
        }
    })
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
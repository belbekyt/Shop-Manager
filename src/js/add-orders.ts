import { Order, orders } from "./orders.js";
import { costumers } from "./costumers.js";
import { renderOrders } from "./render-orders.js";

sendFormOrder.addEventListener("click", (e) => {
    e.preventDefault();

    const costumerId: number = parseInt(costumerIdInput.value);

    if(costumerId > 0 && costumerId<costumers.length){
        createOrderHolder.classList.add("hidden-up");
        
        const id: number = orders.length+1;
        const count: number = parseInt(countInput.value);
        const total: number =  parseInt(costInput.value);

        costumerIdInput.value = "";
        countInput.value = "";
        costInput.value = "";

        const order = new Order(id, costumerId, total, count);

        orders.push(order);
        renderOrders(orders, true);
    }   
})
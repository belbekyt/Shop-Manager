export class Order {
    constructor(id, costumerid, total, items) {
        this.orderid = id;
        this.costumerid = costumerid;
        this.total = total;
        this.items = items;
    }
}
const order1 = new Order(1, 4, 299.87, 5);
const order2 = new Order(2, 7, 80.25, 2);
const order3 = new Order(3, 9, 119.99, 3);
const order4 = new Order(4, 2, 248.99, 5);
const order5 = new Order(5, 1, 415.20, 7);
const order6 = new Order(6, 6, 49.99, 1);
const order7 = new Order(7, 8, 89.99, 1);
const order8 = new Order(8, 3, 147.89, 3);
const order9 = new Order(9, 5, 270.50, 5);
const order10 = new Order(10, 10, 200.00, 4);
export let orders = [order1, order2, order3, order4, order5, order6, order7, order8, order9, order10];
orders[0];

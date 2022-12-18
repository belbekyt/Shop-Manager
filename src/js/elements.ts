const costumersBtn: HTMLButtonElement = document.querySelector("#menu-costumers");
const ordersBtn: HTMLButtonElement = document.querySelector("#menu-orders");
const createOrderBtn: HTMLButtonElement = document.querySelector("#menu-create-order");
const createCostumerBtn: HTMLButtonElement = document.querySelector("#menu-create-costumer");

const costumersSection: HTMLElement = document.querySelector("#costumers-section");
const ordersSection: HTMLElement = document.querySelector("#orders-section");
const createOrderSection: HTMLElement = document.querySelector("#orders-create-section");
const createCostumerSection: HTMLElement = document.querySelector("#costumer-create-section");

const costumersHolder: HTMLElement = document.querySelector("#costumers-holder");
const ordersHolder: HTMLElement = document.querySelector("#orders-holder");
const createOrderHolder: HTMLElement = document.querySelector("#create-order");
const createCostumerHolder: HTMLElement = document.querySelector("#add-costumer-holder");

const cardsViewCostumers: HTMLElement = document.querySelector("#card-view-costumers");
const listViewCostumers: HTMLElement = document.querySelector("#list-view-costumers");
const cardViewOrders: HTMLElement = document.querySelector("#card-view-orders");
const listViewOrders: HTMLElement = document.querySelector("#list-view-orders");

const addCostumer: HTMLElement = document.querySelector("#add-costumer");

const sendForm: HTMLButtonElement = document.querySelector("#submitCostumerForm");
const nameInput: HTMLInputElement = document.querySelector("#nameInput");
const surnameInput: HTMLInputElement = document.querySelector("#surnameInput");
const countryInput: HTMLInputElement = document.querySelector("#countryInput");
const cityInput: HTMLInputElement = document.querySelector("#cityInput");
const streetInput: HTMLInputElement = document.querySelector("#streetInput");
const sexInput: HTMLInputElement = document.querySelector("#sexInput");
const addCostumerHolder: HTMLElement = document.querySelector("#add-costumer-holder");

const hideList: HTMLElement[] = [costumersSection, ordersSection, createOrderSection, createCostumerSection, costumersHolder, ordersHolder, createOrderHolder, createCostumerHolder];
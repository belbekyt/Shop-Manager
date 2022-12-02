import { costumers } from "./costumers.js";
import { renderCostumers } from "./render-costumers.js";

renderCostumers(costumers, true);
const costumersHolder: HTMLElement = document.querySelector("#costumers-holder");

const cardsView: HTMLElement = document.querySelector("#card-view");
const listView: HTMLElement = document.querySelector("#list-view");

cardsView.addEventListener("click", () => {
    listView.classList.remove("text-black");
    cardsView.classList.add("text-black");
    costumersHolder.className = "";
    costumersHolder.classList.add("card-view-style");
    renderCostumers(costumers, true);
})

listView.addEventListener("click", () => {
    cardsView.classList.remove("text-black");
    listView.classList.add("text-black");
    costumersHolder.className = "";
    costumersHolder.classList.add("list-view-style");
    renderCostumers(costumers, false);
})
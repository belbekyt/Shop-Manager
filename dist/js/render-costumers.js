const costumerPhoto = (sex) => {
    if (sex) {
        return '<img class="card-photo" src="dist/photo/men.png" alt="men profile picture">';
    }
    else {
        return '<img class="card-photo" src="dist/photo/woman.png" alt="woman profile picture">';
    }
};
const createCostumerCards = (costumer) => {
    let link = costumerPhoto(costumer.sex);
    const costumerElement = document.createElement("div");
    costumerElement.classList.add("card");
    costumerElement.innerHTML = `
        <div class="card-heading">
            <h3>${costumer.name} ${costumer.surname}</h3>
            <svg class="card-update" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </div>
        <div class="card-body">
            ${link}
            <div>
                <p>${costumer.city}</p>
                <p>${costumer.country}</p>
                <p class="card-link">View Orders</p>
            </div>
        </div>
    `;
    return costumerElement;
};
const createCostumerLists = (costumer) => {
    let link = costumerPhoto(costumer.sex);
    const costumerElement = document.createElement("div");
    costumerElement.classList.add("card-list");
    costumerElement.innerHTML = `
        <p class="list-element">${costumer.id}</p>
        ${link}
        <p class="list-element">${costumer.name}</p>
        <p class="list-element">${costumer.surname}</p>
        <p class="list-element">${costumer.street}</p>
        <p class="list-element">${costumer.city}</p>
        <p class="list-element">${costumer.country}</p>
    `;
    return costumerElement;
};
export const renderCostumers = (costumers, structure) => {
    const costumersHolder = document.querySelector("#costumers-holder");
    costumersHolder.innerHTML = "";
    costumers.forEach((costumer) => {
        if (structure) {
            costumersHolder.appendChild(createCostumerCards(costumer));
        }
        else {
            costumersHolder.appendChild(createCostumerLists(costumer));
        }
    });
};

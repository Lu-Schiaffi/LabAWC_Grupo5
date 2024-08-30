import { getProducts } from "../api.js";

let cardContainer = document.querySelector("#card-template");

export function createCard() {
  getProducts().then((data) => {
    data.map((prod) => {
      // Title trimmed to 100 characters
      let displayTitle = prod.title;
      if (displayTitle.length > 30) {
        displayTitle = displayTitle.substring(0, 27);
        displayTitle += "...";
      }
      // Description trimmed to 100 characters
      let displayDescription = prod.description;
      if (displayDescription.length > 100) {
        displayDescription = displayDescription.substring(0, 97);
        displayDescription += "...";
      }

      let card = `<div class="card">
        <img src=${prod.image} class="card-img-top" alt="${prod.title}">
        <div class="card-body">
            <h5 class="card-title">${displayTitle}</h5>
            <p class="card-text">${displayDescription}</p>
            <p class="card-price text-center">$ ${prod.price}</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm ">Agregar</button>
      </div>`;
      cardContainer.innerHTML += card;
    });
  });
}

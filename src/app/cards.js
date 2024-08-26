import { getProducts } from "../api.js";

let cardContainer = document.querySelector("#card-template");

export function createCard() {
  getProducts().then((data) => {
    data.map((prod) => {
      let card = `<div class="card">
      <img src=${prod.image} class="card-img-top" alt="${prod.title}">
      <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text">${prod.description}</p>
          <p class="card-price">$ ${prod.price}</p>
      </div>
 </div>`;
      cardContainer.innerHTML += card;
    });
  });
}

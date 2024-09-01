import { getProducts } from "../api.js";
import { createModal } from "./modal.js";
import { addToCart } from "./addToCart.js";

let cardContainer = document.querySelector("#card-template");

export function createCard() {
  getProducts().then((data) => {
    data.map((product) => {
      // Title trimmed to 100 characters
      let displayTitle = product.title;
      if (displayTitle.length > 30) {
        displayTitle = displayTitle.substring(0, 27);
        displayTitle += "...";
      }
      // Description trimmed to 100 characters
      // let displayDescription = product.description;
      // if (displayDescription.length > 100) {
      //   displayDescription = displayDescription.substring(0, 97);
      //   displayDescription += "...";
      // }
      product.quantity = 0;

      let card = `<div class="card ">
        <img src=${product.image} class="card-img-top p-1" alt="${product.title}">
        <div class="card-body">
            <h5 class="card-title">${displayTitle}</h5>
            <p class="card-price text-center">$ ${product.price}</p>
        </div>
        <button title="Botón Más detalles" type="button" class="btn btn-secondary btn-sm mb-2 data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnDetails-${product.id}">Más detalles</button>
        <button title ="Botón Agregar al carrito" type="button" class="btn btn-primary btn-sm mb-2" id="btnAddCart-${product.id}">Agregar al carrito</button>
      </div>`;

      setTimeout(() => {
        let btnDetails = document.querySelector(`#btnDetails-${product.id}`);
        btnDetails.onclick = () => {
          createModal(product);
        };
      }, 0);

      setTimeout(() => {
        let btnAddToCart = document.querySelector(`#btnAddCart-${product.id}`);
        btnAddToCart.onclick = () => {
          addToCart(product);
        };
      }, 0);

      cardContainer.innerHTML += card;
    });
  });
}

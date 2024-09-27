import { getProducts } from "../api.js";
import { createModal } from "./modal.js";
import { addToCart } from "./addToCart.js";
import { searcher } from "./searcher.js";

let spiner = document.querySelector("#loading");
let cardContainer = document.querySelector("#card-template");


export function createCards() {
  getProducts().then((data) => {
    spiner.remove();
    data.map((product) => {
      // createIndividualCard(product);
      // Title trimmed to 100 characters
      let displayTitle = product.title;
      if (displayTitle.length > 30) {
        displayTitle = displayTitle.substring(0, 27);
        displayTitle += "...";
      }
      product.quantity = 0;
      product.totalPrice = 0;

      // Se agrega el id al div para luego modificar la class con el searches: collpase | collapse.show
      let card = `<div class="card spaces collapse.show" id="card-${product.id}">
        <img src=${product.image} class="card-img-top p-1" alt="${product.title}">
        
        <h5 class="card-title">${displayTitle}</h5>
        <p class="card-price text-center">$ ${product.price}</p>
        <button title="Botón Más detalles" type="button" class="btn btn-secondary btn-sm mb-2 data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnDetails-${product.id}">Más detalles</button>
        <button title ="Botón Agregar al carrito" type="button" class="btn btn-primary btn-sm mb-2" id="btnAddCart-${product.id}">Agregar al carrito</button>
      </div>`;

      // Botón descripción
      setTimeout(() => {
        let btnDetails = document.querySelector(`#btnDetails-${product.id}`);
        btnDetails.onclick = () => {
          createModal(product);
        };
      }, 0);

      // Botón agregar al carrito
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

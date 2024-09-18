import { getProducts } from "../api.js";
import { createModal } from "./modal.js";
import { addToCart } from "./addToCart.js";

export function searcher() {
  let input = document.querySelector("#searcher");
  //   let searchedProducts = [];

  input.addEventListener("input", (e) => {
    let cardContainer = document.querySelector("#card-template");
    getProducts().then((data) => {
      data.map((product) => {
        let cardHide = document.querySelector(`#card-${product.id}`);
        if (
          product.title.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          cardHide.className = "card collapse-show";
        } else {
          cardHide.className = "card collapse";
        }
      });
    });

  });
}


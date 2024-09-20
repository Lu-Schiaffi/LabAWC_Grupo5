import { createAside } from "./aside.js";
import { toast } from "./toast.js";
import { createCartCards } from "./createCartCards.js";
import { addToCart, updateProductCount } from "./addToCart.js";

export function addRemoveButton(objLocalStorage, product, action) {
  let updatedLocalStorage = JSON.parse(localStorage.getItem("CardProducts"));

  let productInCart = updatedLocalStorage.find((p) => p.id === product.id);
  
  if (action === "add") {
    productInCart.quantity += 1;
    productInCart.totalPrice = productInCart.quantity * productInCart.price;
  } else if (action === "remove") {
    if (productInCart.quantity > 1) {
      productInCart.quantity -= 1;
      productInCart.totalPrice = productInCart.quantity * productInCart.price;
    } else {
      updatedLocalStorage = updatedLocalStorage.filter((p) => p.id !== product.id);
    }
  } else if (action === "delete") {
    updatedLocalStorage = updatedLocalStorage.filter((p) => p.id !== product.id);
  }

  localStorage.setItem("CardProducts", JSON.stringify(updatedLocalStorage));
  createAside(updatedLocalStorage);

  // llamo a la funcion que actualiza el num. rojo
  updateProductCount();
}

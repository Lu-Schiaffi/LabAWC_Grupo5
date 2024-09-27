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
    toast("El producto se agregó correctamente", "primary");
  } else if (action === "remove") {
    if (productInCart.quantity > 1) {
      productInCart.quantity -= 1;
      productInCart.totalPrice = productInCart.quantity * productInCart.price;
      toast("La cantidad se actualizo correctamente", "primary");
    } else {
      updatedLocalStorage = updatedLocalStorage.filter((p) => p.id !== product.id);
      toast("El producto se elimino correctamente", "danger");
    }
  } else if (action === "delete") {
    updatedLocalStorage = updatedLocalStorage.filter((p) => p.id !== product.id);
    toast("El producto se elimino correctamente", "danger");
  }

  // Update local storage + update pages. 
  localStorage.setItem("CardProducts", JSON.stringify(updatedLocalStorage));
  createAside(updatedLocalStorage);
  createCartCards(updatedLocalStorage); //call his one first to correctly renderize the Cart view.
  


  // llamo a la funcion que actualiza el num. rojo
  updateProductCount();
}

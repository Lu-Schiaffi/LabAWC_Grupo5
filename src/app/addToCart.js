import { createAside } from "./aside.js";
import { toast } from "./toast.js";

let qContainer = document.querySelector("#qProducts");
export function addToCart(product) {
  let objLocalStorage = JSON.parse(localStorage.getItem("CardProducts")) || [];
  let productExists = objLocalStorage.find(
    (productStorage) => productStorage.id == product.id
  );

  if (productExists) {
    productExists.quantity += 1;
    productExists.totalPrice = productExists.quantity * productExists.price
    let index = objLocalStorage.findIndex(
      (productStorage) => productStorage.id == product.id
    );
    objLocalStorage[index] = productExists;
  } else {
    product.quantity = 1;
    product.totalPrice = product.quantity * product.price
    objLocalStorage.push(product);
  }

  localStorage.setItem("CardProducts", JSON.stringify(objLocalStorage));
  createAside(objLocalStorage);
  toast("El producto se agregó correctamente", "primary");

  updateProductCount();
}

export function removeFromCart(product) {
  let objLocalStorage = JSON.parse(localStorage.getItem("CardProducts")) || [];

  let productExists = objLocalStorage.find(
    (productStorage) => productStorage.id == product.id
  );

  if (productExists && productExists.quantity > 1) {
    productExists.quantity -= 1;
    productExists.totalPrice = productExists.quantity * productExists.price
    let index = objLocalStorage.findIndex(
      (productStorage) => productStorage.id == product.id
    );
    objLocalStorage[index] = productExists;
  } else if (productExists && productExists.quantity === 1) {
    objLocalStorage = objLocalStorage.filter(
      (productStorage) => productStorage.id !== product.id
    );
  }

  localStorage.setItem("CardProducts", JSON.stringify(objLocalStorage));
  createAside(objLocalStorage);
  toast("El producto se eliminó correctamente", "light");

  updateProductCount();
}

// funcion para actualizar el num. rojo
export function updateProductCount() {
  let qContainer = document.querySelector("#qProducts");
  let updatedLocalStorage = JSON.parse(localStorage.getItem("CardProducts")) || [];

  // calcular cant. total
  let totalQuantity = updatedLocalStorage.reduce((sum, product) => sum + product.quantity, 0);

  // ocultar cuando no hay productos
  if (totalQuantity === 0) {
    qContainer.innerHTML = "";
  } else {
    let qProducts = `<div class="qProducts">${totalQuantity}</div>`;
    qContainer.innerHTML = qProducts;
  }
}

// inicio contador
document.addEventListener("DOMContentLoaded", function() {
  updateProductCount();
});



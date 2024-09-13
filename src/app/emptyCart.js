import { createAside } from "./aside.js";
import { toast } from "./toast.js";
import { createCartCards } from "./createCartCards.js";

export function emptyCart(objLocalStorage) {
  objLocalStorage = [];
  localStorage.setItem("CardProducts", JSON.stringify(objLocalStorage));
  toast("Se vació el carrito correctamente", "danger");

  createAside(objLocalStorage);
  createCartCards(objLocalStorage);
}

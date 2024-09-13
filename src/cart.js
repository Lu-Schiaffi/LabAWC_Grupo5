import { getProducts } from "./api.js";
import { createCard } from "./app/cards.js";
import { createAside } from "./app/aside.js";
import { toast } from "./app/toast.js";
import { createCartCards } from "./app/createCartCards.js";

// inicializar carrito

if (localStorage.getItem("CardProducts") == null) {
  localStorage.setItem("CardProducts", JSON.stringify([]));
}
let objLocalStorage = JSON.parse(localStorage.getItem("CardProducts"));

createCartCards(objLocalStorage);
createAside(objLocalStorage);

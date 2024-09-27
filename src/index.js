import { getProducts } from "./api.js";
import { createCards } from "./app/cards.js";
import { createAside } from "./app/aside.js";
import { toast } from "./app/toast.js";
import { createCartCards } from "./app/createCartCards.js";
import { searcher } from "./app/searcher.js";
createCards();
searcher();

// inicializar carrito

if (localStorage.getItem("CardProducts") == null) {
  localStorage.setItem("CardProducts", JSON.stringify([]));
}
let objLocalStorage = JSON.parse(localStorage.getItem("CardProducts"));
createAside(objLocalStorage);

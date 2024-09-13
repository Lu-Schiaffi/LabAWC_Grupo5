import { addRemoveButton } from "./addRemoveButton.js";
import { addToCart } from "./addToCart.js";
import { createCartCards } from "./createCartCards.js";

export function createAside(objLocalStorage) {
  let totalCompra = 0;
  // limpiar el aside cada vez que se llama la función
  let asideBody = document.querySelector("#aside-body");
  asideBody.innerHTML = "<br>";

  objLocalStorage.map((product) => {
    let aside = `
    <div class="card mb-3 text-bg-dark border border-light-subtle" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${product.image}" class="img-fluid rounded-start p-1" alt="${product.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-title text-center">$${product.totalPrice}</p>
            <div class= "text-center" >
              <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonLess-${product.id}">-</button>
              <span class="card-text">${product.quantity}</span>
              <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonAdd-${product.id}">+</button>
              <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonDelete-${product.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
        `;

    totalCompra += product.totalPrice;

    // boton menos
    setTimeout(() => {
      let buttonLess = document.querySelector(`#buttonLess-${product.id}`);
      buttonLess.onclick = () => {
        addRemoveButton(objLocalStorage, product, "remove");
      };
    }, 0);

    // boton más
    setTimeout(() => {
      let buttonAdd = document.querySelector(`#buttonAdd-${product.id}`);
      buttonAdd.onclick = () => {
        addRemoveButton(objLocalStorage, product, "add");
      };
    }, 0);

    // boton delete
    setTimeout(() => {
      let buttonDelete = document.querySelector(`#buttonDelete-${product.id}`);
      buttonDelete.onclick = () => {
        addRemoveButton(objLocalStorage, product, "delete");
      };
    }, 0);

    asideBody.innerHTML += aside;
  });

  let asideFooter = `
      <div class="card-title text-center border border-success-subtle rounded mb-3">Total compra: $${totalCompra}</div>`;

  let finishBtn;
  if (totalCompra !== 0) {
    finishBtn = `
    <div class="card-title text-center text-bg-success border border-success-success rounded mb-3">
      <a class="nav-link" href="../pages/cart.html">Finalizar compra</a>
    </div>
    `;
  } else finishBtn = "";

  asideBody.innerHTML += asideFooter + finishBtn;
}

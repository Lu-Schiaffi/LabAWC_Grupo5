import { addRemoveButton } from "./addRemoveButton.js";
import { addToCart } from "./addToCart.js";
export function createAside(objLocalStorage) {
  let totalCompra = 0;
  // limpiar el aside cada vez que se llama la función
  let asideBody = document.querySelector("#aside-body");
  asideBody.innerHTML = "";

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

    asideBody.innerHTML += aside;
  });
  let asideFooter = `
  
    <div class="card-title text-center border border-success-subtle rounded mb-3">Total compra: $${totalCompra}</div>
    <div class="card-title text-center text-bg-success border border-success-success rounded mb-3">
      <a class="nav-link" href="../pages/cart.html">Finalizar compra</a>
      </div>
  `;
  asideBody.innerHTML += asideFooter;
}

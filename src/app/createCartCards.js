import { addRemoveButton } from "./addRemoveButton.js";

export function createCartCards(objLocalStorage) {
  let totalCompra = 0;
  // limpiar el container cada vez que se llama la función
  let cartBody = document.querySelector("#cart-card-template");
  cartBody.innerHTML = "<br>";

  objLocalStorage.map((product) => {
    let cartCard = `
    <div class="card m-3" style="max-height: 160px">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${product.image}" class="img-fluid rounded-start p-1 position-relative top-50 start-50 translate-middle"style="max-height: 140px" alt="${product.title}">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                      <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonLess-${product.id}-cart">-</button>
                      <span class="card-text"><small class="text-body-secondary fw-bolder">Cantidad:</small></span>
                      <span class="card-text"><small class="text-body-secondary">${product.quantity}</small></span>
                      <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonAdd-${product.id}-cart">+</button>
                      <button type="button" class = "btn btn-outline-dark text-bg-secondary" id="buttonDelete-${product.id}-cart">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                      </button>
                      
                      <span class="card-text position-relative top-100 start-50 translate-middle fw-bolder"><small class="text-body-secondary">Precio:</small></span>
                      <span class="card-text position-relative top-100 start-50 translate-middle"><small class="text-body-secondary">$${product.totalPrice}</small></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `;

    totalCompra += product.totalPrice;

    // boton menos
    setTimeout(() => {
      let buttonLess = document.querySelector(`#buttonLess-${product.id}-cart`);
      buttonLess.onclick = () => {
        addRemoveButton(objLocalStorage, product, "remove");
      };
    }, 0);

    // boton más
    setTimeout(() => {
      let buttonAdd = document.querySelector(`#buttonAdd-${product.id}-cart`);
      buttonAdd.onclick = () => {
        addRemoveButton(objLocalStorage, product, "add");
      };
    }, 0);

    // boton delete
    setTimeout(() => {
      let buttonDelete = document.querySelector(
        `#buttonDelete-${product.id}-cart`
      );
      buttonDelete.onclick = () => {
        addRemoveButton(objLocalStorage, product, "delete");
      };
    }, 0);

    cartBody.innerHTML += cartCard;
  });
  let cartBodyFooter = `

        <div class="card-title text-center border border-success-subtle rounded mb-3">Total compra: $${totalCompra}</div>
        
        <div class="row">
          <div class="col-12">
          <div class="row g-0">
            <div class="col-md-10">
            </div>
            <div class="col-md-2">
            <button type="button" class="container text-center text-bg-success border border-success-success rounded mb-3">Finalizar compra</button>
            </div>

            </div>

      `;
  cartBody.innerHTML += cartBodyFooter;
}

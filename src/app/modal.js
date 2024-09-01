import { addToCart } from "./addToCart.js";

export function createModal(product) {
  let modal = `        <div class="modal-dialog">
  <div class="modal-content bg-dark text-white">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body ">
    <div class="card text-bg-dark mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${product.image} class="img-fluid" alt=${product.title} />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text">${product.description}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div class="modal-footer">
      <button title = "Botón Cerrar" type="button" class="btn btn-secondary btn-sm mb-2 data-bs-toggle="modal" data-bs-dismiss="modal">Cerrar</button>
      <button title ="Botón Agregar al carrito" type="button" class="btn btn-primary btn-sm mb-2" id="btnAddCartModal-${product.id}">Agregar al carrito</button>    </div>
  </div>`;

  let modalContainer = document.querySelector("#detailsModal");
  modalContainer.innerHTML = modal;

  setTimeout(() => {
    let btnAddToCartModal = document.querySelector(
      `#btnAddCartModal-${product.id}`
    );
    btnAddToCartModal.onclick = () => {
      addToCart(product);
    };
  }, 0);

  const myModal = new bootstrap.Modal(modalContainer);
  myModal.show();
}

import { createAside } from "./aside.js";
import { toast } from "./toast.js";

export function addToCart(product) {
  // Guardar artículos actuales del localStorage en array
  let objLocalStorage = JSON.parse(localStorage.getItem("CardProducts"));
  // Buscar artículo en array
  let productExists = objLocalStorage.find(
    (productStorage) => productStorage.id == product.id
  );

  // si la variable es undefined, entonces da false el if
  // Si existe el producto: actualizar cantidad + buscar índice + actualizar array
  // Si no existe, se crea la prop. de quantity y se agrega el producto al array

  if (productExists) {
    productExists.quantity += 1;
    productExists.totalPrice = productExists.quantity * productExists.price;
    let index = objLocalStorage.findIndex(
      (productStorage) => productStorage.id == product.id
    );
    objLocalStorage[index] = productExists;
  } else {
    product.quantity = 1;
    product.totalPrice = product.quantity * product.price;
    objLocalStorage.push(product);
  }

  // Actualizar localStorage
  localStorage.setItem("CardProducts", JSON.stringify(objLocalStorage));

  // pasar info al Aside
  createAside(objLocalStorage);

  // Alerta
  toast("El producto se agregó correctamente", "light");
}

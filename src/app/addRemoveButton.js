import { createAside } from "./aside.js";
import { toast } from "./toast.js";

export function addRemoveButton(objLocalStorage, product, type) {
  // guardo index del producto
  let index = objLocalStorage.findIndex(
    (productStorage) => productStorage.id == product.id
  );

  // sumar o restar
  if (type == "add") product.quantity += 1;
  else if (type == "remove") product.quantity -= 1;

  // Actualizo info (si queda en cero, elimino el producto)
  if (product.quantity == 0) {
    objLocalStorage.splice(index, 1);
    toast("El producto se eliminó correctamente", "danger");
  } else {
    product.totalPrice = product.quantity * product.price;
    objLocalStorage[index] = product;
    toast("La cantidad se actualizó correctamente", "success");
  }
  localStorage.setItem("CardProducts", JSON.stringify(objLocalStorage));
  createAside(objLocalStorage);
}

export function addToCart(product) {
  product.quantity += 1;
  localStorage.setItem("CardProducts", JSON.stringify(product));
  // leer info del localStorage
  console.log(JSON.parse(localStorage.getItem("CardProducts")));
}

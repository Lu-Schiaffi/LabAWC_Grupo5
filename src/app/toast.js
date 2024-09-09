export function toast(message, type) {
  let toastBody = document.querySelector(".toast-container");
  toastBody.innerHTML = "";

  let toastHTML = `
    <div class="toast toast-header text-bg-${type} bg-dark>
    <div class="toast-body">${message}</div>
    </div>
    `;

  toastBody.innerHTML += toastHTML;

  let toast = document.querySelector(".toast");
  let toastBS = new bootstrap.Toast(toast);
  toastBS.show();
}

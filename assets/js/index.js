// payment modal----------------------------------------------------------------------------
const payment = document.querySelector("#payment");
const paymentOverlay = document.querySelector("#payment-overlay");

payment.addEventListener("click", () => {
  const body = document.querySelector("body");
  const modal = document.querySelector(".payment-modal");
  modal.classList.add("show");
  if (modal.classList.contains("show")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
});

paymentOverlay.addEventListener("click", () => {
  const body = document.querySelector("body");
  const modal = document.querySelector(".payment-modal");
  modal.classList.remove("show");
  if (modal.classList.contains("show")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
});

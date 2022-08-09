// Search bar-----------------------------------------------------------
const searchBtns = document.querySelector(".toggle");
const searchInput = document.querySelector("#search-input");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const clearSearch = document.querySelector(".fa-xmark");

searchInput.addEventListener("focus", () => {
  searchIcon.style.color = "#da2c18";
});

searchInput.addEventListener("blur", () => {
  searchIcon.style.color = "black";
});

clearSearch.addEventListener("click", () => {
  if (searchInput.value !== "") {
    searchInput.value = "";
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    searchBtns.classList.add("show");
  } else if (searchInput.value === "") {
    searchBtns.classList.remove("show");
  }
});

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

// section two------------------------------------------------------------------------------

const btns = document.querySelectorAll("#btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// footer ---------------------------------------------------------------------------------
// scroll to top---
const scrollTop = document.querySelector(".to-top");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// email input---
const emailInput = document.querySelector(".email");
const warnIcon = document.querySelector(".fa-triangle-exclamation");
const validRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mailBtn = document.querySelector(".mail-button");

emailInput.addEventListener("input", () => {
  if (emailInput.value.match(validRegex)) {
    mailBtn.style.backgroundColor = "#da2c18";
    warnIcon.classList.remove("show");
  } else {
    warnIcon.classList.remove("show");
    mailBtn.style.backgroundColor = "gray";
    warnIcon.classList.add("show");
  }
});

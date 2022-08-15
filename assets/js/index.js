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

// menu btn-------------------------------------------------------------------------------
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuModal = document.querySelector(".menu-modal");
const menuOverlay = document.querySelector("#menu-overlay");
const basketIco = document.querySelector("#basket");
const basketModal = document.querySelector(".basket-modal");
const basketOverlay = document.querySelector("#basket-modal");

menuBtn.addEventListener("click", () => {
  if (basketModal.classList.contains("show")) {
    basketModal.classList.remove("show");
    menuModal.classList.add("show");
    body.style.overflow = "hidden";
  } else {
    menuModal.classList.add("show");
    body.style.overflow = "hidden";
  }
});

menuOverlay.addEventListener("click", () => {
  menuModal.classList.remove("show");
  body.style.overflow = "auto";
});

// nav icons-------------------------------------------------------------------------------
// bucket

basketIco.addEventListener("mouseenter", () => {
  if (menuModal.classList.contains("show")) {
    menuModal.classList.remove("show");
    basketModal.classList.add("show");
    body.style.overflow = "hidden";
  } else {
    basketModal.classList.add("show");
    body.style.overflow = "hidden";
  }
});

basketOverlay.addEventListener("click", () => {
  basketModal.classList.remove("show");
  body.style.overflow = "auto";
});

// payment modal----------------------------------------------------------------------------
const payment = document.querySelector("#payment");
const paymentOverlay = document.querySelector("#payment-overlay");
const modal = document.querySelector(".payment-modal");

payment.addEventListener("click", () => {
  modal.classList.add("show");
  body.style.overflow = "hidden";
});

paymentOverlay.addEventListener("click", () => {
  modal.classList.remove("show");
  body.style.overflow = "auto";
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

// sale offer cards-----------------------------------------------------------------------

const offerCardWrapperTop = document.querySelector(".cards-upper");

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
const mailOverlay = document.querySelector("#mail-overlay");
const subModal = document.querySelector(".sub-modal");
const emailInput = document.querySelector(".email");
const warnIcon = document.querySelector(".fa-triangle-exclamation");
const tickIcon = document.querySelector(".fa-check");
const validRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mailBtn = document.querySelector(".mail-button");

emailInput.addEventListener("input", () => {
  if (emailInput.value.match(validRegex)) {
    mailBtn.style.backgroundColor = "#da2c18";
    mailBtn.style.cursor = "pointer";
    warnIcon.classList.remove("show");
    tickIcon.classList.add("show");
    // button click
    mailBtn.addEventListener(
      "click",
      () => {
        emailInput.value = "";
        tickIcon.classList.remove("show");
        subModal.classList.add("show");
        body.style.overflow = "hidden";
        mailBtn.style.backgroundColor = "gray";
        mailBtn.style.cursor = "default";
      },
      { once: true }
    );
  } else {
    mailBtn.style.backgroundColor = "gray";
    warnIcon.classList.add("show");
    tickIcon.classList.remove("show");
  }
});

mailOverlay.addEventListener("click", () => {
  subModal.classList.remove("show");
  body.style.overflow = "auto";
});

// products-----------

const saleCards = document.querySelector("#sale-cards");
// render products
function renderSaleProducts() {
  saleProducts.forEach((product) => {
    saleCards.innerHTML += `
      <div class="card-wrapper">
              <div class="card">
                <div class="wrap-outer">
                  <div class="wrap-inner">
                    <div class="img">
                      <a href="#">
                        <img
                          src="${product.imgSrc}"
                        />
                      </a>
                    </div>
                    <div class="name">
                      <a class="product-name" href="#" target="_blank">${product.name}</a>
                    </div>
                    <div class="prices">
                      <div class="price-small">
                        <h4>${product.prevPrice}<sup>99</sup><span>₼</span></h4>
                      </div>
                      <div class="offer-price">
                        <h4>${product.price}<sup>99</sup><span>₼</span></h4>
                      </div>
                    </div>
                    <button class="add-to-card">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <span>Səbətə əlavə et</span>
                    </button>
                    <div class="hoverable">
                      <div class="button-wrapper">
                        <button class="heart">
                          <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="compare">
                          <i class="fa-solid fa-scale-balanced"></i>
                        </button>
                        <button class="like">
                          <i class="fa-solid fa-thumbs-up"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  });
}

renderSaleProducts();

// load more btn---------------------------

let loadMoreBtn = document.querySelector(".load-more");
let currentItem = 4;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".cards .card-wrapper")];

  for (let i = currentItem; i < currentItem + 4; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 4;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

"use strict";
// bottom nav search button
const searchToggle = document.querySelector(".search-toggle");
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", () => {
  searchToggle.classList.toggle("toggle");
});
// responsive menu
const body = document.querySelector("body");
const resMenu = document.querySelector(".res-menu");
const resMenuWrap = document.querySelector(".res-menu-wrapper");
const category = resMenu.querySelectorAll(".category");
const resMenuBtn = document.querySelector(".menu-btn-responsive");
const resMenuOverlay = document.querySelector("#res-menu-overlay");
const menuCloseBtn = document.querySelector(".menu-close");
const allMenu = document.querySelector(".all-categories");
const categoryWrap = document.querySelector(".category-wrap");

resMenuBtn.addEventListener("click", () => {
  resMenu.style.transform = "translateX(0)";
  body.style.overflow = "hidden";
});

function resMenuClose() {
  resMenu.style.transform = "translateX(-100%)";

  body.style.overflow = "auto";
}
resMenuOverlay.addEventListener("click", resMenuClose);
menuCloseBtn.addEventListener("click", resMenuClose);

allMenu.addEventListener("click", () => {
  categoryWrap.classList.toggle("show");
});

for (let i = 0; i < category.length; i++) {
  const element = category[i];
  const categoryBtn = element.querySelector(".category-btn");
  const subCategoryBox = element.querySelector(".sub-category-box");
  const subCategory = element.querySelectorAll(".sub-category");
  categoryBtn.addEventListener("click", () => {
    subCategoryBox.classList.toggle("show");
  });
  for (let i = 0; i < subCategory.length; i++) {
    const item = subCategory[i];
    const subCategoryBtn = item.querySelector(".sub-category-btn");
    const subCategoryCard = item.querySelector(".sub-category-cards");
    subCategoryBtn.addEventListener("click", () => {
      subCategoryCard.classList.toggle("show");
    });
  }
}
// Search bar-----------------------------------------------------------
const searchBtns = document.querySelector(".toggle");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const clearSearch = document.querySelector(".fa-xmark");
const searchInputRes = document.querySelector(".search-input-res");
const searchIconRes = document.querySelector(".search-res");
const clearSearchRes = document.querySelector(".clear-res");
const searchBtnsRes = document.querySelector(".toggle-res");

searchInput.addEventListener("focus", () => {
  searchIcon.style.color = "#da2c18";
});

searchInput.addEventListener("blur", () => {
  searchIcon.style.color = "black";
});

clearSearch.addEventListener("click", () => {
  if (searchInput.value !== "") {
    searchInput.value = "";
    searchBtns.classList.remove("show");
  }
});

// responsive

searchInputRes.addEventListener("input", () => {
  if (searchInputRes.value !== "") {
    searchBtnsRes.classList.add("show");
  } else if (searchInputRes.value === "") {
    searchBtnsRes.classList.remove("show");
  }
});

searchInputRes.addEventListener("focus", () => {
  searchIconRes.style.color = "#da2c18";
});

searchInputRes.addEventListener("blur", () => {
  searchIconRes.style.color = "black";
});

clearSearchRes.addEventListener("click", () => {
  if (searchInputRes.value !== "") {
    searchInputRes.value = "";
    searchBtnsRes.classList.remove("show");
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
const menuBtn = document.querySelector(".menu-btn");
const menuModal = document.querySelector(".menu-modal");
const menuOverlay = document.querySelector("#menu-overlay");
const basketIco = document.querySelector(".basket");
const basketModal = document.querySelector(".basket-modal");
const emptyBasket = document.querySelector(".empty-basket");
const fullBasket = document.querySelector(".full-basket");
const orderPageBtn = document.querySelector(".order-btns");
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

const filters = document.querySelectorAll(".filter");

for (let i = 0; i < filters.length; i++) {
  const element = filters[i];
  const filterOpenBtn = element.querySelector("button");
  const filterUlWrap = element.querySelector(".ul-wrapper");

  filterOpenBtn.addEventListener("click", () => {
    filterUlWrap.classList.toggle("show");
  });
}

// filter modal
const openFilter = document.querySelector(".filter-open");
const filterOverlay = document.querySelector("#filter-overlay");
const filterWrapper = document.querySelector(".filter-wrapper");
const filterModal = document.querySelector(".filter-modal");

openFilter.addEventListener("click", () => {
  // filterModal.style.transform = "translateX(0)"
  filterModal.classList.add("show");
  body.style.overflow = "hidden";
});

function filterClose() {
  // filterModal.style.transform = "translateX(-100%)"
  filterModal.classList.remove("show");
  body.style.overflow = "auto";
}
filterOverlay.addEventListener("click", filterClose);

// pagination and rendering

const productWrapper = document.querySelector(".product-wrapper");
const pagination = document.querySelector(".pagination");

let currentPage = 1;
let cards = 12;

function displayList(items, wrapper, itemsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  let start = itemsPerPage * page;
  let end = start + itemsPerPage;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];
    // const element = array[i];
    productWrapper.innerHTML += `
        <div class="card-wrapper">
                <div class="card">
                  <div class="wrap-outer">
                    <div class="wrap-inner">
                      <div class="img">
                        <a href="./singleProduct.html">
                          <img
                            src="${item.imgSrc}"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a class="product-name" href="#" target="_blank">${
                          item.name
                        }</a>
                      </div>
                      <div class="prices">
                        <div class="offer-price">
                          <h4>${Math.trunc(
                            item.price
                          )}.<sup>99</sup><span>₼</span></h4>
                        </div>
                        <h6 class="percent">0₼.0%.12ay</h6>
                      </div>
                      <button class="add-to-card" onclick="addToCard(${
                        item.id
                      })">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Səbətə əlavə et</span>
                      </button>
                      <div class="hoverable">
                        <div class="button-wrapper">
                          <button class="heart" onclick="addToWish(${item.id})">
                          <img class="svg wish-${
                            item.id
                          }" src="./assets/images/menu icons/heart-icon.svg" alt="icon">
                          </button>
                          <button class="compare" onclick="addToCompare(${
                            item.id
                          })">
                          <img class="svg compare-${
                            item.id
                          }" src="./assets/images/menu icons/scale.png" alt="icon">
                          </button>
                          <button class="like" onclick="like(${
                            item.id
                          })">
                          <img id="" class="svg like-${
                            item.id
                          }" src="./assets/images/menu icons/like.png" alt="icon">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }
}

function like(id) {
    const item = phones.find((product) => product.id === id);
    const likeSvg = document.querySelector(`.like-${item.id}`);
    if(!likeSvg.classList.contains("filled")){
      likeSvg.src = "./assets/images/menu icons/like-filled.png";
      likeSvg.classList.add("filled")
    } else {
      likeSvg.src = "./assets/images/menu icons/like.png";
      likeSvg.classList.remove("filled")
    }
  }

function setupPagination(items, wrapper, itemsPerPage) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (currentPage === page) {
    button.classList.add("active-pagination");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    displayList(items, productWrapper, cards, currentPage);
    window.scrollTo({
      top: 0,
      left: 0,
    });
    let currentBtn = document.querySelector(
      ".pagination button.active-pagination"
    );
    currentBtn.classList.remove("active-pagination");

    button.classList.add("active-pagination");
  });

  return button;
}

displayList(phones, productWrapper, cards, currentPage);
setupPagination(phones, pagination, cards);

// add to 's
// products-----------

const saleCards = document.querySelector("#sale-cards");
const basketCardsEl = document.querySelector(".full-basket");
const totalItemsEl = document.querySelector(".number-products");
const totalPriceEl = document.querySelector("#total-price");
const numberOnIcon = document.querySelectorAll(".number-of-items");
const numberOnIconHeart = document.querySelector(".number-of-items-heart");
const numberOnIconCompare = document.querySelector(".number-of-items-scale");

// item card
let card = JSON.parse(localStorage.getItem("CARD")) || [];
updateCard();

let likeCard = JSON.parse(localStorage.getItem("WISH")) || [];
updateWishList();

let compareCard = JSON.parse(localStorage.getItem("COMPARE")) || [];
updateCompare();

// add to card func
function addToCard(id) {
  // check if product already exist in card
  if (card.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = phones.find((product) => product.id === id);
    card.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCard();
}

// add to wish func
function addToWish(id) {
  // check if product already exist in card
  if (likeCard.some((item) => item.id === id)) {
    likeCard = likeCard.filter((item) => item.id !== id);
    const item = phones.find((product) => product.id === id);
    const wishSvg = document.querySelector(`.wish-${item.id}`);
    wishSvg.src = "./assets/images/menu icons/heart-icon.svg";
  } else {
    const item = phones.find((product) => product.id === id);
    const wishSvg = document.querySelector(`.wish-${item.id}`);
    wishSvg.src = "./assets/images/menu icons/heart-icon-filled.svg";
    likeCard.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateWishList();
}

function updateWishList() {
  WishTotal();
  localStorage.setItem("WISH", JSON.stringify(likeCard));
}

function WishTotal() {
  let totalItems = 0;
  likeCard.forEach((item) => {
    totalItems += item.numberOfUnits;
  });
  if (totalItems === 0) {
    numberOnIconHeart.innerHTML = "";
  } else {
    numberOnIconHeart.innerHTML = `${totalItems}`;
  }
}

// add to compare func

function addToCompare(id) {
  if (compareCard.some((item) => item.id === id)) {
    compareCard = compareCard.filter((item) => item.id !== id);
    const item = phones.find((product) => product.id === id);
    let scaleSvg = document.querySelector(`.compare-${item.id}`);
    scaleSvg.src = "./assets/images/menu icons/scale.png";

  } else {
    const item = phones.find((product) => product.id === id);
    let scaleSvg = document.querySelector(`.compare-${item.id}`);
    scaleSvg.src = "./assets/images/menu icons/scale-filled.png";
    compareCard.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCompare();
}

function updateCompare() {
  compareTotal();
  localStorage.setItem("COMPARE", JSON.stringify(compareCard));
}

function compareTotal() {
  let totalItems = 0;
  compareCard.forEach((item) => {
    totalItems += item.numberOfUnits;
  });
  totalItemsEl.innerHTML = `${totalItems}`;
  if (totalItems === 0) {
    numberOnIconCompare.innerHTML = "";
  } else {
    numberOnIconCompare.innerHTML = `${totalItems}`;
  }
}

// update card func
function updateCard() {
  renderBasketCardItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CARD", JSON.stringify(card));
}

// render basket card
function renderBasketCardItems() {
  basketCardsEl.innerHTML = "";
  card.forEach((item) => {
    basketCardsEl.innerHTML += `   
    <div class="basket-card">
    <button class="remove-card" onclick="removeItemFromCart(${
      item.id
    })"><i class="fa-solid fa-xmark"></i></button>
    <div class="product-details">
      <div class="img">
        <img src="${item.imgSrc}" alt="product">
      </div>
      <div class="img-details">
        <a href="#" target="_blank" class="p-name">${item.name}</a>
        <div class="count-price">
          <div class="count">
            <button class="minus-btn" onclick="changeNumberOfUnits('minus', ${
              item.id
            })"><i class="fa-solid fa-minus"></i></button>
            <span>${item.numberOfUnits}</span>
            <button class="plus-btn" onclick="changeNumberOfUnits('plus', ${
              item.id
            })"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div class="price">
            <h5>${Math.trunc(item.price)}.<sup>99</sup><span>₼</span></h5>
          </div> 
        </div>
      </div>
    </div>
  </div>
    `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  card = card.filter((item) => item.id !== id);

  updateCard();
}

// change number of units
function changeNumberOfUnits(action, id) {
  card = card.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.inStock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits: numberOfUnits,
    };
  });
  updateCard();
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  card.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  totalPriceEl.innerHTML = `${totalPrice.toFixed(2)}₼`;
  totalItemsEl.innerHTML = `${totalItems}`;
  numberOnIcon.forEach((icon) => {
    if (totalItems === 0) {
      icon.innerHTML = "";
    } else {
      icon.innerHTML = `${totalItems}`;
    }
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

axios.get("http://localhost:9000/get-data").then((res) => {
  console.log(res.data.data);
  for (let i = 0; i < res.data.data.length; i++) {
    const element = res.data.data[i];
    const arr = {
      name: element.name,
      price: element.price,
      imgSrc: element.url,
    };
    phones.push(arr);
    console.log(element.url);
    console.log(phones);
  }
});

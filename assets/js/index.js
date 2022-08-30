"use strict";
// responsive menu
const body = document.querySelector("body");
const resMenu = document.querySelector(".res-menu")
const resMenuWrap = document.querySelector(".res-menu-wrapper")
const category = resMenu.querySelectorAll(".category");
const resMenuBtn = document.querySelector(".menu-btn-responsive")
const resMenuOverlay = document.querySelector("#res-menu-overlay")
const menuCloseBtn = document.querySelector(".menu-close")
const allMenu = document.querySelector(".all-categories")
const categoryWrap = document.querySelector(".category-wrap")


resMenuBtn.addEventListener("click", () => {
    resMenu.style.transform = "translateX(0)"
    body.style.overflow = "hidden";
});

function resMenuClose() {
    resMenu.style.transform = "translateX(-100%)"

    body.style.overflow = "auto";

}
resMenuOverlay.addEventListener("click", resMenuClose);
menuCloseBtn.addEventListener("click", resMenuClose)

allMenu.addEventListener("click", () => {
    categoryWrap.classList.toggle("show")
})

for (let i = 0; i < category.length; i++) {
    const element = category[i];
    const categoryBtn = element.querySelector(".category-btn");
    const subCategoryBox = element.querySelector(".sub-category-box")
    const subCategory = element.querySelectorAll(".sub-category")
    categoryBtn.addEventListener("click", () => {
        subCategoryBox.classList.toggle("show")
    })
    for (let i = 0; i < subCategory.length; i++) {
        const item = subCategory[i];
        const subCategoryBtn = item.querySelector(".sub-category-btn")
        const subCategoryCard = item.querySelector(".sub-category-cards")
        subCategoryBtn.addEventListener("click", () => {
            subCategoryCard.classList.toggle("show")
        })

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
const basketIcos = document.querySelectorAll(".basket");
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

for (let i = 0; i < basketIcos.length; i++) {
    const basketIco = basketIcos[i];
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

}

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
    btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

// footer ---------------------------------------------------------------------------------
// scroll to top---
const scrollTop = document.querySelector(".to-top");
scrollTop.addEventListener("click", function() {
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
            }, { once: true }
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

// tab js
const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        target.classList.add("active")
    })
})

const tabTop = document.querySelector("#top-tab")
const tabPhones = document.querySelector("#tab-phones")

function tabRender(card, product) {
    product.forEach((product) => {
        card.innerHTML += `
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
                      <a class="product-name" href="#" target="_blank">${
                        product.name
                      }</a>
                    </div>
                    <div class="prices">
                      <div class="offer-price">
                        <h4>${Math.trunc(
                          product.price
                        )}.<sup>99</sup><span>₼</span></h4>
                      </div>
                      <h6 class="percent">0₼.0%.12ay</h6>
                    </div>
                    <button class="add-to-card" onclick="addToCardTab(${
                      product.id
                    })">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <span>Səbətə əlavə et</span>
                    </button>
                    <div class="hoverable">
                      <div class="button-wrapper">
                        <button class="heart" onclick="addToWishTab(${
                          product.id
                        })">
                        <img class="wish ${
                          product.id
                        }" src="./assets/images/menu icons/heart-icon.svg" alt="icon">
                        </button>
                        <button class="compare" onclick="addToCompareTab(${
                          product.id
                        })">
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

tabRender(tabTop, topTwenty)
tabRender(tabPhones, phones)

function addToCardTab(id) {
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

function addToWishTab(id) {
    // check if product already exist in card
    if (likeCard.some((item) => item.id === id)) {
        likeCard = likeCard.filter((item) => item.id !== id);
    } else {
        const item = phones.find((product) => product.id === id);
        likeCard.push({
            ...item,
            numberOfUnits: 1,
        });
    }
    updateWishList();
}

function addToCompareTab(id) {
    if (compareCard.some((item) => item.id === id)) {
        compareCard = compareCard.filter((item) => item.id !== id);
    } else {
        const item = phones.find((product) => product.id === id);
        compareCard.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCompare();
}

// products-----------

const saleCards = document.querySelector("#sale-cards");
const basketCardsEl = document.querySelector(".full-basket");
const totalItemsEl = document.querySelector(".number-products");
const totalPriceEl = document.querySelector("#total-price");
const numberOnIcon = document.querySelector(".number-of-items");
const numberOnIconHeart = document.querySelector(".number-of-items-heart");
const numberOnIconCompare = document.querySelector(".number-of-items-scale");

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
                      <a class="product-name" href="#" target="_blank">${
                        product.name
                      }</a>
                    </div>
                    <div class="prices">
                      <div class="price-small">
                        <del><h4>${
                          product.prevPrice
                        }.<sup>99</sup><span>₼</span></h4></del>
                      </div>
                      <div class="offer-price">
                        <h4>${Math.trunc(
                          product.price
                        )}.<sup>99</sup><span>₼</span></h4>
                      </div>
                      <h6 class="percent">0₼.0%.12ay</h6>
                    </div>
                    <button class="add-to-card" onclick="addToCard(${
                      product.id
                    })">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <span>Səbətə əlavə et</span>
                    </button>
                    <div class="hoverable">
                      <div class="button-wrapper">
                        <button class="heart" onclick="addToWish(${
                          product.id
                        })">
                        <img class="wish ${
                          product.id
                        }" src="./assets/images/menu icons/heart-icon.svg" alt="icon">
                        </button>
                        <button class="compare" onclick="addToCompare(${
                          product.id
                        })">
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
        const item = saleProducts.find((product) => product.id === id);
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
    } else {
        const item = saleProducts.find((product) => product.id === id);
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
    } else {
        const item = saleProducts.find((product) => product.id === id);
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
    if (totalItems === 0) {
        numberOnIcon.innerHTML = "";
    } else {
        numberOnIcon.innerHTML = `${totalItems}`;
    }
}

// load more btn-----------------------------------------
const loadMoreBtn = document.querySelector(".load-more");
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
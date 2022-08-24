"use strict";
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
        searchBtns.classList.remove("show");
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
const catalogBtn = document.querySelector(".catalogue");
const menuModal = document.querySelector(".menu-modal");
const menuOverlay = document.querySelector("#menu-overlay");
const basketIco = document.querySelector("#basket");
const basketModal = document.querySelector(".basket-modal");
const emptyBasket = document.querySelector(".empty-basket");
const fullBasket = document.querySelector(".full-basket");
const orderPageBtn = document.querySelector(".order-btns");
const basketOverlay = document.querySelector("#basket-modal");

catalogBtn.addEventListener("click", () => {
    menuModal.classList.add("show");
    body.style.overflow = "hidden";
})


menuBtn.addEventListener("click", () => {
    menuModal.classList.add("show");
    body.style.overflow = "hidden";
});

menuOverlay.addEventListener("click", () => {
    menuModal.classList.remove("show");
    body.style.overflow = "auto";
});


// add to card
const saleCards = document.querySelector("#sale-cards");
const basketListEl = document.querySelector(".bucket-list");
const totalItemsEl = document.querySelector(".total-items");
const totalPriceEl = document.querySelector("#total-price");
const numberOnIcon = document.querySelector(".number-of-items");
const numberOnIconHeart = document.querySelector(".number-of-items-heart");
const numberOnIconCompare = document.querySelector(".number-of-items-scale");
const removeAll = document.querySelector(".remove-all");
const itemListEl = document.querySelector(".list");
const fullBucket = document.querySelector(".bucket-products");
const emptyBucket = document.querySelector(".empty-bucket");

// item card
// item card
let card = JSON.parse(localStorage.getItem("CARD")) || [];
updateCard();

let likeCard = JSON.parse(localStorage.getItem("WISH")) || [];
updateWishList();

let compareCard = JSON.parse(localStorage.getItem("COMPARE")) || [];
updateCompare();

if (card.length === 0) {
    fullBucket.classList.add("hide");
    emptyBucket.classList.add("active");
} else if (card.length > 0) {
    fullBucket.classList.add("active");
    emptyBucket.classList.add("hide");
}

// update card func
function updateCard() {
    renderListItems();
    renderBasketListItems();
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CARD", JSON.stringify(card));
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


function updateCompare() {
    compareTotal();
    localStorage.setItem("COMPARE", JSON.stringify(compareCard));
}

function compareTotal() {
    let totalItems = 0;
    compareCard.forEach((item) => {
        totalItems += item.numberOfUnits;
    });
    if (totalItems === 0) {
        numberOnIconCompare.innerHTML = "";
    } else {
        numberOnIconCompare.innerHTML = `${totalItems}`;
    }
}

// render list items
function renderListItems() {
    itemListEl.innerHTML = "";
    card.forEach((item) => {
        itemListEl.innerHTML += `
    <div class="item">
    <div class="current">
      <h4>${item.name}</h4>
      <span>${Math.trunc(item.price)}.<sup>99</sup>₼</span>
    </div>
    `;
    });
}

// render basket card
function renderBasketListItems() {
    basketListEl.innerHTML = "";
    card.forEach((item) => {
        basketListEl.innerHTML += `
    <div class="card">
    <div class="img">
      <img src="${item.imgSrc}" alt="product">
    </div>
    <div class="product-details">
      <div class="name">
        <div class="name-stars">
          <a href="#">${item.name}</a>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>0 rəy</span>
        </div>
        </div>
        <div class="remove-btn">
          <button onclick="removeItemFromCart(${
            item.id
          })"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
      <div class="price-and-count">
        <div class="price">
          <span>Qiymət:</span>
          <h3>${Math.trunc(item.price)}.<sup>99</sup>₼</h3>
        </div>
        <div class="quantity">
          <span>Say:</span>
          <div class="count">
            <button class="minus-btn"><i class="fa-solid fa-minus" onclick="changeNumberOfUnits('minus', ${
              item.id
            })"></i></button>
            <span>${item.numberOfUnits}</span>
            <button class="plus-btn"><i class="fa-solid fa-plus" onclick="changeNumberOfUnits('plus', ${
              item.id
            })"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    });
}

// remove item from cart
function removeItemFromCart(id) {
    card = card.filter((item) => item.id !== id);

    updateCard();
}

// remove all
removeAll.addEventListener("click", () => {
    card = [];

    updateCard();
});

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
    totalItemsEl.innerHTML = `(${totalItems} əd)`;
    if (totalItems === 0) {
        numberOnIcon.innerHTML = "";
    } else {
        numberOnIcon.innerHTML = `${totalItems}`;
    }
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
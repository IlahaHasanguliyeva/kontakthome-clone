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

// add to card
const wishList = document.querySelector(".wished-products");
const basketListEl = document.querySelector(".bucket-list");
const totalItemsEl = document.querySelector(".number-products");
const totalPriceEl = document.querySelector("#total-price");
const numberOnIcon = document.querySelectorAll(".number-of-items");
const numberOnIconHeart = document.querySelector(".number-of-items-heart");
const numberOnIconCompare = document.querySelector(".number-of-items-scale");
const removeAll = document.querySelector(".remove-all");
const itemListEl = document.querySelector(".list");
const fullWish = document.querySelector(".full-wish");
const emptyWish = document.querySelector(".empty-wish");
const basketCardsEl = document.querySelector(".full-basket")

// item cards
let card = JSON.parse(localStorage.getItem("CARD")) || [];
updateCard();

let likeCard = JSON.parse(localStorage.getItem("WISH")) || [];
updateWishList();

let compareCard = JSON.parse(localStorage.getItem("COMPARE")) || [];
updateCompare();

// update card func
function updateCard() {
    renderBasketCardItems();
    renderSubtotal();
    // save cart to local storage
    localStorage.setItem("CARD", JSON.stringify(card));
}

// add to wish func
function addToWish(id) {
    // check if product already exist in card
    if (likeCard.some((item) => item.id === id)) {
        likeCard = likeCard.filter((item) => item.id !== id);
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
    numberOnIcon.forEach(icon => {
        if (totalItems === 0) {
            icon.innerHTML = "";
        } else {
            icon.innerHTML = `${totalItems}`;
        }
    })
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

// remove item from cart
function removeItemFromCart(id) {
    card = card.filter((item) => item.id !== id);

    updateCard();
}


// bottom nav search button
const searchToggle = document.querySelector(".search-toggle")
const searchBtn = document.querySelector(".search-button")

searchBtn.addEventListener("click", () => {
        searchToggle.classList.toggle("toggle")
    })
    // img changing
const smallImgs = document.querySelectorAll(".img-small")
const bigImg = document.querySelector(".img-big")


for (let i = 0; i < smallImgs.length; i++) {
    const smallImg = smallImgs[i];

    function imgChange() {
        bigImg.src = smallImg.src
    }
    smallImg.addEventListener("click", imgChange)
}

// calculator - range
const calculator = document.querySelector("#calculator");
const monthlyPrice = document.querySelector("#monthly-price");
const percentage = document.querySelector(".zero");
monthlyPrice.innerHTML = `${Math.ceil(2190 / 12)} ₼`;
calculator.addEventListener("input", () => {
        if (calculator.value == 6) {
            monthlyPrice.innerHTML = `${2190 / 6} ₼`;
            percentage.style.display = "block"
        } else if (calculator.value == 9) {
            monthlyPrice.innerHTML = `${Math.ceil(2190 / 9)} ₼`;
            percentage.style.display = "block"
        } else if (calculator.value == 12) {
            monthlyPrice.innerHTML = `${Math.ceil(2190 / 12)} ₼`;
            percentage.style.display = "block"
        } else if (calculator.value == 15) {
            monthlyPrice.innerHTML = `${Math.ceil(2190 / 15)} ₼`;
            percentage.style.display = "none"
        } else if (calculator.value == 18) {
            monthlyPrice.innerHTML = `${Math.ceil(2190 / 18)} ₼`;
            percentage.style.display = "none"

        }
    })
    // tab js
const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")
        target.classList.add("active")
    })
})
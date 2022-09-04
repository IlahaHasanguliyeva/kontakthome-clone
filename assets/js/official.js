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
    menuModal.classList.add("show");
    body.style.overflow = "hidden";
});

menuOverlay.addEventListener("click", () => {
    menuModal.classList.remove("show");
    body.style.overflow = "auto";
});

// details animation
class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.content = el.querySelector('.content');

        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';
        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}

document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
});

// add to card
const saleCards = document.querySelector("#sale-cards");
const basketListEl = document.querySelector(".bucket-list");
const totalItemsEl = document.querySelector(".total-items");
const totalPriceEl = document.querySelector("#total-price");
const numberOnIcon = document.querySelectorAll(".number-of-items");
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

// update card func
function updateCard() {
    renderListItems();
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
    totalItemsEl.innerHTML = `(${totalItems} əd)`;
    numberOnIcon.forEach(icon => {
        if (totalItems === 0) {
            icon.innerHTML = "";
        } else {
            icon.innerHTML = `${totalItems}`;
        }
    })
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

// form
const errorName = document.querySelector(".msg-name");
const errorSurname = document.querySelector(".msg-surname");
const errorFName = document.querySelector(".msg-f-name");
const errorTel = document.querySelector(".msg-tel");
const nameInput = document.querySelector("#name");
const FnameInput = document.querySelector("#father-name");
const surnameInput = document.querySelector("#surname");
const telInput = document.querySelector("#tel");
const submitBtns = document.querySelectorAll(".order")

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
    });
}


nameInput.addEventListener("input", () => {
    if (nameInput.value !== "")
        document.querySelector(".name").classList.remove("show");
})

FnameInput.addEventListener("input", () => {
    if (FnameInput.value !== "")
        document.querySelector(".f-name").classList.remove("show");
})

surnameInput.addEventListener("input", () => {
    if (surnameInput.value !== "")
        document.querySelector(".surname").classList.remove("show");
})

surnameInput.addEventListener("input", () => {
    if (surnameInput.value !== "")
        document.querySelector(".surname").classList.remove("show");
})

for (let i = 0; i < submitBtns.length; i++) {
    const submitBtn = submitBtns[i];
    submitBtn.addEventListener("click", (e) => {
        let name = nameInput.value;
        // let email = emailInputForm.value;
        // let password = passwordInput.value;
        if (nameInput.value === "") {
            errorName.textContent = `Bu sahə tələb olunur`;
            document.querySelector(".name").classList.add("show");
            scrollToTop()
            e.preventDefault();
        }
        if (FnameInput.value === "") {
            errorFName.textContent = `Bu sahə tələb olunur`;
            document.querySelector(".f-name").classList.add("show");
            scrollToTop()
            e.preventDefault();
        }
        if (surnameInput.value === "") {
            errorSurname.textContent = `Bu sahə tələb olunur`;
            document.querySelector(".surname").classList.add("show");
            scrollToTop()
            e.preventDefault();
        }
        if (telInput.value === "") {
            errorTel.textContent = `Zəhmət olmasa mobil telefonu düzgün formada daxil edin`;
            document.querySelector(".tel").classList.add("show");
            scrollToTop()
            e.preventDefault();
        }
    });
}
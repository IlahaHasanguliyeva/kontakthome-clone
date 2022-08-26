const filters = document.querySelectorAll(".filter")

for (let i = 0; i < filters.length; i++) {
    const element = filters[i];
    const filterOpenBtn = element.querySelector("button")
    const filterUlWrap = element.querySelector(".ul-wrapper")

    filterOpenBtn.addEventListener("click", () => {
        filterUlWrap.classList.toggle("show")
    })
}


const productWrapper = document.querySelector(".product-wrapper");

function renderProduct() {
    phones.forEach((product) => {
        productWrapper.innerHTML += `
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
renderProduct()
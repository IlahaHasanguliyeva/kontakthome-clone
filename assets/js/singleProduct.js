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
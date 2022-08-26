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
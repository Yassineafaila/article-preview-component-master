const share = document.querySelector(".share__icon");
const boxicons = document.getElementById("icons");
share.addEventListener("click", function () {
    boxicons.classList.toggle("visible")
})
const allBtns = document.querySelectorAll(".btnn");
const submitBtn = document.getElementById("submit-btn-el");
const closeBtn = document.getElementById("close-btn");
const ratingEl = document.getElementById("ratings")
const modalEl = document.getElementById("modal");
const container = document.getElementById("container");
const rating = document.getElementById("ratings");


submitBtn.addEventListener('click', subBtnFun)

function subBtnFun() {
    container.classList.remove("hidden");
}


closeBtn.addEventListener('click', () => {
    container.classList.add("hidden");
})

allBtns.forEach((allBtn) => {
    allBtn.addEventListener('click', () => {
        rating.innerHTML = allBtn.innerHTML
    })
})
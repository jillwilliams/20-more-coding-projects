const openModalBtnEl = document.querySelector("#openModal")
const modalEl = document.querySelector(".modal")
const modalContentEl  = modalEl.querySelector(".modal-content")


openModalBtnEl.addEventListener("click", () => {
    modalEl.classList.add("open")

})

modalContentEl.addEventListener("click", () => {
    modalEl.classList.remove("open")
})



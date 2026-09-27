const addButtonEl = document.getElementById("counterAdd")
const subtractButtonEl = document.getElementById("counterSub")
const counterDisplayEl = document.getElementById("counterDisplay")
const resetBtnEl = document.getElementById("reset")

let total = 0

const updateCounterDisplay = () => {
    counterDisplayEl.innerText = total 
} 


addButtonEl.addEventListener("click", () => {
    total++
    updateCounterDisplay()
})

subtractButtonEl.addEventListener("click", () => {
    total--
    updateCounterDisplay()
})

resetBtnEl.addEventListener("click", () => {
    counterDisplayEl.innerText = 0
})
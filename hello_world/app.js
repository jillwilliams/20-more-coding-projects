const buttonEl = document.querySelector("button")
const spanEl = document.querySelector("span")


buttonEl.addEventListener("click", () => {
    const yourName = prompt("Please enter your name")
    spanEl.innerText = yourName

})
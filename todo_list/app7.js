const input = document.getElementById("input-item")
const buttonEl = document.getElementById("add-item")
const itemsDiv = document.getElementById("items")
const storageKey = "items"
let items = []


function renderItems() {
    itemsDiv.innerText = null

    for (const[index,item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "15px"

        text.innerText = item

        const button = document.createElement("button")
        button.innerText = "Delete"
        button.onclick = () => removeItem(index)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    const value = input.value
    if (!value) {
        alert("Please enter an item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(index) {
    items.splice(index, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)

buttonEl.addEventListener("click", addItem)
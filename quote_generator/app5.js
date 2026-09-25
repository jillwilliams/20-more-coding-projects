const outputEl = document.getElementById("output")
const buttonEl = document.getElementById("button")
const quotes = ["You are doing awesome", "Keep up the hard work",  "blah blah blah"]
const usedIndexes = new Set()
const quoteEl = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIndex)) continue

        const quote = quotes[randomIndex]
        quoteEl.innerText = quote
        usedIndexes.add(randomIndex)
        break
    }
}

buttonEl.addEventListener("click", generateQuote)

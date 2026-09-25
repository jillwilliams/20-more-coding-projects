const timeEl = document.getElementById("time")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
let secondsElapsed = 0
let interval = null


function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    timeEl.innerText = `${padStart(minutes)}:${padStart(seconds)}`
}

function timer() {
    secondsElapsed++
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0
    setTime()
}


startEl.addEventListener("click", startClock)
stopEl.addEventListener("click", stopClock)
resetEl.addEventListener("click", resetClock)


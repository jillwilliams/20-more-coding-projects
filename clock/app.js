const hourEl = document.querySelector(".hour")
const minutesEl = document.querySelector(".minutes")
const secondsEl = document.querySelector(".seconds")


function updateClock() {
    const currentDate = new Date()
    // setTimeout(updateClock, 1000)
    const hour = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
// since our clock ia analog, we must convert to degrees
    const hourDegree = (hour / 12) * 360
    hourEl.style.transform = `rotate(${hourDegree}deg)`

    const minutesDegree = (minutes / 60) * 360
    minutesEl.style.transform = `rotate(${minutesDegree}deg)`

    const secondsDegree = (seconds / 60) * 360
    secondsEl.style.transform = `rotate(${secondsDegree}deg)`
}

updateClock()

setInterval(updateClock, 1000)
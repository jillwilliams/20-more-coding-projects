const carStart = (carNumber, maxTime = 5) => 
    new Promise((resolve, reject) => {
        const randomTime = Math.floor(Math.random() * maxTime) * 1000

        setTimeout(() => {
            resolve(carNumber)
        }, randomTime)

    })

const carsOrder = []


const updateDisplay = () => {
    const raceEl = document.getElementById("race")
    raceEl.innerHTML = ""
    carsOrder.forEach((id, position) => {
        raceEl.innerHTML += `<div><img src="../images/car-${id}.png"><span>#${position + 1} Place</span></div>`
    })

}

carStart(1)
    .then(result => {
        carsOrder.push(result)
    })
    .then(updateDisplay)

carStart(2)
    .then(result => {
        carsOrder.push(result)
    })
    .then(updateDisplay)



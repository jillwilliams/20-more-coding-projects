const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name
}

function randomColor() {
    // generate an rgb generator value 0 - 255
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    // use these values to set the background color to
    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color
}






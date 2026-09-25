const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("check")
const answerEl = document.getElementById("answer")


function reverseString(string) {
    return string.split("").reverse().join("")
    // "dog"=split ["d","o","g"]
    // reverse = ["g", "o", "d"]
    // .join = "god"
}

function clearAnswer() {
    answerEl.innerText = ""
    inputEl.value = ""
}

function checkWord() {
    const value = inputEl.value
    // reverse the string and check if they are the same
    const reverse = reverseString(value)
    if (value === reverse) {
        answerEl.innerText = "This is a Palindrome!"
    } else {
        answerEl.innerText = "This is not a Palindrome!"
    }
}

buttonEl.addEventListener("click", checkWord)
inputEl.addEventListener("click", clearAnswer)

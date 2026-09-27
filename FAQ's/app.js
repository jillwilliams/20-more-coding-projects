const containerEl = document.getElementById("faq-container")

const dataArray = [
    {
        title: "Why is Javascript cool?",
        detail: "Because we say so!"
    },
    {
        title: "What time is it?",
        detail: "Get a watch"
    },
    {
        title: "Why did the chicken cross the road?",
        detail: "To get to the other side!"
    },
    {
        title: "Text 4",
        detail: "answer 4"
    },
    {
        title: "Text 5",
        detail: "answer 5"
    }
]

const makeHTML = data => {
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`
}

containerEl.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("")



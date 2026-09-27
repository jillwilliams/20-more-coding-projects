const containerEl = document.getElementById("testimonials-container")
let currentTestimonial = 0

const testimonials = [
    {
        author: {
            name: "Francisca Dean",
            image: "../images/testimonial-one.png",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt iure incidunt accusamus! Rem, perspiciatis voluptate. Modi cumque at deserunt labore reprehenderit, assumenda praesentium natus.",
        date: "May 26",
    },

    {
        author: {
            name: "Martha Wingdom",
            image: "../images/testimonial-two.png",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt iure incidunt accusamus! Rem, perspiciatis voluptate. Modi cumque at deserunt labore reprehenderit, assumenda praesentium natus.",
        date: "June 15",
    },

    {
        author: {
            name: "Marcus Wright",
            image: "../images/testimonial-three.png",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt iure incidunt accusamus! Rem, perspiciatis voluptate. Modi cumque at deserunt labore reprehenderit, assumenda praesentium natus.",
        date: "October 16",
    }
]

const makeTestimonialCard = testimonial => {
    return `<div class="testimonial-card">
        <img src="${testimonial.author.image}">
        <h2>${testimonial.author.name}</h2>
        <p>${testimonial.text}</p>
        <date>Written on ${testimonial.date}</date>
    </div>`
}

const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
        currentTestimonial++
        updatePage()
    }
}

const prevTestimonial = () => {
    if (currentTestimonial > 0) {
        currentTestimonial--
        updatePage()
    }
}

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial])

    if(testimonials.length > 1) {
        markup += `<nav>
            <button onclick="prevTestimonial()">Previous</button>
            <button onclick="nextTestimonial()">Next</button>
        </nav>`
    }
    containerEl.innerHTML = markup
}

updatePage()

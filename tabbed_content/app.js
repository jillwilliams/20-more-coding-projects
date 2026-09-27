const navEl = document.querySelector("nav")
const navbarLinks = navEl.querySelectorAll("a")
const sectionEl = document.querySelectorAll("section")

const removeActiveLinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove("active"))
}

const hideSections = () => {
    sectionEl.forEach(section => section.classList.add("hidden"))
}

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        removeActiveLinks()
        hideSections()
        link.parentElement.classList.add("active")
        const sectionEl = document.querySelector(link.hash)
        sectionEl.classList.remove("hidden")
    
    
    
    })
})
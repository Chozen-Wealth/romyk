let body = document.getElementsByTagName("body")[0]
let navElement = document.querySelectorAll(".navElement")
let btnLogin = document.getElementById("btnLogin")
let backgroundPopUp = document.getElementById("backgroundPopUp")
let loginBox = document.getElementById("loginBox")
let btnFermer = document.getElementById("btnFermer")

let login = document.getElementById("login")
let register = document.getElementById("register")

let connexion = document.getElementById("connexion")
let inscription = document.getElementById("inscription")

let sections = document.querySelectorAll("section")
let btnDark = document.getElementById("darkMode")
let btnLight = document.getElementById("lightMode")
let main = document.getElementsByTagName("main")[0]
let header = document.getElementsByTagName("header")[0]

let basCarte = document.getElementsByClassName("basCarte")
let carte = document.getElementsByClassName("carte")
let carouselExample = document.getElementById("carouselExample")

btnDark.addEventListener("click", ()=>{
    sections.forEach(element => {
        element.classList.add("darkmode")
    })
    main.classList.add("darkmode")
    header.classList.add("darkmode")
    btnDark.style.display = "none"
    btnLight.style.display = "inline-block"
    Array.from(basCarte).forEach(bas => {
        bas.classList.add("sombre")
    })
    Array.from(carte).forEach(glow => {
        glow.classList.add("glow")
    })
    carouselExample.classList.add("sombre")
})
btnLight.addEventListener("click", ()=>{
    sections.forEach(element => {
        element.classList.remove("darkmode")
    })
    main.classList.remove("darkmode")
    header.classList.remove("darkmode")
    btnDark.style.display = "inline-block"
    btnLight.style.display = "none"
    Array.from(basCarte).forEach(bas => {
        bas.classList.remove("sombre")
    })
    Array.from(carte).forEach(glow => {
        glow.classList.remove("glow")
    })
    carouselExample.classList.remove("sombre")
})



navElement.forEach(element => {
    element.addEventListener("click", ()=>{
        navElement.forEach(actif => actif.classList.remove("navActive"))
        element.classList.add("navActive")
    })
});

btnLogin.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "flex"
    login.style.display = "flex"
    loginBox.style.display = "flex"
    register.style.display = "none"
    body.style.overflowY = "hidden"
})
btnFermer.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "none"
    login.style.display = "none"
    loginBox.style.display = "none"
    register.style.display = "none"
    body.style.overflowY = ""
})

inscription.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "flex"
    loginBox.style.display = "flex"
    register.style.display = "flex"
    login.style.display = "none"
})
connexion.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "flex"
    loginBox.style.display = "flex"
    register.style.display = "none"
    login.style.display = "flex"
})
backgroundPopUp.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "none"
    loginBox.style.display = "none"
    login.style.display = "none"
    register.style.display = "none"
    body.style.overflowY = ""
})
loginBox.addEventListener("click", (e) => {
    e.stopPropagation()
})


// Tentative de carousel ici
let carousel = document.querySelector("#carouselExample")
let items = carousel.querySelectorAll(".carousel-item")
let btnNext = carousel.querySelector(".carousel-control-next")
let btnPrev = carousel.querySelector(".carousel-control-prev")
let track = carousel.querySelector(".carousel-inner")

let indexActuel = 0
let itemsTotal = items.length

function showSlide(index) {
    items.forEach((item, i) =>{
        item.classList.remove("active")
        if (i === index) {
            item.classList.add("active")
        }
    })
}

btnNext.addEventListener("click", ()=>{
    showSlide(indexActuel)

    indexActuel++;
  
    if (indexActuel >= items.length) {
      indexActuel = 0; // ou stop ici si tu veux bloquer à la fin
    }
  
    const amountToMove = -indexActuel * 100; // pour 100% de largeur
    items[indexActuel].style.transform = `translateX(${amountToMove}%)`;
})

btnPrev.addEventListener("click", ()=>{
    indexActuel = (indexActuel - 1) % itemsTotal
    showSlide(indexActuel)
})

setInterval(()=>{
    indexActuel = (indexActuel + 1) % itemsTotal
    showSlide(indexActuel)
}, 5000)
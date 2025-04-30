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
let bulle = document.getElementsByClassName("bulle")
let carouselExample = document.getElementById("carousel")
let nav = document.getElementsByTagName("nav")[0]

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
    carousel.classList.add("sombre")
    Array.from(bulle).forEach(element => {
        element.classList.add("sombre")
    })
    nav.classList.add("sombre")
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
    carousel.classList.remove("sombre")
    Array.from(bulle).forEach(element => {
        element.classList.remove("sombre")
    })
    nav.classList.remove("sombre")
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





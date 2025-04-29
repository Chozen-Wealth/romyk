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
    body.style.position = "fixed"
    body.style.width = "100%"
    body.style.overflowY = "scroll"
})
btnFermer.addEventListener("click", ()=>{
    backgroundPopUp.style.display = "none"
    login.style.display = "none"
    loginBox.style.display = "none"
    register.style.display = "none"
    body.style.position = ""
    body.style.width = ""
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
    body.style.position = ""
    body.style.width = ""
    body.style.overflowY = ""
})
loginBox.addEventListener("click", (e) => {
    e.stopPropagation()
})
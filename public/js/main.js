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
let carousel = document.getElementById("carousel")
let nav = document.getElementsByTagName("nav")[0]
let aboutText = document.querySelector(".aboutText")
let btnMenu = document.getElementById("btnMenu")
let navUl = document.getElementById("navUl")

btnMenu.addEventListener("click", ()=>{
    navUl.classList.toggle("open")
})

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
    aboutText.classList.add("sombre")
    btnMenu.classList.add("sombre")
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
    aboutText.classList.remove("sombre")
    btnMenu.classList.remove("sombre")
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

let btnGauche = document.querySelector("#btnGauche")
let btnDroite = document.querySelector("#btnDroite")
let carouselBox = document.querySelector("#carouselBox")
// let carouselObjet = document.querySelectorAll(".carouselObjet")

btnDroite.addEventListener("click", ()=>{
    index = 0
    let firstImg = carouselBox.firstElementChild
    let nextImg = firstImg.nextElementSibling


    carouselBox.firstElementChild.style.transform = "translateX(-110%)"
    nextImg.style.transform = "translateX(0px)"
    carouselBox.firstElementChild.classList.remove("active")
    setTimeout(() => {
        carouselBox.append(carouselBox.querySelector("div:first-child"))
    }, 1000);
    carouselBox.firstElementChild.classList.add("active")
    carouselBox.firstElementChild.style.transform = "translateX(0%)"
    // carouselBox.previousElementSibling.style.transform = "110%"
    carouselBox.lastElementChild.style.transform = "translateX(-110%)"
    setTimeout(()=>{
        carouselBox.lastElementChild.style.transform = "translateX(110%)"
    },1000)
})











// let indexActuel = 0
// let nombreObjets = carouselObjet.length -1
// console.log(nombreObjets)
// let indexActuelInversed = 2


// function slideDroite(index) {
//     console.log(indexActuel)
//     if (indexActuel >= nombreObjets){
//         index = 0
//         carouselObjet[index + 2].style.transition = "1s ease"
//         carouselObjet[index + 2].style.transform = "translateX(-110%)"
//         setTimeout(()=>{
//             carouselObjet[index + 2].style.transition = "1s ease"
//             carouselObjet[index + 2].style.transform = "translateX(-110%)"
//             carouselObjet[index + 2].style.opacity = "0"
//         },500)
//         carouselObjet[index].style.transition = "0s"
//         carouselObjet[index].style.transform = "translateX(110%)"
//         carouselObjet[index].style.opacity = "1"
//         setTimeout(()=>{
//             carouselObjet[index].style.transition = "1s ease"
//             carouselObjet[index].style.transform = "translateX(0%)"
//         },10)
//         setTimeout(()=>{
//             carouselObjet[index].style.opacity = "1"
//         },500)
//     }
//     else {
//         if (carouselObjet[index + 2]) {
//             carouselObjet[index + 2].style.transition = "1s ease"
//             setTimeout(()=>{
//                 carouselObjet[index + 2].style.opacity = "0"
//             },500)
//             carouselObjet[index + 2].style.transform = "translateX(-110%)"
//         }
//         carouselObjet[index].style.transform = "translateX(-110%)"
//         setTimeout(()=>{
//         carouselObjet[index].style.opacity = "0"
//         },500)
//         carouselObjet[index + 1].style.transition = "0s"
//         carouselObjet[index + 1].style.transform = "translateX(110%)"
//         setTimeout(()=>{
//             carouselObjet[index + 1].style.transition = "1s ease"
//             carouselObjet[index + 1].style.transform = "translateX(0)"
//         },10)
//         carouselObjet[index + 1].style.opacity = "1"
//     }
//     console.log(indexActuel)
//     indexActuel++
// }

// function slideGauche(index) {
//     console.log(indexActuel)
//     if (indexActuel < nombreObjets){
//         index = 2
//         if (carouselObjet[index + 2]) {
//             carouselObjet[index + 2].style.transition = "1s ease"
//             carouselObjet[index + 2].style.transform = "translateX(110%)"
//             setTimeout(()=>{
//                 carouselObjet[index + 2].style.transition = "1s ease"
//                 carouselObjet[index + 2].style.transform = "translateX(110%)"
//                 carouselObjet[index + 2].style.opacity = "0"
//             },500)
//         }
//         carouselObjet[index].style.transition = "0s"
//         carouselObjet[index].style.transform = "translateX(-110%)"
//         carouselObjet[index].style.opacity = "1"
//         setTimeout(()=>{
//             carouselObjet[index].style.transition = "1s ease"
//             carouselObjet[index].style.transform = "translateX(0%)"
//         },10)
//         setTimeout(()=>{
//             carouselObjet[index].style.opacity = "1"
//         },500)
//     }
//     else {
//         if (carouselObjet[index + 2]) {
//             carouselObjet[index + 2].style.transition = "1s ease"
//             setTimeout(()=>{
//                 carouselObjet[index + 2].style.opacity = "0"
//             },500)
//             carouselObjet[index + 2].style.transform = "translateX(110%)"
//         }
//         carouselObjet[index].style.transform = "translateX(110%)"
//         setTimeout(()=>{
//         carouselObjet[index].style.opacity = "0"
//         },500)
//         carouselObjet[index + 1].style.transition = "0s"
//         carouselObjet[index + 1].style.transform = "translateX(-110%)"
//         setTimeout(()=>{
//             carouselObjet[index + 1].style.transition = "1s ease"
//             carouselObjet[index + 1].style.transform = "translateX(0)"
//         },10)
//         carouselObjet[index + 1].style.opacity = "1"
//     }
//     console.log(indexActuel)
//     indexActuel -= 1
// }

// btnDroite.addEventListener("click",()=>{
//     if (indexActuel > nombreObjets) {
//         indexActuel = 0
//         slideDroite(indexActuel)
//     }
//     else {
//         slideDroite(indexActuel)
//     }  
// })

// btnGauche.addEventListener("click", ()=>{
//     if (indexActuel < 0) {
//         indexActuelInversed = 2
//         slideGauche(indexActuelInversed)
//     }
//     else {
//         slideGauche(indexActuelInversed)
//     }  
// })

// let automatique = setInterval(() => {
//     if (indexActuel > nombreObjets) {
//         indexActuel = 0
//         slideDroite(indexActuel)
//     }
//     else {
//         slideDroite(indexActuel)
//     }
//     carousel.addEventListener("mouseenter", ()=>{
//         clearInterval()
//         console.log("carousel arrêté")
//     })
// }, 5000);

// carousel.addEventListener("mouseenter", ()=>{

//     console.log("carousel arrêté")
// })
// carousel.addEventListener("mouseleave", ()=>{
    
//     console.log("carousel en marche")
// })
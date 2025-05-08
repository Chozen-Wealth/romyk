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


// CAROUSEEEELLLLL
const carouselItem = document.querySelectorAll('.carousel-item');
let indexActuel = 0;

function updateCarouselItem(nextIndex, direction) {
  if (nextIndex === indexActuel) return;

  const currentSlide = carouselItem[indexActuel];
  const nextSlide = carouselItem[nextIndex];

  // Positionne le next slide selon la direction donnée
  nextSlide.style.transition = 'none';
  nextSlide.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';
  nextSlide.classList.add('active');

  // Forcer un reflow
  nextSlide.offsetHeight;

  // Anime les deux carouselItem en même temps et en remettant la transition pour que ce soit fluide
  currentSlide.style.transition = 'transform 0.6s ease-in-out';
  nextSlide.style.transition = 'transform 0.6s ease-in-out';
  currentSlide.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
  nextSlide.style.transform = 'translateX(0%)';

  // On remet les éléments à leurs place en enlevant l'animation pour que ce soit instantané
  setTimeout(() => {
    currentSlide.classList.remove('active');
    currentSlide.style.transition = '';
    currentSlide.style.transform = 'translateX(100%)';
    nextSlide.style.transition = '';
  }, 600);

  indexActuel = nextIndex;
}

// Sélectionne le bouton droit et lui donne un event listener directement
document.querySelector('.carousel-control-next').addEventListener('click', () => {
  const nextIndex = (indexActuel + 1) % carouselItem.length;
  updateCarouselItem(nextIndex, 'left');

    // Je clear l'intervalle ici pour éviter que le carousel tourne pendant que je clique et créer un bug.
  clearInterval(intervalle)
  intervalle = setInterval(()=>{
    const nextIndex = (indexActuel + 1) % carouselItem.length;
    updateCarouselItem(nextIndex, 'left');
},5000)
});

// Sélectionne le bouton gauche et lui donne un event listener directement
document.querySelector('.carousel-control-prev').addEventListener('click', () => {
  const nextIndex = (indexActuel - 1 + carouselItem.length) % carouselItem.length;
  updateCarouselItem(nextIndex, 'right');

  // Je clear l'intervalle ici pour éviter que le carousel tourne pendant que je clique et créer un bug.
  clearInterval(intervalle)
  intervalle = setInterval(()=>{
    const nextIndex = (indexActuel + 1) % carouselItem.length;
    updateCarouselItem(nextIndex, 'left');
},5000)
});

// Première slide active direct
carouselItem.forEach(slide => slide.classList.remove('active'));
carouselItem[0].classList.add('active');
carouselItem[0].style.transform = 'translateX(0%)';


// Carousel automatique ici toutes les 5 secondes

intervalle = setInterval(()=>{
    const nextIndex = (indexActuel + 1) % carouselItem.length;
    updateCarouselItem(nextIndex, 'left');
},5000)
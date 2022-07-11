var loader = document.querySelector('#fullloader');
var jeu = document.querySelector('#jeu');
var accueil = document.querySelector('#accueil');
var starting = document.querySelector('#starting');
var buttontest = document.querySelector('#buttontest');
var modal = document.querySelector('#modal');
var score = document.querySelector('.score span:nth-child(2)');
var modalclose = document.querySelector('.modalclose');
var fermeturefenetre = document.querySelector('#fermeturefenetre');
var inputcenter = document.querySelector('#inputcenter');
var screeninput = document.querySelector('#screeninput');
var fermeturefenetre = document.querySelector('#fermeturefenetre');
var langage = document.querySelector('#langage');

var alllangues = ['JAVASCRIPT', 'HTML', 'CSS', 'SQL', 'PYTHON', 'JAVA', 'BASH', 'POWERSHELL', 'C#', 'PHP', 'C++', 'TYPESCRIPT', 'C', 'RUBY', 'GO', 'ASSEMBLY', 'SWIFT', 'KOTLIN', 'R', 'VBA', 'OBJECTIVE-C', 'SCALA', 'RUST', 'DART', 'ELIXIR', 'CLOJURE', 'WEBASSEMBLY'];

var alllanguesvide = [];

// window.onload = setTimeout(test, 3000);
// function test(){
//     loader.style.display = "none";
//     accueil.style.display = "flex";
// };
// starting.addEventListener('click', function(){
//     accueil.classList.add("transcueil");
//     setTimeout(() => {
//         accueil.style.display = "none";
//         jeu.style.display = "flex";
//     }, 1000);
// })

// Score

let error1 = false
let error2 = false
let error3 = false

jeu.addEventListener('click', function () {
    if (error1 == false) {
        document.querySelector('.error1').style = 'opacity: 1; color: #0AEFF7;'
        error1 = true
        console.log('erreur1=' + error1)
        return
    }
    if (error1 == true & error2 == false) {
        document.querySelector('.error2').style = 'opacity: 1; color: #0AEFF7;'
        error2 = true
        console.log('erreur2=' + error2)
        return
    }
    if (error2 == true & error3 == false) {
        document.querySelector('.error3').style = 'opacity: 1; color: #0AEFF7;'
        error3 = true
        console.log('erreur3=' + error3)
        return
    }
})

// Modal

// remplacer buttontest par jeu ou le logo correspondant.

// window.addEventListener("keydown", function(){
//     modal.classList.toggle("modalflex");
// })
// modalclose.addEventListener('click', function(){
//     modal.classList.toggle("modalflex");
// })
// fermeturefenetre.addEventListener('click', function(){
//     setTimeout(() => {
//         modal.classList.remove("modalflex");
//     }, 2000);
// })

// Modal de langage trouvée

var modaldelangue = document.querySelector('.modaldelangue');
var close = document.querySelector("#close");

langage.addEventListener('click', function(){
    modaldelangue.classList.add('modalflexlang');
})
close.addEventListener('click', function(){
    modaldelangue.classList.remove('modalflexlang');
})



// modal de saisi

window.addEventListener("keydown", function (e) {
    console.log(e);
    if (
        e.key === "a" ||
        e.key === "b" ||
        e.key === "c" ||
        e.key === "d" ||
        e.key === "e" ||
        e.key === "f" ||
        e.key === "g" ||
        e.key === "h" ||
        e.key === "i" ||
        e.key === "j" ||
        e.key === "k" ||
        e.key === "l" ||
        e.key === "m" ||
        e.key === "n" ||
        e.key === "o" ||
        e.key === "p" ||
        e.key === "q" ||
        e.key === "r" ||
        e.key === "s" ||
        e.key === "t" ||
        e.key === "u" ||
        e.key === "v" ||
        e.key === "w" ||
        e.key === "x" ||
        e.key === "y" ||
        e.key === "z" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "#" ||
        e.key === " "
    ) {
        inputcenter.style.display = "flex";
        screeninput.innerHTML += e.key.toUpperCase();
    }
    if (e.key === 'Backspace'){
        screeninput.textContent = screeninput.textContent.slice(e, -1);
    }
    if (e.key === 'Escape'){
        inputcenter.style.display = "none";
        screeninput.textContent = "";
    }
})
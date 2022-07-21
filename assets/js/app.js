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
var modalerror = document.querySelector('.modalerror');
var numscore = document.querySelector('.numscore');
var modaldelangue = document.querySelector('.modaldelangue');
var modaldelanguep = document.querySelector('.modaldelangue p');
var close = document.querySelector("#close");
var startinggamewin = document.querySelector("#startinggamewin");
var startinggameend = document.querySelector("#startinggameend");
let y = 0;


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

// Zoom
var zoom = document.querySelector('.zoom img');
var zoombarreblue = document.querySelector('.zoombarreblue');

zoom.addEventListener('wheel', function(){
    for (n = 0; n < zoom.dataset.scale; n++){
        zoombarreblue.style.height = `${n}0%`;
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



var alllangues = ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python', 'Java', 'Bash', 'PowerShell', 'C#', 'PHP', 'C++', 'TypeScript', 'C', 'Ruby', 'GO', 'Assembly', 'Swift', 'Kotlin', 'R', 'VBA', 'Objective-C', 'Scala', 'Rust', 'Dart', 'Elixir', 'Clojure', 'WebAssembly'];

let alllanguesMaj = alllangues.map((j) => {
    return j.toUpperCase();
});

var alllanguesvide = [];

// Modal de langage trouvée

langage.addEventListener('click', function () {
    modaldelangue.classList.add('modalflexlang');
})
close.addEventListener('click', function () {
    modaldelangue.classList.remove('modalflexlang');
})

// JSON modal 

// modal de saisi
startinggameend.addEventListener('click', function () {
    window.location.reload();
});
startinggamewin.addEventListener('click', function () {
    window.location.reload();
});
let error1 = false
let error2 = false
let error3 = false



window.addEventListener("keydown", function (e) {
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


    if (e.key === 'Backspace') {
        screeninput.textContent = screeninput.textContent.slice(e, -1);
    }
    if (e.key === 'Escape') {
        inputcenter.style.display = "none";
        screeninput.textContent = "";
    }
    if (e.key === 'Enter' && alllanguesMaj.includes(screeninput.innerHTML)) {
        alllanguesMaj.innerHTML = alllanguesvide;
        let langpositions = alllanguesMaj.indexOf(alllanguesMaj);
        alllanguesvide.push(screeninput.innerHTML);
        unique = [...new Set(alllanguesvide)];
        modaldelanguep.innerHTML = unique.join("<br>");
    
        console.log(alllanguesMaj);
        if (alllanguesvide.length !== unique.length){
            alllanguesvide.pop();
            screeninput.innerHTML = "Tu te répètes";
            setTimeout(() => {
                inputcenter.style.display = "none"
                screeninput.innerHTML = "";
            }, 800);
            return
        }
        y++;
        numscore.innerHTML = y;
        if (y === 27) {
            document.querySelector('.modalwin').innerHTML;
            document.querySelector('.modalwin').style.display = 'flex';
        }
        setTimeout(() => {
            inputcenter.style.display = "none";
            screeninput.textContent = "";
        }, 250);
    }
    if (e.key === 'Enter' && screeninput.textContent === ""){
        inputcenter.style.display = "none";
        return
    }
    if (e.key === 'Enter' && !alllanguesMaj.includes(screeninput.innerHTML)) {

        if (error1 == false) {
            document.querySelector('.error1').classList.add('lightblue');
            error1 = true
             setTimeout(() => {
                inputcenter.style.display = "none";
                screeninput.textContent = "";   
            }, 250);
            return
        }
        if (error1 == true & error2 == false) {
            document.querySelector('.error2').classList.add('lightblue');
            error2 = true
             setTimeout(() => {
                inputcenter.style.display = "none";
                screeninput.textContent = "";   
            }, 250);
            return
        }
        if (error2 == true & error3 == false) {
            document.querySelector('.error3').classList.add('lightblue');
            error3 = true
             setTimeout(() => {
                inputcenter.style.display = "none";
                screeninput.textContent = "";   
            }, 250);
            modalerror.style.display = 'flex';
            return
        }
        
    }
});
const myRequest = new Request('assets/json/languages.json');

fetch(myRequest)
.then(response => response.json())
.then(date => {
    for (const product of data.products) {
        let 
    }
})
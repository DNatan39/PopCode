var loader = document.querySelector("#fullloader");
var jeu = document.querySelector("#jeu");
var accueil = document.querySelector("#accueil");
var starting = document.querySelector("#starting");
var buttontest = document.querySelector('#buttontest');
var modal = document.querySelector('#modal');
var score = document.querySelector('.score span:nth-child(2)');

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

// Modal

// remplacer buttontest par jeu ou le logo correspondant.
buttontest.addEventListener('click', function(){
    modal.classList.toggle("modalflex");
})

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


var loader = document.querySelector("#fullloader");
var jeu = document.querySelector("#jeu");
var accueil = document.querySelector("#accueil");
var starting = document.querySelector("#starting");

window.onload = setTimeout(test, 3000);
function test(){
    loader.style.display = "none";
    accueil.style.display = "flex";
};


starting.addEventListener('click', function(){
    accueil.classList.add("transcueil");
    setTimeout(() => {
        accueil.style.display = "none";
        jeu.style.display = "flex";
    }, 1000);
})

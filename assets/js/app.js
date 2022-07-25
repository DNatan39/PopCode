var loader = document.querySelector('#fullloader');
var jeu = document.querySelector('#jeu');
var accueil = document.querySelector('#accueil');
var starting = document.querySelector('#starting');
var buttontest = document.querySelector('#buttontest');
var modal = document.querySelector('#modal');
var score = document.querySelector('.score span:nth-child(2)');
var inputcenter = document.querySelector('#inputcenter');
var screeninput = document.querySelector('#screeninput');
var langage = document.querySelector('#langage');
var modalerror = document.querySelector('.modalerror');
var numscore = document.querySelector('.numscore');
var modaldelangue = document.querySelector('.modaldelangue');
var modaldelanguep = document.querySelector('.modaldelangue p');
var close = document.querySelector("#close");
var startinggamewin = document.querySelector("#startinggamewin");
var startinggameend = document.querySelector("#startinggameend");
var fermeturefenetre = document.querySelector("#fermeturefenetre");
let y = 0;
var mention = {
    "title": "Mentions légales",
    "content": "<div><h2>Editeur du Site :</h2><p class='fs-13 text-white'>Le site web <a href='natandavid.fr/projets/popcode' target='_blank'>natandavid.fr/popcode</a>est &eacute;dit&eacute; par les apprenants de l&#39;<a href='https://www.accesscodeschool.fr/' target='_blank'>Access Code School</a> de Lons le Saunier et n&#39;est en aucun cas destin&eacute; &agrave; une utilisation commerciale. Celui-ci &agrave; &eacute;t&eacute; d&eacute;veloppp&eacute; dans le cadre d&#39;un projet d&#39;&eacute;tude.</p><h2>H&eacute;bergement :</h2><p>OVH<br />SAS au capital de 200 000 euros<br />RCS Paris 393 078 647<br />Si&egrave;ge Sociale : 3 cit&eacute; Paradis 75010 Paris</p><h2>Cookies :</h2><p>Notre site internet utilise des cookies. Il s&rsquo;agit de petits fichiers texte enregistr&eacute;s sur votre disque dur. La plupart des cookies sont destin&eacute;s &agrave; permettre ou faciliter votre navigation et sont n&eacute;cessaires au fonctionnement du site. L&rsquo;utilisation de cookies, propres ou tiers, n&rsquo;&eacute;tant pas obligatoirement n&eacute;cessaires au fonctionnement du site n&eacute;cessite un consentement expr&egrave;s de votre part. Vous pouvez manifester votre consentement ou vous opposer &agrave; l&rsquo;utilisation des cookies en param&eacute;trant votre dispositif de connexion de mani&egrave;re appropri&eacute;e. Reportez-vous pour cela notamment au guide d&rsquo;utilisation de votre navigateur.</p><h2>Comment accepter, param&eacute;trer ou refuser un cookie ?</h2><p>Vous pouvez configurer votre navigateur de fa&ccedil;on &agrave; ce que les cookies soient enregistr&eacute;s ou rejet&eacute;s.</p><h2>Pour Microsoft Internet Explorer :</h2><ul><li>Choisissez le menu &nbsp;<strong>Outils</strong> &nbsp;puis &nbsp;<strong>Options Internet&nbsp;</strong></li><li>Cliquez sur l&rsquo;onglet &laquo; Confidentialit&eacute; &raquo;</li><li>S&eacute;lectionnez le niveau souhait&eacute; &agrave; l&rsquo;aide du curseur</li></ul><h2>Pour Mozilla Firefox :</h2><ul><li>Choisissez le menu <strong>Outils&nbsp;</strong>puis&nbsp;<strong>Options</strong></li><li>Cliquez sur l&rsquo;option <strong>Vie priv&eacute;e</strong></li></ul><h2>Pour Chrome :</h2><ul><li>Choisissez le menu <strong>Edition</strong> puis&nbsp;<strong>Pr&eacute;f&eacute;rences</strong>&nbsp;</li><li>Cliquez sur l&rsquo;option <strong>Donn&eacute;es personnelles</strong></li><li>Rubrique <strong>Cookies</strong>&nbsp;</li></ul><h2>Pour Safari :</h2><ul><li>Choisissez le menu <strong>Edition</strong> puis&nbsp;<strong>Pr&eacute;f&eacute;rences</strong>&nbsp;</li><li>Cliquez sur l&rsquo;option <strong>Donn&eacute;es personnelles</strong></li><li>Rubrique <strong>Cookies</strong>&nbsp;</li></ul><h2>Protection des donn&eacute;es personnelles :</h2><p>Aucune information personnelle n&rsquo;est collect&eacute;e &agrave; votre insu.<br />Aucune information personnelle n&rsquo;est c&eacute;d&eacute;e &agrave; des tiers.</p></div>"
}
// modal règle
var regle = document.querySelector(".regle");
var fermregle = document.querySelector("#fermregle");
var regleoverlay = document.querySelector(".regleoverlay");

fermregle.addEventListener('click', function(){
    regle.style.display = 'none';
    regleoverlay.style.display = 'none';
})


window.onload = setTimeout(test, 3000);

function test() {
    loader.style.display = "none";
    accueil.style.display = "flex";
};
starting.addEventListener('click', function () {
    accueil.classList.add("transcueil");
    setTimeout(() => {
        accueil.style.display = "none";
        jeu.style.display = "flex";
    }, 1000);
})

// Zoom
var zoom = document.querySelector('.zoom img');
var zoombarreblue = document.querySelector('.zoombarreblue');

zoom.addEventListener('wheel', function () {
    for (n = 0; n < zoom.dataset.scale; n++) {
        zoombarreblue.style.height = `${n}0%`;
    }
})


// mentions légales
var mentions = document.querySelector(".mentions");
var mentionlegale = document.querySelector("#mentionlegale");
mentions.addEventListener('click', function () {
    mentionlegale.classList.add("openMent");
})

let toMention = "";
toMention += "<a href='#'><i id='closemention' class='fa-solid fa-xmark position-absolute'></i></a><h2>" + mention.title + "</h2><p>" + mention.content + "</p>";
mentionlegale.innerHTML = toMention;
var closemention = document.querySelector("#closemention");
closemention.addEventListener('click', function () {
    mentionlegale.classList.add("closeMent");
    mentionlegale.classList.remove("openMent");
})




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

async function openModal(element) {
    let input = document.querySelector('#fermeturefenetre input')
    const myRequest = new Request('assets/json/languages.json');
    fetch(myRequest)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let test = data[i].name.toUpperCase();
                if (element === test) {
                    if (input.checked === false) {
                        setTimeout(() => {
                          modal.classList.remove("modalflex");
                        }, 2000);
                   }
                   document.querySelector('#titredelanguage').innerHTML = data[i].name; 
                   document.querySelector('#imagelanguage').src = data[i].picture; 
                   document.querySelector('#imagelanguage').alt = 'Logo ' + data[i].name; 
                   document.querySelector('#descriptionlanguage').innerHTML = data[i].description;
                    var modalclose = document.querySelector('.modalclose');
                    modalclose.addEventListener('click', function () {
                        modal.classList.remove('modalflex');
                    })
                    return
                }

            }
        })
}
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
        openModal(screeninput.innerHTML)

        if (alllanguesvide.length !== unique.length) {
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
        modal.classList.add("modalflex")  
       
    }
    if (e.key === 'Enter' && screeninput.textContent === "") {
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
/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#button1").addEventListener('click', function (event) {
    document.querySelector("#text1").classList.toggle('text-hidden')
})

/* ------------------------------------ */
/* --- Exercice 2 --- */

document.addEventListener('scroll', function(event){
    document.querySelector("#ex2-scroll-value").innerText = Math.floor(window.scrollY);
})

/* ------------------------------------ */
/* --- Exercice 3 --- */

document.querySelector("#button3").addEventListener('click', function (event) {
    document.querySelector("#ex3-animals").appendChild(document.querySelector("#ex3-animals li"));
})

/* ------------------------------------ */
/* --- Exercice 4 --- */



/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */

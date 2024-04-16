/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#button1").addEventListener('click', function (event) {
    document.querySelector("#text1").classList.toggle('text-hidden')
})

/* ------------------------------------ */
/* --- Exercice 2 --- */

document.addEventListener('scroll', function (event) {
    document.querySelector("#ex2-scroll-value").innerText = Math.floor(window.scrollY);
})

/* ------------------------------------ */
/* --- Exercice 3 --- */

document.querySelector("#button3").addEventListener('click', function (event) {
    document.querySelector("#ex3-animals").appendChild(document.querySelector("#ex3-animals li"));
})

/* ------------------------------------ */
/* --- Exercice 4 --- */

document.querySelector("#button4").addEventListener('click', function (event) {
    let clickCounter = 0;
    clickCounter += 1;
    if (clickCounter === 1) {
        document.querySelector("#button4").classList.add('btn--blue')
    }
    if (clickCounter === 2) {
        document.querySelector("#button4").classList.add('btn--red')
    }
    if (clickCounter === 3) {
        document.querySelector("#button4").classList.add('btn--green')
    }
});

/* ------------------------------------ */
/* --- Exercice 5 --- */

// mouseover

document.querySelectorAll("#mouse-over-exercice li .js-btn")

    for (const index of document.querySelectorAll("#mouse-over-exercice li .js-btn")) {
        addEventListener('mouseover', function (event){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let rgbValue = "#" + randomColor;
            document.querySelector("#mouse-over-exercice li .js-btn").style.backgroundColor = rgbValue;
    })
};

console.log(document.querySelectorAll("#mouse-over-exercice li .js-btn"));

console.log(document.querySelector("#mouse-over-exercice li .js-btn"));


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

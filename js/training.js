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

let clickCounter = 0;

document.querySelector("#button4").addEventListener('click', function (event) {
    if (clickCounter === 0) {
        document.querySelector("#button4").classList.remove('btn--green');
        document.querySelector("#button4").classList.add('btn--blue');

    }
    if (clickCounter === 1) {
        document.querySelector("#button4").classList.replace('btn--blue', 'btn--red')
    }
    if (clickCounter === 2) {
        document.querySelector("#button4").classList.replace('btn--red','btn--green')
        clickCounter = -1;
    }

    clickCounter += 1;
});

/* ------------------------------------ */
/* --- Exercice 5 --- */

/**
 * Change background color of an element in a addEventListener context.
 * @param {event} event 
 */
function changeBackgroundColour(event) {
    let randomColor = Math.floor(Math.random() * 256 ** 3).toString(16);
    let rgbValue = "#" + randomColor;
    event.target.style.backgroundColor = rgbValue;
}

const ex5 = document.querySelectorAll(".js-btn");

for (const btn of ex5) {
    btn.addEventListener('mouseover', function (event) {
        changeBackgroundColour(event)
    })
};

// console.log(document.querySelectorAll("#mouse-over-exercice li .js-btn"));

// console.log(document.querySelector("#mouse-over-exercice li .js-btn"));

// function randomColor(){
//     colorValue = Math.floor(Math.random() * (256 ** 3))
//    return '#' + colorValue.toString(16)
// }

// const btnsEx5 = document.querySelectorAll('#ex5 [type=button]')
// console.log(btnsEx5);

// for(const btn of btnsEx5){
//    console.log(randomColor());
//    btn.addEventListener('pointerenter', function (e){
//        e.target.style.backgroundColor = randomColor();
//    })
//    btn.addEventListener('pointerout', function (e){
//        e.target.style.backgroundColor = ''; })
// }

/* ------------------------------------ */
/* --- Exercice 6 --- */

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro officia eos tenetur voluptate consectetur unde quo veritatis architecto ullam labore ea sit inventore saepe dolorem maxime nam, nisi quod.'

/**
 * Splits a text in words and letters.
 * @param {string} text - The text you want to split words from.
 * @returns {array} - The array containing each letters and spaces that compose a text.
 */
function splitWords(text) {
    const arrayText = text.split('');
    return arrayText
}



console.log(splitWords(text));



const textEx6 = document.querySelector('#ex6-paragraph');

console.log(document.querySelector('#ex6-paragraph'));

// function splitText

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

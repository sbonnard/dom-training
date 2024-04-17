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
        document.querySelector("#button4").classList.replace('btn--red', 'btn--green')
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
 * Splits a text in letters.
 * @param {string} text - The text you want to split words from.
 * @returns {array} - The array containing each letters and spaces that compose a text.
 */
function splitWords(text) {
    const arrayText = text.split('');
    return arrayText
}

/**
 * Animate text letter by letter with time interval.
 * @param {element} element - DOM element containing text to animate
 */
function animateText(element) {
    const textContent = element.innerText.split('');
    element.textContent = "";
    let index = 0;
    const interval = setInterval(() => {
        if (index >= textContent.length) {
            clearInterval(interval);
            return;
        }

        element.textContent += textContent[index];
        index++;
    }, 50);
}

// animateText(document.getElementById('ex6-paragraph'));

// METHOD 2
const element = document.getElementById('ex6-paragraph');
const chars = element.innerText.split('');
element.textContent = "";

chars.forEach((letter, i) => {
    setTimeout(() => element.textContent += letter, i * 50);
});

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

/**
 * Create task element from template and adds it to list.
 * @param {string} taskText - Text you want to create from template.
 * @returns {element} Element created and displayed in the DOM.
 */
function addTask(taskText) {
    const taskElement = document.importNode(document.getElementById('task-template').content, true);
    taskElement.querySelector('.js-task').innerText = taskText;
    const listElement = document.querySelector('#ex7-list');
    listElement.appendChild(taskElement);
    return listElement.lastElementChild;
}

/**
 * Gets a task from a list and puts this task at the end.
 * @param {array} taskList - Array of strings
 * @returns {string} The first element from the array.
 */
function getTaskFromList(taskList) {
    const firstElement = taskList.shift();
    taskList.push(firstElement);
    return firstElement;
}


document.getElementById('ex7-button')
    .addEventListener('click', function () {
        const element = addTask(getTaskFromList(taskList));

        // METHOD 2 - Replace event handler below.
        // element.addEventListener('click', function(event) {
        //     this.remove();
        // })
    });

// METHOD 1
document.getElementById('ex7-list')
    .addEventListener('click', function (event) {
        const clickedTask = event.target;
        if (clickedTask.classList.contains('js-task')) {
            clickedTask.remove();
        }
    });

/* ------------------------------------ */
/* --- Exercice 8 --- */

console.log(document.querySelector('#ex8-button-level'));

console.log(document.querySelector('.progress-val-level'));
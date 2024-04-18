// console.log(document.getElementById('project-2').dataset['title']);
// console.log(document.getElementById('project-2').dataset['description']);

// For of loop try

// const image = document.querySelectorAll('.thumbs-img');
// console.log(image[1]);

// let i=0;

// for(const projects of image){
//     image[i].addEventListener("mouseover", function(event){
//         image.src = image[i]['src']
//     })
// }


// My way too long version

const project1 = document.querySelector('[data-title="Consectetur adipiscing elit"]');
const project2 = document.querySelector('[data-title="Voluptatem accusantium"]');
const project3 = document.querySelector('[data-title="Denouncing pleasure and praising pain"]');
const project4 = document.querySelector('[data-title="Ducimus qui blanditiis praesentium"]');
const project5 = document.querySelector('[data-title="Pleasure and pain"]');
const project6 = document.querySelector('[data-title="Focus event on form elements"]');

const image = document.getElementById('gallery-picture');

/**
 * Displays the project thanks to a function's external eventListener.
 * @param {element} alt - The alt element of the project's image.
 * @param {string} imgSrc - The source of the project's image.
 * @param {string} projectNumber - The description of the project found through its ID.
 */
function displayProject(alt, imgSrc, projectNumber){
    document.getElementById('gallery-title').textContent = document.querySelector(alt).alt;
    image.src = imgSrc;
    document.getElementById('gallery-description').textContent = document.getElementById(projectNumber).dataset['description'];
}

// Project 1
project1.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 1"]', "img/project-1.jpg", 'project-1')
});

// Project 2
project2.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 2"]', "img/project-2.jpg", 'project-2')
});

// Project 3
project3.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 3"]', "img/project-3.jpg", 'project-3')
});

// Project 4
project4.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 4"]', "img/project-4.jpg", 'project-4')
});

// Project 5
project5.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 5"]', "img/project-5.jpg", 'project-5')
});

// Project 6
project6.addEventListener('mouseover', function () {
    displayProject('[alt="Projet 6"]', "img/project-6.jpg", 'project-6')
});
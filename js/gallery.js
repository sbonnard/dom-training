// console.log(document.getElementById('project-2').dataset['title']);
// console.log(document.getElementById('project-2').dataset['description']);


const project1 = document.querySelector('[data-title="Consectetur adipiscing elit"]');
const project2 = document.querySelector('[data-title="Voluptatem accusantium"]');
const project3 = document.querySelector('[data-title="Denouncing pleasure and praising pain"]');
const project4 = document.querySelector('[data-title="Ducimus qui blanditiis praesentium"]');
const project5 = document.querySelector('[data-title="Pleasure and pain"]');
const project6 = document.querySelector('[data-title="Focus event on form elements"]');


const description = document.getElementById('project-2').dataset['description'];


// const image = document.querySelectorAll('.thumbs-img');
// console.log(image[1]);

// let i=0;

// for(const projects of image){
//     image[i].addEventListener("mouseover", function(event){
//         image.src = image[i]['src']
//     })
// }














const image = document.getElementById('gallery-picture');
project1.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 1"]').alt;
    image.src = "img/project-1.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-1').dataset['description'];
});

project2.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 2"]').alt;
    image.src = "img/project-2.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-2').dataset['description'];
});

project3.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 3"]').alt;
    image.src = "img/project-3.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-3').dataset['description'];
});

project4.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 4"]').alt;
    image.src = "img/project-4.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-4').dataset['description'];
});

project5.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 5"]').alt;
    image.src = "img/project-5.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-5').dataset['description'];
});

project6.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 6"]').alt;
    image.src = "img/project-6.jpg";
    document.getElementById('gallery-description').textContent = document.getElementById('project-6').dataset['description'];
});









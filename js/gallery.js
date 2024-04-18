const projects = [
    {
        name: document.querySelector('[alt="Projet 1"]').alt,
        picture: "img/project-1",
        description: document.getElementById('project-1').dataset['description'],
        title: document.getElementById('project-2').dataset['title']
    },
    {
        title: document.querySelector('[alt="Projet 2"]').alt,
        picture: "img/project-2",
        description: document.getElementById('project-2').dataset['description'],
        title: document.getElementById('project-2').dataset['title']
    },
    {
        title: document.querySelector('[alt="Projet 3"]').alt,
        picture: "img/project-3",
        description: document.getElementById('project-3').dataset['description'],
        title: document.getElementById('project-2').dataset['title']

    },
    {
        title: document.querySelector('[alt="Projet 4"]').alt,
        picture: "img/project-4",
        description: document.getElementById('project-4').dataset['description'],
        title: document.getElementById('project-2').dataset['title']

    },
    {
        title: document.querySelector('[alt="Projet 5"]').alt,
        picture: "img/project-5",
        description: document.getElementById('project-5').dataset['description'],
        title: document.getElementById('project-2').dataset['title']

    },
    {
        title: document.querySelector('[alt="Projet 6"]').alt,
        picture: "img/project-6",
        description: document.getElementById('project-6').dataset['description'],
        title: document.getElementById('project-2').dataset['title']
    },
]

console.log(document.getElementById('project-2').dataset['title']);
console.log(document.getElementById('project-2').dataset['description']);



const project1 = document.querySelector('[data-title="Consectetur adipiscing elit"]');
const project2 = document.querySelector('[data-title="Voluptatem accusantium"]');
const project3 = document.querySelector('[data-title="Denouncing pleasure and praising pain"]');
const project4 = document.querySelector('[data-title="Ducimus qui blanditiis praesentium"]');
const project5 = document.querySelector('[data-title="Pleasure and pain"]');
const project6 = document.querySelector('[data-title="Focus event on form elements"]');

const image = document.getElementById('gallery-picture');

const description = document.getElementById('project-2').dataset['description'];

console.log(image);

// console.log(project2);
// console.log(document.querySelector('[alt="Projet 2"]').alt);

project1.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 1"]').alt;
    image.src = "img/project-1.jpg";
    description.textContent = document.getElementById('project-1').dataset['description'];
});

project2.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 2"]').alt;
    image.src = "img/project-2.jpg";
    description.textContent = document.getElementById('project-2').dataset['description'];
});

project3.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 3"]').alt;
    image.src = "img/project-3.jpg";
    description.textContent = document.getElementById('project-3').dataset['description'];
});

project4.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 4"]').alt;
    image.src = "img/project-4.jpg";
    description.textContent = document.getElementById('project-4').dataset['description'];
});

project5.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 5"]').alt;
    image.src = "img/project-5.jpg";
    description.textContent = document.getElementById('project-5').dataset['description'];
});

project6.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 6"]').alt;
    image.src = "img/project-6.jpg";
    description.textContent = document.getElementById('project-6').dataset['description'];
});









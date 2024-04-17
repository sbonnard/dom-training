
const project2 = document.querySelector('[data-title="Voluptatem accusantium"]');

// console.log(project2);
// console.log(document.querySelector('[alt="Projet 2"]').alt);

project2.addEventListener('mouseover', function () {
    document.getElementById('gallery-title').textContent = document.querySelector('[alt="Projet 2"]').alt;
    document.getElementById('gallery-picture').textContent =document.querySelector('[src="img/project-2.jpg"]').alt;
    // document.getElementById('gallery-description').textContent = document.getAttribute('[data-description]').getAttribute;

});

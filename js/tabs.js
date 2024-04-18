const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');

const articleTab1 = document.getElementById("tabs-tab1");
const articleTab2 = document.getElementById("tabs-tab2");
const articleTab3 = document.getElementById("tabs-tab3");
const articleTab4 = document.getElementById("tabs-tab4");


tab1.addEventListener('click', function (event) {
    // What it removes and adds to itself
    tab1.classList.add("active-tab");;
    articleTab1.classList.add('active-tab');;
    articleTab1.classList.remove('hidden');;

    // What it removes or add to other tabs
    tab2.classList.remove('active-tab');
    articleTab2.classList.add('hidden');
    tab3.classList.remove('active-tab');
    articleTab3.classList.add('hidden');
    tab4.classList.remove('active-tab');
    articleTab4.classList.add('hidden');
})

tab2.addEventListener('click', function (event) {
    // What it removes and adds to itself
    tab2.classList.add("active-tab");;
    articleTab2.classList.add('active-tab');;
    articleTab2.classList.remove('hidden');;

    // What it removes or add to other tabs
    tab1.classList.remove('active-tab');
    articleTab1.classList.add('hidden');
    tab3.classList.remove('active-tab');
    articleTab3.classList.add('hidden');
    tab4.classList.remove('active-tab');
    articleTab4.classList.add('hidden');
})

tab3.addEventListener('click', function (event) {
    // What it removes and adds to itself
    tab3.classList.add("active-tab");;
    articleTab3.classList.add('active-tab');;
    articleTab3.classList.remove('hidden');;

    // What it removes or add to other tabs
    tab1.classList.remove('active-tab');
    articleTab1.classList.add('hidden');
    tab2.classList.remove('active-tab');
    articleTab2.classList.add('hidden');
    tab4.classList.remove('active-tab');
    articleTab4.classList.add('hidden');
})

tab4.addEventListener('click', function (event) {
    // What it removes and adds to itself
    tab4.classList.add("active-tab");;
    articleTab4.classList.add('active-tab');;
    articleTab4.classList.remove('hidden');;

    // What it removes or add to other tabs
    tab1.classList.remove('active-tab');
    articleTab1.classList.add('hidden');
    tab2.classList.remove('active-tab');
    articleTab2.classList.add('hidden');
    tab3.classList.remove('active-tab');
    articleTab3.classList.add('hidden');
})


console.log(document.getElementById('tab2'));
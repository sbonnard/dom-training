const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');


    tab2.classList.add("active-tab");


tab2.addEventListener('click', function (event) {
    tab2.classList.add("active-tab");;
    if (tab1.classList.contains('active-tab') || tab3.classList.contains('active-tab') || tab4.classList.contains('active-tab')) {
        tab1.classList.remove('active-tab');
        tab2.classList.remove('active-tab');
        tab3.classList.remove('active-tab');
    }
}
)

tab1.addEventListener('click', function (event) {
    tab1.classList.add("active-tab");
    if (tab2.classList.contains('active-tab') || tab3.classList.contains('active-tab') || tab4.classList.contains('active-tab')) {
        tab2.classList.remove('active-tab');
        tab3.classList.remove('active-tab');
        tab4.classList.remove('active-tab');
    }
}
)

console.log(document.getElementById('tab2'));
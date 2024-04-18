const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');

const articleTab1 = document.getElementById("tabs-tab1");
const articleTab2 = document.getElementById("tabs-tab2");
const articleTab3 = document.getElementById("tabs-tab3");
const articleTab4 = document.getElementById("tabs-tab4");


/* 2 boucles for par listener
deux tableaux
listener sur le ul */

/**
 * Adds the .active-tab CSS class to a tab.
 * @param {string} tabNumber - The tab you want to set as active.
 * @param {string} tabArticle - The article you want to set as active.
 */
function switchToActive(tabNumber, tabArticle) {
    tabNumber.classList.add("active-tab");
    tabArticle.classList.add("active-tab");
    tabArticle.classList.remove('hidden');
}

/**
 * Sets the tabs and articles to inactive.
 * @param {string} tabNumberA - A tab you want to set as inactive.
 * @param {string} tabNumberB - A second tab you want to set as inactive.
 * @param {string} tabNumberC - A third tab you want to set as inactive.
 * @param {string} articleA - A article you want to set as inactive.
 * @param {string} articleB - A second article you want to set as inactive.
 * @param {string} articleC - A third article you want to set as inactive.
 */
function switchToInactive(tabNumberA, tabNumberB, tabNumberC, articleA, articleB, articleC) {
    tabNumberA.classList.remove('active-tab');
    tabNumberB.classList.remove('active-tab');
    tabNumberC.classList.remove('active-tab');
    articleA.classList.add('hidden');
    articleB.classList.add('hidden');
    articleC.classList.add('hidden');
}


tab1.addEventListener('click', function (event) {
    // What it removes and adds to itself
    switchToActive(tab1, articleTab1);

    // What it removes or add to other tabs
    switchToInactive(tab2, tab3, tab4, articleTab2, articleTab3, articleTab4);
});

tab2.addEventListener('click', function (event) {
    // What it removes and adds to itself
    switchToActive(tab2, articleTab2);

    // What it removes or add to other tabs
    switchToInactive(tab1, tab3, tab4, articleTab1, articleTab3, articleTab4);
});

tab3.addEventListener('click', function (event) {
    // What it removes and adds to itself
    switchToActive(tab3, articleTab3);
    // What it removes or add to other tabs
    switchToInactive(tab1, tab2, tab4, articleTab1, articleTab2, articleTab4);

});

tab4.addEventListener('click', function (event) {
    // What it removes and adds to itself
    switchToActive(tab4, articleTab4);

    // What it removes or add to other tabs
    switchToInactive(tab1, tab2, tab3, articleTab1, articleTab2, articleTab3);
});
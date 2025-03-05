
let pageNumberList = document.querySelectorAll('#page-list > li');

var activePageNumber;
var anchor;
var activePageLink;
var activeSubPage;
var pageNumber;

/**
 * 
 * @param {*} e 
 * @returns 
 */
function getTarget(e) {
    return e.target
}

/**
 * 
 * @param {*} e 
 */
function activateLink(e) {

    let target = getTarget(e);
    anchor = target;
    if (!anchor.parentElement.classList.contains('active')) {

        activePageNumber.classList.remove('active');
        activeSubPage.classList.remove('active');

        activePageNumber = anchor.parentElement;
        activePageNumber.classList.add('active');

        activePageLink = anchor.getAttribute('href');
        activeSubPage = document.querySelector(activePageLink);
        activeSubPage.classList.add('active');

    }

    if (e.preventDefault()) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

console.log(pageNumberList.length);

for(let i = 0; i < pageNumberList.length; i++){
    pageNumber = pageNumberList[i]; 
    // sets a variable activePageNumber to the page element
    // that has a classname active
    console.log(pageNumber);

    if(pageNumber.classList.contains('active')) {
        activePageNumber = pageNumber;
        anchor = pageNumber.firstElementChild;
        activePageLink = anchor.getAttribute('href');
        activeSubPage = document.querySelector(activePageLink);
    }

    if (pageNumber.addEventListener) {
        pageNumber.addEventListener('click', function(e) {
            activateLink(e);
        }, false);
    } else {
        pageNumber.attachEvent('onclick', function(e) {
            activateLink(e);
        }, false);
    }


}
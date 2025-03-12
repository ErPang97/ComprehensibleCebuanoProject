
/**
 * Retrives the subpage list items from the document
 */
let pageNumberList = document.querySelectorAll('#page-list > li');


var activePageNumber;
var anchor;
var activePageLink;
var activeSubPage;
var pageNumber;

/**
 * Retrieves the element that triggered the event, the target property.
 * @param {*} e - the triggered event
 * @returns 
 */
function getTarget(e) {
    return e.target
}

/**
 * When the anchor tag corresponding to a page number is clicked on,
 * set the page that it references to the "active" class, and remove
 * the "active" class from the current page.
 * @param {*} e - the triggered Event
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

// loop through the pageNumberList, attaching event listeners 
// to each
for(let i = 0; i < pageNumberList.length; i++){
    pageNumber = pageNumberList[i]; 
    // sets a variable activePageNumber to the list element
    // that has has the "active" class
    console.log(pageNumber);

    if(pageNumber.classList.contains('active')) {
        activePageNumber = pageNumber;
        anchor = pageNumber.firstElementChild;
        activePageLink = anchor.getAttribute('href');
        activeSubPage = document.querySelector(activePageLink);
    }

    if (pageNumber.firstElementChild.addEventListener) {
        pageNumber.firstElementChild.addEventListener('click', function(e) {
            activateLink(e);
        }, false);
    } else {
        pageNumber.firstElementChild.attachEvent('onclick', function(e) {
            activateLink(e);
        }, false);
    }
}
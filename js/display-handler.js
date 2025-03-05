

const articleTextElement = document.getElementById("article-text");

// removes the diacritics from aritcle text
function removeDiacritics() {
    const diacriticsRemoved = "Natulog ka na ba?";
    articleTextElement.textContent = diacriticsRemoved;
}

// adds the diacritics from aritcle text
function addDiacritics() {
    const diacriticAdded = "Natúlog ka na ba?";
    articleTextElement.textContent = diacriticAdded;
}

const selectedElement = document.getElementById('diacritics-toggle');

// Event listener for dropdown change
selectedElement.addEventListener('change', function() {
    const selectedValue = selectedElement.value;

    // Update the content display based on the selected option
    if (selectedValue == 'diacritics') {
        addDiacritics();
    } else if (selectedValue == 'plain') {
        removeDiacritics();
    }
});
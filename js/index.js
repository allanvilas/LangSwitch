var texts = {
        "mainTitle": {
            "pt": "Vamos ver se isso funciona!",
            "en": "Lest's test that thing!"
        },
        "subTitle": {
            "pt": "La vamos nós!",
            "en": "Here we goo!"
        },
        // Add more text entries as needed
}

console.log(texts['mainTitle']['en']);

$(document).ready(function() {
    // Default language
    let currentLanguage = "en";

    // Function to change language
    function changeLanguage(language) {
        // Iterate through your text object and update the content
        for (let key in texts) {
            if (texts.hasOwnProperty(key) && texts[key][language]) {
                $(`#${key}`).text(texts[key][language]);
            }
        }
        currentLanguage = language;
    }

    // Event listeners for language buttons
    $("#switchToPortuguese").click(function() {
        changeLanguage("pt");
    });

    $("#switchToEnglish").click(function() {
        changeLanguage("en");
    });

    // Initialize with default language
    changeLanguage(currentLanguage);
});
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('interactions').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showInteractions.js"
        });
    }

    document.getElementById('buttons').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showButtons.js"
        });
    }    

    document.getElementById('required').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showRequiredInputs.js"
        });
    }

    document.getElementById('max').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/getInputMaxLength.js"
        });
    }

    document.getElementById('regex').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showInputRegex.js"
        });
    }

    document.getElementById('alt').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showImageMissingAlt.js"
        });
    }

    document.getElementById('placeholder').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showMissingInputPlaceholders.js"
        });
    }

    document.getElementById('ids').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showSameIds.js"
        });
    }

    document.getElementById('form-action').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/getFormActions.js"
        });
    }

    document.getElementById('data-name').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/getDataNames.js"
        });
    }

    document.getElementById('links').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showAndPrintLinks.js"
        });
    }    

    document.getElementById('emails').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "snippets/showAndPrintEmails.js"
        });
    }      
});


(function showImageMissingAlt () {
    for (let i of document.getElementsByTagName('img')) {
        if (!i.hasAttribute('alt'))
            i.style = i.style + "; border: 4px dashed red;";
    }
})();
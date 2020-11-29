

(function showMissingInputPlaceholders () {
    for (let i of document.getElementsByTagName('input')) {
        if (!i.hasAttribute('placeholder'))
            i.style = i.style + "; border: 4px dashed red;";
        else {
            if (i.placeholder === "")
                i.style = i.style + "; border: 4px dashed red;";
            else
                console.log(i.placeholder);
        }
    }
})();


(function showRequiredInputs () {
    for (let i of document.getElementsByTagName('input')) {
        if (i.hasAttribute('required'))
            i.style = i.style + "; border: 4px dashed red;";
        if (i.hasAttribute('data-val-required')) {
            i.style = i.style + "; border: 4px dashed red;";
            console.log(i.getAttribute('data-val-required'));
        }
    }
})();
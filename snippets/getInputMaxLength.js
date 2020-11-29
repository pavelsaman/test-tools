

(function getInputMaxLength () {
    for (let i of document.getElementsByTagName('input')) {        
        if (i.hasAttribute('data-val-maxlength-max')
            || i.hasAttribute('maxlength')) {            
            console.log(
                i.getAttribute('data-val-maxlength-max') + ";"
                + i.getAttribute('maxlength') + ";"
                + i.getAttribute('data-val-maxlength')
            );
        }
    }
})();
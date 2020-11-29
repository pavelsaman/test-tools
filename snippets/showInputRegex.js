

(function showInputRegex () {
    for (let i of document.getElementsByTagName('input')) {        
        if (i.hasAttribute('data-val-regex')) {
            i.style = i.style + "; border: 4px dashed red;";
            console.log("Msg: \"" + i.getAttribute('data-val-regex') + "\""
                + "; Regex: \"" + i.getAttribute('data-val-regex-pattern')
                + "\""
            );
        }
    }
})();
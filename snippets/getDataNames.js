

(function getDataNames () {
    for (let i of document.getElementsByTagName('*')) {        
        if (i.hasAttribute('data-name')) {            
            console.log(i.getAttribute('data-name'));
        }
    }
})();
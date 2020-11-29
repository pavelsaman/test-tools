

(function getFormActions () {
    for (let i of document.getElementsByTagName('form')) {        
        console.log(i.getAttribute('method').toUpperCase() + " "
            + i.getAttribute('action'));
    }
})();
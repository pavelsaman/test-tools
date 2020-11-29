

(function getFormActions () {
    for (let i of document.getElementsByTagName('form')) {        
        console.log(i.method.toUpperCase() + " "
            + i.action);
    }
})();
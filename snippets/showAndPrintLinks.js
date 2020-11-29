

(function showAndPrintLinks () {
    for (let i of document.getElementsByTagName('a')) {
        if (i.hasAttribute('href')) {
            i.style = i.style + "; border: 4px dashed green;";
            console.log(i.href);
        }
    }
})();

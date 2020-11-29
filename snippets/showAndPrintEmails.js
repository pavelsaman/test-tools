
(function showAndPrintEmails () {
    for (let i of document.getElementsByTagName('*')) {
        if (i.hasAttribute('href')) {
            if (i.href.includes('mailto'))
                console.log(i.href);
        }
    }
})();

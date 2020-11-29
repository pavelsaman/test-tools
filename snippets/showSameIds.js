

(function showSameIds () {
    let all = document.getElementsByTagName('*');
    let ids = {};
    
    for (let el of all) {
        if (el.hasAttribute('id')) {
            if (ids[el.id]) {
                ids[el.id].push(el);
                for (let e of ids[el.id]) {
                    e.style = e.style + "; border: 4px dashed red;";
                }
            } else {
                ids[el.id] = [];
                ids[el.id].push(el);
            }
        }
    }
})();
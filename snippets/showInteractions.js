

(function showInteractions () {   
    const htmlElements = ["input", "button", "select", "a", "label"];
    let interactions = [];

    for (let el of htmlElements) {
        interactions.push(
            Array.prototype.slice.call(document.getElementsByTagName(el))
        );
    }

    for (let i of interactions.flat(1)) {
        i.style = i.style + "; border: 4px dashed green;";
    }
})();
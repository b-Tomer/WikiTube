'use strict'


function onInit() {
    getTubes()
        .then(renderPreviews)
    getWiki()
        .then(renderWiki)
}


function onSearch(input) {
    changeSearch(input)
    getTubes()
        .then(renderPreviews)
    getWiki()
        .then(renderWiki)
}

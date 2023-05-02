'use strict'




function renderWiki(item){
    console.log('item: ', item )
        let strHtml = `
        <h2>${item.title}</h2>
        <div class="">
        ${item.snippet}
        </div>`
        
        document.querySelector('.wiki-container').innerHTML = strHtml
    
}
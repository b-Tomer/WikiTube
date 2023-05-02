'use strict'



function renderPreviews(items) {
    console.log('items: ', items)
    let strHtml = items.map(item => `
    <div onclick="onShowPreview('${item.id}')" class="preview-item">
    <img src="${item.url}">
    </div>`
    )
    document.querySelector('.previews-container').innerHTML = strHtml.join('')
}

function onShowPreview(id) {
    console.log('id: ', id)
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${id}`
}
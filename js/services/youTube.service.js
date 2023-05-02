'use strict'

const CACHE_KEY = 'cache'
let gCache = loadFromStorage(CACHE_KEY) || []
let gSearchKey = 'nina simone'

function getTubes() {
    
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=AIzaSyD-IrQYuNBKk5JnDIzH9NZq4mhB6L5-QPc&q=${gSearchKey}`
    let currSearch = gCache.find(item => item.name === gSearchKey)
    if (currSearch) {
        console.log('exsist: ')
       return Promise.resolve(
            filterInfo(currSearch.data.items)
        )
    } else {
        return axios.get(url)
            .then((res) => {
                let item = {
                    name: gSearchKey,
                    data: res.data
                }
                gCache.push(item)
                saveToStorage(CACHE_KEY, gCache)
                return filterInfo(res.data.items)
            })
    }
}

function changeSearch(input) {
    gSearchKey = input
    console.log('gSearchKey: ', gSearchKey )
}

function filterInfo(items) {
    console.log('items: ', items )
    let filteredInfos = items.map(item => {
        return {
            url: item.snippet.thumbnails.medium.url,
            id: item.id.videoId
        }
    })
    return filteredInfos
}


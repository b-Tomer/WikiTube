'use strict'


function getWiki(){
    const url= `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${gSearchKey}&format=json`
    return axios.get(url)
    .then((res) => res.data.query.search[0]) 
   
}
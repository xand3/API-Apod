function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
let img = document.getElementById("img-apod")

function defineUrl(id, url) {
    if(id == 'img-apod') {
        img.setAttribute("src", url)
    }
}

let info
function main() {
    data = fazGet("https://api.nasa.gov/planetary/apod?api_key=HDQhgkx4GJeyle6mxaeoirveFKMwkOppul5Lhsgo")
    info = JSON.parse(data)
}

let title = document.getElementById("title") 
let caption = document.getElementById("explanation")

function define(titulo) {
    title.innerText = `${info.title}`
}


main()
defineUrl("img-apod", info.url)
console.log(info.title)

console.log(info)

define()
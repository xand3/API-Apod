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
    console.log(info)

    console.log(info.hdurl)

    
}

main()
defineUrl("img-apod", info.url)
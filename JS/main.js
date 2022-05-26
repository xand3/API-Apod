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


const btn = document.querySelector("#send")
btn.addEventListener("click", function(e) {

    e.preventDefault()

    const data = document.querySelector("#date")

    const value = data.value

    console.log(value)
})


let title = document.getElementById("title") 
let caption = document.getElementById("explanation")

function defineTitulo() {
    title.innerText = `${info.title}`
}
function defineExplicacao() {
    caption.innerText = `${info.explanation}`
}



main()

console.log(info)
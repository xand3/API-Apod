const key = "HDQhgkx4GJeyle6mxaeoirveFKMwkOppul5Lhsgo"
let url =  "https://api.nasa.gov/planetary/apod?api_key=HDQhgkx4GJeyle6mxaeoirveFKMwkOppul5Lhsgo" 
let resultadoConvertido
async function fazGet(url) {
    let resultado = await fetch(url)
    resultadoConvertido = await resultado.json()
    console.log(resultadoConvertido)
}

const btn = document.querySelector("#send")
let data
btn.addEventListener("click", async function(e) {

    e.preventDefault()

    data = document.querySelector("#date")

    const value = data.value

    
    let img = document.getElementById("img-apod")
    function defineUrl(id) {
        if(id == 'img-apod') {
            img.setAttribute("src", resultadoConvertido.url)
        }
    }

    defineUrl('img-apod')
})



function main() {
    data = fazGet(url)
}
main()

let title = document.getElementById("title") 
let caption = document.getElementById("explanation")

function defineTitulo() {
    title.innerText = `${info.title}`
}
function defineExplicacao() {
    caption.innerText = `${info.explanation}`
}




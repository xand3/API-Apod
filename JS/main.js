$("#send").click(async function(event) {
    event.preventDefault()
    data = $("#date").val()
    console.log(data)

    if(data != 1) {
        let dados = await fetch("https://api.nasa.gov/planetary/apod?api_key=HDQhgkx4GJeyle6mxaeoirveFKMwkOppul5Lhsgo&date=" + data)
        let dadosConvertidos = await dados.json()
        
        $("#img-apod").attr("src", dadosConvertidos.url) 
        $("#title").text(dadosConvertidos.title)
        $("#explanation").text(dadosConvertidos.explanation)
    }
    $(".form").hide()
})


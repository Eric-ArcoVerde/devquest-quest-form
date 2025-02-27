let campoEntrada = document.querySelectorAll(".entrada")

const botaoPressionado = document.querySelector("form")

botaoPressionado.addEventListener('submit', function (event) {
    event.preventDefault()
    let campoVazio = document.querySelectorAll(".input-text")
    
    campoVazio.forEach(function(item, index){
        if(campoVazio[index].value == ""){
            campoEntrada[index].classList.add("vazio")
            campoEntrada[index].classList.add("input-obrigatorio")
            campoEntrada[index].classList.remove("input-aceito")
        } else {
            campoEntrada[index].classList.add("input-aceito")
            campoEntrada[index].classList.remove("vazio")
            campoEntrada[index].classList.remove("input-obrigatorio")
        }
    })
})
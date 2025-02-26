let campoPreenchido = document.querySelectorAll(".entrada")

const botaoPressionado = document.querySelector("form")

botaoPressionado.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(campoPreenchido);
    let campoVazio = document.querySelectorAll(".input-text")
    
    campoVazio.forEach(function(item, index){
        if(campoVazio[index].value == ""){
            campoPreenchido[index].classList.add("ativo")
            campoPreenchido[index].classList.add("input-obrigatorio")
            campoPreenchido[index].classList.remove("input-aceito")
        } else {
            campoPreenchido[index].classList.add("input-aceito")
            campoPreenchido[index].classList.remove("ativo")
            campoPreenchido[index].classList.remove("input-obrigatorio")
        }
        
    })
})


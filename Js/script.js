const botaoTema = document.querySelector("#botaoTema")

// addEventListener = adiciona um evento
botaoTema.addEventListener("click", mudaTema)

function mudaTema(){
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")
  
    if(botaoTema.checked){
        body.setAttribute('data-bs-theme','dark')
        temaAtual.innerHTML = "Escuro"
    }else{
        body.setAttribute('data-bs-theme','light')
        temaAtual.innerHTML = "Claro"
    }
}
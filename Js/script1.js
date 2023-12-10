// VALIDAÇÃO DE LOGIN
document.getElementById("buttonLogar").addEventListener("click",validarUser);
    
function validarUser(){
    var emailLogar = document.getElementById('emailLogar')
    var senhaLogar = document.getElementById('senhaLogar')

    if(emailLogar.value.length == " " || senhaLogar.value.length == " "){
        alert(`[ERRO] Verifique os dados e tente novamente.`)
    }
    else{
        alert('Parabéns, login realizado com sucesso.')  
    }
}



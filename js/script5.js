document.getElementById("btnEnviar").addEventListener("click",cadastroUser);
var cadastro =[];

    
function cadastroUser(){   
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    let repeteSenha = document.querySelector('#repeteSenha').value;
   
    cadastro.push(email,senha,repeteSenha);

    alert("Senha cadastrada com sucesso! "+cadastro[0])

}
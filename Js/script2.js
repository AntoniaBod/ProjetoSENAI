// CADASTRO DE USUARIO
document.getElementById("btnEnviar").addEventListener("click",cadastroUser);
var cadastro =[];

    
function cadastroUser(){
    let nome = document.querySelector('#nome').value;    
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    let repeteSenha = document.querySelector('#repeteSenha').value;
   
    cadastro.push(nome,email,senha,repeteSenha);

    alert("Cadastro efetuado com sucesso, "+cadastro[0])

}
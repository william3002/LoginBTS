function verificarSenha() {
    const senha = document.getElementById('inputPassaword1').value
    const senha2 = document.getElementById('inputPassaword2').value

    if (senha == senha2) {
        document.getElementById("resultado").style.color = "#008B45"
        document.getElementById("resultado").innerHTML = "Senhas iguais"
    } else {
        document.getElementById("resultado").style.color = "#FF6347"
        document.getElementById("resultado").innerHTML = "As senhas não correspondem"
    }
}

function logar() {
    const email = document.getElementById('inputEmail').value
    const senha = document.getElementById('inputPassaword1').value

    if (email == 'Admin@gmail.com' && senha == 'admin') {
        alert("Bem vindo admin")
    } else {
        alert("E-mail ou senha invalida")
    }
}

function mostrarSenha(){
    let inputPass1 = document.getElementById("inputPassaword1")
    let btnSenha1 = document.getElementById("btn-senha1")    

    if(inputPass1.type === 'password'){
        inputPass1.setAttribute('type', 'text')
        btnSenha1.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass1.setAttribute('type', 'password')
        btnSenha1.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
    
}

function mostrarSenha2(){
    let inputPass2 = document.getElementById("inputPassaword2")
    let btnSenha2 = document.getElementById("btn-senha2")

    if(inputPass2.type === 'password'){
        inputPass2.setAttribute('type', 'text')
        btnSenha2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass2.setAttribute('type', 'password')
        btnSenha2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
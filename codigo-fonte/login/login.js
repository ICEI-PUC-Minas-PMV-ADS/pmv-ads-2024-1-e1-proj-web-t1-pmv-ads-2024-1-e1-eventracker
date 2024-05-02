function login(event) {
    event.preventDefault();
    console.log("entrou na funcao login");
    
    const email = document.getElementsByName("email")[0].value
    console.log("O email ingressado é " + email);

    const senha = document.getElementsByName("senha")[0].value
    console.log("A senha ingressada é " + senha);

    if (email == "" || senha == "") {
        alert("Os campos email e senha são obrigatórios.");
    } else if (email == "admin" && senha == "admin") {
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha incorreta");
    }

    //limpar campos senha e email aqui
    document.getElementsByName("email")[0].value = ""
    document.getElementsByName("senha")[0].value = ""
}


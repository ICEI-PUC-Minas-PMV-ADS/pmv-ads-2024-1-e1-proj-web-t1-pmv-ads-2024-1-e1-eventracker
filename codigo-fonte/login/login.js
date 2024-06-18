
function login(event) {
    event.preventDefault();
    console.log("entrou na funcao login");

    const email = document.getElementsByName("email")[0].value
    const senha = document.getElementsByName("senha")[0].value
    console.log("O email ingressado é " + email);
    console.log("A senha ingressada é " + senha);

    if (email == "" || senha == "") {
        alert("Os campos email e senha são obrigatórios.");
    } else if (!temArroba(email)) {
        alert("Erro, o email não tem @");
    } else {
        console.log("Deveria agora navegar pro home");
        alert("Login realizado com sucesso!");
        window.location.href = "../home/index.html";
    }

}
function temArroba(dado) {
    return dado.includes('@')
}


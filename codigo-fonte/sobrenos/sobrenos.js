function openDrawer() {
    console.log("clicou no hamburguer");

    let drawer = document.getElementById("nav_drawer");

    console.log("variavel drawer tem o valor de: " + drawer);

    drawer.style.display = 'block';
}

function closeDrawer() {
    console.log("clicou no X");

    let drawer = document.getElementById("nav_drawer");

    console.log("variavel drawer tem o valor de: " + drawer);

    drawer.style.display = 'none';
}

function goToLogin() {
    console.log("clicou no botao login");
    window.location.href = "../login/login.html";

}

function goToCadastro() {
    console.log("clicou no botao cadastro");
    window.location.href = "../nova-conta/index.html";
}

document.addEventListener('DOMContentLoaded', function () {
    //Inicio da funcao

    console.log("Pagina carregada, deveria chamar api de clima agora");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather?key=c83dc503&city_name=Belo%20Horizonte,%20MG', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            let responseJson = JSON.parse(xhr.responseText);

            let temperatura = responseJson.results.temp
            
            console.log("Temperatura:", temperatura)

            let tempH1 = document.getElementById("temperature_text") 
            tempH1.textContent = "Veja a temperatura de Belo Horizonte e escolha seu evento ideal: " + temperatura + "º"

        } else {
            console.error('Erro na requisição:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Erro na requisição');
    };
    xhr.send();


    //Fim da funcao
});
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
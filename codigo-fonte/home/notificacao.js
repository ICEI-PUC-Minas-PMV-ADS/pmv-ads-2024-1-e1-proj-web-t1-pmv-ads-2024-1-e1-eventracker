const botao = document.getElementById('notificacao')
const modal = document.querySelector('dialog');
const botaoFechar = document.getElementById('fechar-dialog')

botao.onclick = function () {
    modal.showModal();
}

botaoFechar.onclick = function () {
    modal.close();
}
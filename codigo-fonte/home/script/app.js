const corpo = document.getElementById('mainDiv');
const evento = JSON.parse(localStorage.getItem('evento'));

const novoCardEvento = `
    <div class="col-10 col-md-4 mb-5">
        <div class="card cor-card" id="novoCard">
            <img src="${evento.img}" alt="novo card" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${evento.evento}</h5>
                <div class="card-text-wrapper">
                    <p class="card-text"><span class="info">Data:</span> ${evento.data}</p>
                    <p class="card-text"><span class="info">Endereço:</span> ${evento.endereco}</p>
                    <p class="card-text"><span class="info">Horário de início:</span> ${evento.h}</p>
                    <p class="card-text"><span class="info">Acessibilidade para cadeirantes:</span> ${evento.acessibilidade ? "SIM": "NÃO"}</p>
                    <p class="card-text"><span class="info">Intérprete de Libras disponível:</span> ${evento.interprete ? "SIM" : "NÃO"}</p>
                    <p class="card-text"><span class="info">Sistema de áudio descritivo:</span> ${evento.audio ? "SIM" : "NÃO"}</p>
                    <br>
                </div>
                <div class="card-footer d-flex justify-content-center btn-container align-content-end">
                    <a href="novo-evento.html" class="btn btn-primary mt-auto">Saiba Mais</a>
                </div>
            </div>
        </div>
    </div>
`;


corpo.insertAdjacentHTML('beforeend', novoCardEvento);


const botao = document.getElementById('notificacao')
const modal = document.querySelector('dialog');
const botaoFechar = document.getElementById('fechar-dialog')

botao.onclick = function () {
    modal.showModal();
}

botaoFechar.onclick = function () {
    modal.close();
}
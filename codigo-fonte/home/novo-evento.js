document.addEventListener("DOMContentLoaded", function() {
    const corpo = document.getElementById('novoEventoDiv');
    const evento = JSON.parse(localStorage.getItem('evento'));

    const novoDetalhe = `
            <h1 class="text-center titulo-detalhe">${evento.evento}</h1>
            <div class="d-flex justify-content-center">
                <img src="${evento.img}" width="400" height="300" alt="novo evento" class="img-fluid rounded shadow" id="img-novoevento">
            </div>
            <div class="container align-content-center align-items-center">
                <p class="txt-padrao"><span class="info">Data:</span> ${evento.data}</p>
                <p class="txt-padrao"><span class="info">Endereço:</span> ${evento.endereco}</p>
                <p class="txt-padrao"><span class="info">Horário de início:</span> ${evento.h}</p>
                <p class="txt-padrao"><span class="info">Acessibilidade para cadeirantes:</span> ${evento.acessibilidade ? "SIM" : "NÃO"}</p>
                <p class="txt-padrao"><span class="info">Intérprete de Libras disponível:</span> ${evento.interprete ? "SIM" : "NÃO"}</p>
                <p class="txt-padrao"><span class="info">Sistema de áudio descritivo:</span> ${evento.audio ? "SIM" : "NÃO"}</p>
                <br>
                <p class="txt-padrao">
                    <span class="info"></span>
                    ${evento.description}
                </p>
            </div>
            <div class="container d-flex justify-content-center align-items-center botao">
                <a href="#" class="btn btn-primary confirmar-presenca">Confirmar Presença</a>
            </div>
        `;

    corpo.insertAdjacentHTML('beforeend', novoDetalhe);
});


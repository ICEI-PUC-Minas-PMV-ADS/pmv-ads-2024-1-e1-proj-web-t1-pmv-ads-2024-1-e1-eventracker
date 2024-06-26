
const nomeEvento = document.getElementById('nomeEvento');
const enderecoEvento = document.getElementById('enderecoEvento');
const dataEvento = document.getElementById('dataEvento');
const horario = document.getElementById('horario');
const descricao = document.getElementById('descricao');
const imagemEvento = document.getElementById('imagemEvento');

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    validarFormulario();
});

function setError(elemento, msg) {
    const erro = elemento.parentElement.querySelector('.error');
    erro.textContent = msg;
    erro.style.color = '#f50057';
}

function validarFormulario() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });

    let eValido = true;

    if (nomeEvento.value.trim() === '' || !(nomeEvento.value.trim().length < 50)) {
        setError(nomeEvento, 'O nome do evento é obrigatório e deve ser menor que 50 caracteres.');
        eValido = false;
    }

    if (enderecoEvento.value.trim() === '') {
        setError(enderecoEvento, 'O endereço do evento é obrigatório.');
        eValido = false;
    }

    if (dataEvento.value === '') {
        setError(dataEvento, 'A data do evento é obrigatória.');
        eValido = false;
    }

    if (horario.value === '') {
        setError(horario, 'O horário do evento é obrigatório.');
        eValido = false;
    }

    if (descricao.value.trim() === '') {
        setError(descricao, 'A descrição do evento é obrigatória.');
        eValido = false;
    }

    if (imagemEvento.files.length === 0) {
        setError(imagemEvento, 'A imagem do evento é obrigatória.');
        eValido = false;
    }

    if (eValido) {
        console.log('Formulário válido.');

        const file = imagemEvento.files[0];
        const scanner = new FileReader();
        const acCadeirantes = document.getElementById('acessibilidadeCadeirantes').checked;
        const interprete = document.getElementById('interpreteLibras').checked;
        const audioDescritivo = document.getElementById('audioDescritivo').checked;
        let aux = dataEvento.value;
        console.log(aux);
        console.log(aux.length);
        const ano = aux.slice(0, 4);
        console.log(ano);
        const mes = aux.slice(5, 7)
        console.log(mes);
        const dia = aux.slice(8, 11);
        console.log(dia);
        aux = `${dia}/${mes}/${ano}`;
        console.log(aux);

        scanner.onload = function (e) {
            const imgParaStr64 = e.target.result;

            const dadosCadastrados = {
                evento: nomeEvento.value,
                endereco: enderecoEvento.value,
                data: aux,
                h: horario.value,
                description: descricao.value,
                img: imgParaStr64,
                acessibilidade: acCadeirantes,
                interprete: interprete,
                audio: audioDescritivo,
                eventoCadastrado: eValido
            };

            const dadosStr = JSON.stringify(dadosCadastrados);
            localStorage.setItem('evento', dadosStr);

            console.log('Dados salvos no local storage:', dadosCadastrados);

            window.location.href = "../home/index.html";

            alert('Evento cadastrado com sucesso!');

        };

        scanner.readAsDataURL(file);
    }
}


const botao = document.getElementById('notificacao')
const modal = document.querySelector('dialog');
const botaoFechar = document.getElementById('fechar-dialog')

botao.onclick = function () {
    modal.showModal();
}

botaoFechar.onclick = function () {
    modal.close();
}

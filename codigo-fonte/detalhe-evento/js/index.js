const nomeEvento = document.getElementById('nomeEvento');
const enderecoEvento = document.getElementById('enderecoEvento');
const dataEvento = document.getElementById('dataEvento');
const horario = document.getElementById('horario');
const descricao = document.getElementById('descricao');
const imagemEvento = document.getElementById('imagemEvento');

document.getElementById('form').addEventListener('submit', function(e)  {
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
        // Submissão do formulário ou outra lógica
        console.log('Formulário válido.');
    }
}




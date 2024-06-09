const NOME = document.getElementById('nomeCompleto');
const EMAIL = document.getElementById('email');
const CONFIRMAR_EMAIL = document.getElementById('confirmarEmail');
const SENHA = document.getElementById('senha');
const CONFIRMAR_SENHA = document.getElementById('confirmarSenha');
const TELEFONE = document.getElementById('telefone');

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

    if (NOME.value.trim() === '' || NOME.value.trim().length >= 60) {
        setError(NOME, 'O nome é obrigatório e deve ser menor que 60 caracteres.');
        eValido = false;
    }

    if ((EMAIL.value.trim() !== CONFIRMAR_EMAIL.value.trim()) || EMAIL.value.trim() === '' || CONFIRMAR_EMAIL.value.trim() === '') {
        setError(EMAIL, 'E-mail inválido ou os campos não correspondem.');
        setError(CONFIRMAR_EMAIL, 'E-mail inválido ou os campos não correspondem.');
        eValido = false;
    }

    if ((SENHA.value.trim() !== CONFIRMAR_SENHA.value.trim()) || SENHA.value.trim() === '' || CONFIRMAR_SENHA.value.trim() === '') {
        setError(SENHA, 'As senhas não correspondem.');
        setError(CONFIRMAR_SENHA, 'As senhas não correspondem.');
        eValido = false;
    }

    if (TELEFONE.value.trim().length < 10 || TELEFONE.value.trim().length > 11) {
        setError(TELEFONE, 'Número de telefone inválido.');
        eValido = false;
    }

    if (eValido) {
        console.log('Formulário válido.');

        const novaConta = {
            nome: NOME.value,
            email: EMAIL.value,
            senha: SENHA.value,
            telefone: TELEFONE.value
        };

        const strNovaConta = JSON.stringify(novaConta);
        localStorage.setItem('novaConta', strNovaConta);

        console.log('String armazenada no localStorage:', localStorage.getItem('novaConta'));
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
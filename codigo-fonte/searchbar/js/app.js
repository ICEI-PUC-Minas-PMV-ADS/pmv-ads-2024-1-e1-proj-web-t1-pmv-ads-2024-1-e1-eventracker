/*
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search-icon').addEventListener('click', applyCombinedFilters);
  document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      applyCombinedFilters();
    }
  });

  document.querySelector('#applyFilters').addEventListener('click', applyCombinedFilters);

  function applyCombinedFilters() {
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    const selectedCategory = document.querySelector('#eventType').value.toLowerCase();
    const accessible = document.querySelector('#accessible').checked;
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
      const title = event.querySelector('h1').textContent.toLowerCase();
      const description = event.querySelector('p').textContent.toLowerCase();
      const category = event.getAttribute('data-caracteristica').toLowerCase();
      const isAccessible = event.getAttribute('data-accessible') === 'true';

      const matchesSearchTerm = (title.includes(searchTerm) || description.includes(searchTerm));
      const matchesCategory = (selectedCategory === '' || category === selectedCategory);
      const matchesAccessibility = (!accessible || (accessible && isAccessible));

      if (matchesSearchTerm && matchesCategory && matchesAccessibility) {
        event.classList.remove('hidden');
      } else {
        event.classList.add('hidden');
      }
    });
  }
});
*/

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search-icon').addEventListener('click', applySearchFilter);
  document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      applySearchFilter();
    }
  });

  function applySearchFilter() {
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
      const title = event.querySelector('h1').textContent.toLowerCase();
      const description = event.querySelector('p').textContent.toLowerCase();

      const matchesSearchTerm = (title.includes(searchTerm) || description.includes(searchTerm));

      if (matchesSearchTerm) {
        event.classList.remove('hidden');
      } else {
        event.classList.add('hidden');
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const eventosStr = localStorage.getItem('eventos');
  if (!eventosStr) {
    localStorage.setItem('eventos', '[]');
  }
  const eventos = JSON.parse(localStorage.getItem('eventos'));
  const dadosStr = localStorage.getItem('evento');
  if (dadosStr) {
    const dadosCadastrados = JSON.parse(dadosStr);
    const eventoAlreadyExists = eventos.find(evento => evento.evento === dadosCadastrados.evento);
    if (!eventoAlreadyExists) {
      eventos.push(dadosCadastrados);
      localStorage.setItem('eventos', JSON.stringify(eventos));
    }
  }

  eventos.forEach(evento => {
    const eventoHTML = `
      <div class="event">
        <img src="${evento.img}" alt="${evento.evento}">
        <div class="event-details">
          <h1>${evento.evento}</h1>
          <p>Data: ${evento.data.split('-').reverse().join('/')}<br>
          Endereço: ${evento.endereco}<br>
          Horário de início: ${evento.h.replace(':', 'h')}<br>
          <p>${evento.description}</p>
        </div>
      </div>
    `;
    document.querySelector('.event-container').insertAdjacentHTML('beforeend', eventoHTML);
  });
});

const botao = document.getElementById('notificacao')
const modal = document.querySelector('dialog');
const botaoFechar = document.getElementById('fechar-dialog')

botao.onclick = function () {
  modal.showModal();
}

botaoFechar.onclick = function () {
  modal.close();
}
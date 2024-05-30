document.querySelector('.search-bar').addEventListener('input', searchEvents);
document.querySelector('.filter-icon').addEventListener('click', filterEvents);

function searchEvents() {
  const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
  const events = document.querySelectorAll('.event');
  events.forEach(event => {
    const title = event.querySelector('h1').textContent.toLowerCase();
    const description = event.querySelector('p').textContent.toLowerCase();
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      event.classList.remove('hidden');
    } else {
      event.classList.add('hidden');
    }
  });
}

function filterEvents() {
  const filterType = prompt("Enter filter characteristic (e.g., music, food):");
  const events = document.querySelectorAll('.event');

  if (filterType === null || filterType.trim() === "") {
    events.forEach(event => {
      event.classList.remove('hidden');
    });
    return;
  }

  events.forEach(event => {
    if (event.dataset.characteristic.toLowerCase() === filterType.toLowerCase()) {
      event.classList.remove('hidden');
    } else {
      event.classList.add('hidden');
    }
  });
}

function showAllEvents() {
  const events = document.querySelectorAll('.event');
  events.forEach(event => {
    event.classList.remove('hidden');
  });
}


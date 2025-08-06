// Script para búsqueda en tiempo real de lociones

document.addEventListener('DOMContentLoaded', function() {
  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search-input');
  const perfumeCards = document.querySelectorAll('.perfume-card-item');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const value = searchInput.value.toLowerCase();
      perfumeCards.forEach(card => {
        const nombre = card.getAttribute('data-nombre') ? card.getAttribute('data-nombre').toLowerCase() : card.querySelector('.perfume-name').textContent.toLowerCase();
        if (nombre.includes(value)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}); 
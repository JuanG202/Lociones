// Script mejorado para interactividad avanzada

document.addEventListener('DOMContentLoaded', function() {
  // Búsqueda en tiempo real con animaciones
  const searchInput = document.getElementById('search-input');
  const perfumeCards = document.querySelectorAll('.perfume-card-item');
  
  // Animación de entrada escalonada para las tarjetas
  function animateCardsOnLoad() {
    perfumeCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px) scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 100); // Animación escalonada cada 100ms
    });
  }

  // Búsqueda mejorada con animaciones
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const value = searchInput.value.toLowerCase();
      let visibleCount = 0;
      
      perfumeCards.forEach((card, index) => {
        const nombre = card.getAttribute('data-nombre') ? 
          card.getAttribute('data-nombre').toLowerCase() : 
          card.querySelector('.perfume-name').textContent.toLowerCase();
        
        if (nombre.includes(value)) {
          card.style.display = '';
          card.style.animation = `slideInUp 0.5s ease-out ${index * 0.05}s both`;
          visibleCount++;
        } else {
          card.style.animation = 'fadeOut 0.3s ease-in both';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
      
      // Efecto de "no results" si no hay coincidencias
      if (visibleCount === 0 && value.length > 0) {
        showNoResults();
      } else {
        hideNoResults();
      }
    });
  }

  // Efectos de hover mejorados para las tarjetas
  perfumeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 16px 40px rgba(124, 58, 237, 0.2)';
      
      // Efecto de brillo en la imagen
      const image = this.querySelector('.perfume-image');
      if (image) {
        image.style.transform = 'scale(1.05) rotate(2deg)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 16px rgba(124, 58, 237, 0.1)';
      
      const image = this.querySelector('.perfume-image');
      if (image) {
        image.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });

  // Efectos de click en botones de WhatsApp
  const whatsappButtons = document.querySelectorAll('.whatsapp-btn-card');
  whatsappButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Efecto de ripple
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Parallax effect para el fondo
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Efecto de carga inicial
  setTimeout(animateCardsOnLoad, 300);
});

// Función para mostrar mensaje de "no results"
function showNoResults() {
  let noResults = document.getElementById('no-results');
  if (!noResults) {
    noResults = document.createElement('div');
    noResults.id = 'no-results';
    noResults.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #7c3aed; font-size: 1.2rem;">
        <div style="font-size: 3rem; margin-bottom: 20px;">🔍</div>
        <p>No se encontraron fragancias con ese nombre</p>
        <p style="font-size: 0.9rem; color: #6d28d9; margin-top: 10px;">
          Intenta con otro término de búsqueda
        </p>
      </div>
    `;
    noResults.style.animation = 'fadeIn 0.5s ease-out';
    document.querySelector('.perfume-grid').appendChild(noResults);
  }
}

// Función para ocultar mensaje de "no results"
function hideNoResults() {
  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.style.animation = 'fadeOut 0.3s ease-in';
    setTimeout(() => {
      noResults.remove();
    }, 300);
  }
}

// CSS adicional para efectos
const additionalCSS = `
  @keyframes fadeOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.9); }
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .perfume-card-item {
    animation-delay: 0s;
  }
`;

// Inyectar CSS adicional
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style); 
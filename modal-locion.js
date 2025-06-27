// Script para mostrar el modal de la loción seleccionada
document.addEventListener('DOMContentLoaded', function() {
  function setupModal(listId) {
    const list = document.getElementById(listId);
    if (!list) return;
    const modal = document.getElementById('modal-locion');
    const closeModal = document.getElementById('close-modal');
    const nombre = document.getElementById('modal-nombre');
    const tipo = document.getElementById('modal-tipo');
    const descripcion = document.getElementById('modal-descripcion');
    const valor = document.getElementById('modal-valor');
    const imagen = document.getElementById('modal-imagen');
    const whatsappBtn = document.getElementById('modal-whatsapp');

    list.querySelectorAll('li').forEach(function(item) {
      item.addEventListener('click', function() {
        nombre.textContent = item.getAttribute('data-nombre');
        tipo.textContent = 'Tipo: ' + item.getAttribute('data-tipo');
        descripcion.textContent = item.getAttribute('data-descripcion');
        valor.textContent = 'Valor: ' + item.getAttribute('data-valor');
        imagen.src = 'assets/frasco.jpg';
        // WhatsApp
        const locion = item.getAttribute('data-nombre');
        const valorLocion = item.getAttribute('data-valor');
        const mensaje = encodeURIComponent('Hola, quiero pedir la loción: ' + locion + ' (Valor: ' + valorLocion + ')');
        // Cambia el número por tu número real de WhatsApp en formato internacional, por ejemplo 5212345678901
        whatsappBtn.href = 'https://wa.me/573046640221?text=' + mensaje;
        modal.style.display = 'block';
      });
    });

    closeModal.onclick = function() {
      modal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
  setupModal('perfume-list-dama');
  setupModal('perfume-list-caballero');
}); 
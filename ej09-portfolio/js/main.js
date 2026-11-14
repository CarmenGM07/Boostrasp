// ============================================================
// JavaScript del portfolio
// ============================================================

// Validación de formularios de Bootstrap (ya lo hicimos en el Ejercicio 7)
document.querySelectorAll('.needs-validation').forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});


const formulario = document.querySelector('#contacto form');
  formulario.setAttribute('novalidate', '');
  formulario.action ='https://formsubmit.co/carmengandul@icloud.com';
  formulario.method = 'POST';


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contacto-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validación de nombre
        if (!nombreInput.value.trim()) {
            openPopupError('Por favor, introduce tu nombre.');
            return;
        }

        // Validación de correo
        if (!emailInput.value.trim()) {
            openPopupError('Por favor, introduce tu correo electrónico.');
            return;
        }

        if (!emailPattern.test(email)) {
            openPopupError('Por favor, introduce una dirección de correo electrónico válida.');
            return; 
        }

        // Validación de mensaje
        if (!mensajeInput.value.trim()) {
            openPopupError('Por favor, introduce tu mensaje.');
            return;
        }

        openPopupSuccess('Mensaje enviado correctamente.');
    });
});


function openPopupSuccess(message) {
    var popupSuccess = document.getElementById('popup-success');
    var popupMessageSuccess = document.getElementById('popup-message-success');
    popupMessageSuccess.textContent = message;
    popupSuccess.style.display = 'block';
}


function closePopupSuccess() {
    var popupSuccess = document.getElementById('popup-success');
    popupSuccess.style.display = 'none';
}

function openPopupError(message) {
    var popupError = document.getElementById('popup-error');
    var popupMessageError = document.getElementById('popup-message-error');
    popupMessageError.textContent = message;
    popupError.style.display = 'block';
}


function closePopupError() {
    var popupError = document.getElementById('popup-error');
    popupError.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            openPopupError('Por favor, introduce una dirección de correo electrónico válida.');
            return; 
        } else {

            openPopupSuccess('Mensaje enviado correctamente.');

        }
    });
});

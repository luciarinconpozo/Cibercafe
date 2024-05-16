function openPopupSuccess(message) {
    const popupSuccess = document.getElementById('popup-success');
    const popupMessageSuccess = document.getElementById('popup-message-success');
    popupMessageSuccess.textContent = message;
    popupSuccess.style.display = 'block';
}

function closePopupSuccess() {
    const popupSuccess = document.getElementById('popup-success');
    popupSuccess.style.display = 'none';
}

function openPopupError(message) {
    const popupError = document.getElementById('popup-error');
    const popupMessageError = document.getElementById('popup-message-error');
    popupMessageError.textContent = message;
    popupError.style.display = 'block';
}

function closePopupError() {
    const popupError = document.getElementById('popup-error');
    popupError.style.display = 'none';
}

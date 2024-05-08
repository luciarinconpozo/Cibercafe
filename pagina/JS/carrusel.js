document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector('.carrusel');
    const imagenes = carrusel.querySelectorAll('img');
    let indiceImagenActual = 0;

    function mostrarImagen(indice) {
        imagenes.forEach(function(img, index) {
            if (index === indice) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    function siguienteImagen() {
        indiceImagenActual++;
        if (indiceImagenActual >= imagenes.length) {
            indiceImagenActual = 0;
        }
        mostrarImagen(indiceImagenActual);
    }

    function anteriorImagen() {
        indiceImagenActual--;
        if (indiceImagenActual < 0) {
            indiceImagenActual = imagenes.length - 1;
        }
        mostrarImagen(indiceImagenActual);
    }

    document.getElementById('btnAnterior').addEventListener('click', anteriorImagen);
    document.getElementById('btnSiguiente').addEventListener('click', siguienteImagen);

    mostrarImagen(indiceImagenActual);
});

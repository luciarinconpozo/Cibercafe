// Espera a que se cargue todo el contenido HTML del documento antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase "carrusel_productos" y los guarda en la variable "carruseles"
    const carruseles = document.querySelectorAll('.carrusel_productos');

    // Itera sobre cada elemento "carrusel_productos" encontrado
    carruseles.forEach(carrusel => {
        // Variable para almacenar el índice del objeto actual en el carrusel
        let currentIndex = 0;

        // Selecciona todos los elementos con la clase "objeto" dentro del carrusel actual y los guarda en la variable "objetos"
        const objetos = carrusel.querySelectorAll('.objeto');

        // Calcula el número total de objetos en el carrusel
        const totalObjetos = objetos.length;

        // Función para mostrar el objeto actual en el carrusel
        function mostrarObjeto(index) {
            // Modifica el estilo del carrusel para mostrar el objeto correspondiente
            carrusel.querySelector('.carrusel').style.transform = `translateX(-${index * 100}%)`;
        }

        // Función para avanzar al siguiente objeto en el carrusel
        function siguienteObjeto() {
            // Incrementa el índice del objeto actual
            currentIndex++;

            // Si se alcanza el final del carrusel, reinicia al primer objeto
            if (currentIndex >= totalObjetos) {
                currentIndex = 0;
            }

            // Muestra el objeto actual
            mostrarObjeto(currentIndex);
        }

        // Función para retroceder al objeto anterior en el carrusel
        function anteriorObjeto() {
            // Decrementa el índice del objeto actual
            currentIndex--;

            // Si se alcanza el inicio del carrusel, va al último objeto
            if (currentIndex < 0) {
                currentIndex = totalObjetos - 1;
            }

            // Muestra el objeto actual
            mostrarObjeto(currentIndex);
        }

        // Agrega event listeners a los botones de siguiente y anterior dentro del carrusel actual
        carrusel.querySelector('.botones_carrusel .next').addEventListener('click', siguienteObjeto);
        carrusel.querySelector('.botones_carrusel .prev').addEventListener('click', anteriorObjeto);
    });
});

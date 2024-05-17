// Espera a que se cargue el DOM antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase "carrusel"
    const carruseles = document.querySelectorAll(".carrusel");
  
    // Itera sobre cada carrusel encontrado
    carruseles.forEach(carrusel => {
      // Busca todas las figuras dentro del carrusel actual
      const carruselFiguras = carrusel.querySelectorAll("figure");
      // Calcula el número total de imágenes en el carrusel actual
      const numImagenes = carruselFiguras.length;
      // Inicializa un contador para el índice de la imagen actual
      let contadorIndex = 0;
  
      // Establece un intervalo para cambiar las imágenes cada 5 segundos
      setInterval(() => {
        // Incrementa el contador de índice
        contadorIndex++;
        // Si el contador excede el número de imágenes, vuelve al principio
        if (contadorIndex >= numImagenes) {
          contadorIndex = 0;
        }
        // Obtiene la anchura total del carrusel
        const anchuraCarrusel = carrusel.scrollWidth;
        // Obtiene la anchura de una sola imagen dentro del carrusel
        const anchuraImagen = carruselFiguras[0].offsetWidth;
        // Calcula el desplazamiento necesario para mostrar la próxima imagen
        const desplazamiento = contadorIndex * anchuraImagen;
        // Si el desplazamiento supera la anchura total del carrusel, vuelve al principio con una animación suave
        if (desplazamiento >= anchuraCarrusel) {
          carrusel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // De lo contrario, desplaza el carrusel para mostrar la próxima imagen con una animación suave
          carrusel.scrollTo({ left: desplazamiento, behavior: 'smooth' });
        }
      }, 2500); // Intervalo de 5 segundos
    });
});



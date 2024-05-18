const calificacionTot = 0;

document.getElementsByClassName("enviar")[0].addEventListener("click", function() {
    let calificacion = 0;

    const servicioEmplead = document.querySelector('input[name="1"]:checked');
    const tiempoEspera = document.querySelector('input[name="2"]:checked');
    const comodidad = document.querySelector('input[name="3"]:checked');

    if (servicioEmplead) {
        if (servicioEmplead.className === "menos4") {
            calificacion -= 4;
        } else if (servicioEmplead.className === "menos2") {
            calificacion -= 2;
        } else if (servicioEmplead.className === "mas2") {
            calificacion += 2;
        } else if (servicioEmplead.className === "mas4") {
            calificacion += 4;
        }
    }

    if (tiempoEspera) {
        if (tiempoEspera.className === "menos4") {
            calificacion -= 4;
        } else if (tiempoEspera.className === "menos2") {
            calificacion -= 2;
        } else if (tiempoEspera.className === "mas2") {
            calificacion += 2;
        } else if (tiempoEspera.className === "mas4") {
            calificacion += 4;
        }
    }

    if (comodidad) {
        if (comodidad.className === "menos4") {
            calificacion -= 4;
        } else if (comodidad.className === "menos2") {
            calificacion -= 2;
        } else if (comodidad.className === "mas2") {
            calificacion += 2;
        } else if (comodidad.className === "mas4") {
            calificacion += 4;
        }
    }

    alert("Has calificado la pagina con: "+calificacion);
    calificacionTot += calificacion; 

});

document.getElementsByClassName("resetear")[0].addEventListener("click", function() {
    location.reload();
});

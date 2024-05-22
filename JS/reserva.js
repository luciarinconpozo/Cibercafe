//Los label flotantes
document.getElementById("nombre").addEventListener("focus", function () {
    document.getElementById("labelFlotanteNombre").style.top = "0px";
    document.getElementById("labelFlotanteNombre").style.fontSize = "10px";
});

document.getElementById("nombre").addEventListener("blur", function () {
    const nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("labelFlotanteNombre").style.top = "30px";
        document.getElementById("labelFlotanteNombre").style.fontSize = "15px";
    }
});


document.getElementById("correo").addEventListener("focus", function () {
    document.getElementById("labelFlotanteCorreo").style.top = "0px";
    document.getElementById("labelFlotanteCorreo").style.fontSize = "10px";
});

document.getElementById("correo").addEventListener("blur", function () {
    const correo = document.getElementById("correo").value;
    if (correo === "") {
        document.getElementById("labelFlotanteCorreo").style.top = "30px";
        document.getElementById("labelFlotanteCorreo").style.fontSize = "15px";
    }
});


document.getElementById("telefono").addEventListener("focus", function () {
    document.getElementById("labelFlotanteTelefono").style.top = "0px";
    document.getElementById("labelFlotanteTelefono").style.fontSize = "10px";
});

document.getElementById("telefono").addEventListener("blur", function () {
    const telefono = document.getElementById("telefono").value;
    if (telefono === "") {
        document.getElementById("labelFlotanteTelefono").style.top = "30px";
        document.getElementById("labelFlotanteTelefono").style.fontSize = "15px";
    }
});

function validandoFormulario() {
    document.getElementById("reiniciarReserva").addEventListener("click", function() {
        //Quitar los errores al reiniciar
        document.getElementById("errores").style.display = "none";

        const formularioReserva = document.getElementById("formularioReserva");
        formularioReserva.reset();

        //Reestablecer labels
        const inputs = formularioReserva.querySelectorAll("input");
        inputs.forEach(input => {
            input.dispatchEvent(new Event('blur'));
        });
    });
    
    //Accedo a los datos
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const cantidad = document.getElementById("cantidad").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    let errores = [];

    //Fecha
    if (fecha === "") {
        errores.push("Por favor, ingrese una fecha");
    };
    //Hora
    if (hora === "") {
        errores.push("Por favor, seleccione una hora")
    };
    //Cantidad
    if (cantidad === 0) {
        errores.push('Por favor, ingrese el número de asistentes');
    };

    //Nombre
    if (nombre === "") {
        errores.push('Por favor, ingrese su nombre');
    };

    //Correo
    if (correo === "") {
        errores.push("Por favor, ingresa tu correo electrónico");
    } else {
        let expresionCorreo = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!expresionCorreo.test(correo)) {
            errores.push("Por favor, ingrese una direccion de correo válida")
        };
    };

    // Validar que el teléfono no esté vacío
    if (telefono === "") {
        errores.push("Ingrese su número de teléfono");
    } else {
        let expresion= /^[0-9]{9}$/;
        if (!expresion.test(telefono)) {

            errores.push("El telefono debe tener minimo nueve digitos");
        };
    };

    //Mostrar Errores
  
    if(errores.length > 0){
        mostrarErrores(errores);
        return false;
    } else {
        alert("Su reserva ha sido realizada con éxito")
    }

    return true;
};

//De la pizarra del otro día, con esto se forma la caja roja si hay errores
function mostrarErrores(errores) {
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML = "";
    divErrores.style.display = "block";

    let ul = document.createElement("ul");

    errores.forEach(function(error) {
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

    divErrores.appendChild(ul);
}
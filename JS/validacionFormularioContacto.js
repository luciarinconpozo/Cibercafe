function validaFormularioContacto() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById('mensaje').value;
    
    let errores = [];

    // Validaciones
    if (nombre.trim() === "") {
        errores.push("Por favor, ingresa tu nombre");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        errores.push("Por favor, ingresa tu correo electrónico.");
    } else if (!emailPattern.test(email)) {
        errores.push("Por favor, ingresa un correo electrónico válido.");
    }

    if (mensaje.trim() === "") {
        errores.push("Por favor, ingresa tu mensaje.");
    }

    //Mostrar errores
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }else {
        mostrarConfirmacion();
        return true;
    }
}

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

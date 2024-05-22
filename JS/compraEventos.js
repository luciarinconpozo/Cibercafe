//del Fieldset
document.getElementById("direccion").addEventListener("focus", function () {
    document.getElementById("labelFlotanteDireccion").style.top = "-20px";
    document.getElementById("labelFlotanteDireccion").style.fontSize = "10px";
});

document.getElementById("direccion").addEventListener("blur", function () {
    const direccion = document.getElementById("direccion").value;
    if (direccion === "") {
        document.getElementById("labelFlotanteDireccion").style.top = "0px";
        document.getElementById("labelFlotanteDireccion").style.fontSize = "15px";
    }
});


document.getElementById("ciudad").addEventListener("focus", function () {
    document.getElementById("labelFlotanteCiudad").style.top = "-20px";
    document.getElementById("labelFlotanteCiudad").style.fontSize = "10px";
});

document.getElementById("ciudad").addEventListener("blur", function () {
    const ciudad = document.getElementById("ciudad").value;
    if (ciudad === "") {
        document.getElementById("labelFlotanteCiudad").style.top = "0px";
        document.getElementById("labelFlotanteCiudad").style.fontSize = "15px";
    }
});


document.getElementById("codigoPostal").addEventListener("focus", function () {
    document.getElementById("labelFlotanteCodigoPostal").style.top = "-20px";
    document.getElementById("labelFlotanteCodigoPostal").style.fontSize = "10px";
});

document.getElementById("codigoPostal").addEventListener("blur", function () {
    const codigoPostal = document.getElementById("codigoPostal").value;
    if (codigoPostal === "") {
        document.getElementById("labelFlotanteCodigoPostal").style.top = "0px";
        document.getElementById("labelFlotanteCodigoPostal").style.fontSize = "15px";
    }
});

//Datos bancarios
document.getElementById("inputnombreTitular").addEventListener("focus", function () {
    document.getElementById("labelNombreTitular").style.top = "0px";
    document.getElementById("labelNombreTitular").style.fontSize = "10px";
});

document.getElementById("inputnombreTitular").addEventListener("blur", function () {
    const InputNombreTitular = document.getElementById("inputnombreTitular").value;
    if (InputNombreTitular === "") {
        document.getElementById("labelNombreTitular").style.top = "28px";
        document.getElementById("labelNombreTitular").style.fontSize = "15px";
    }
});

document.getElementById("inputnumeroTarjeta").addEventListener("focus", function () {
    document.getElementById("labelNumeroTarjeta").style.top = "0px";
    document.getElementById("labelNumeroTarjeta").style.fontSize = "10px";
});

document.getElementById("inputnumeroTarjeta").addEventListener("blur", function () {
    const InputNumeroTarjeta = document.getElementById("inputnumeroTarjeta").value;
    if (InputNumeroTarjeta === "") {
        document.getElementById("labelNumeroTarjeta").style.top = "28px";
        document.getElementById("labelNumeroTarjeta").style.fontSize = "15px";
    }
});

document.getElementById("inputfechaCaducidad").addEventListener("focus", function () {
    document.getElementById("labelFechaCaducidad").style.top = "0px";
    document.getElementById("labelFechaCaducidad").style.fontSize = "10px";
});

document.getElementById("inputfechaCaducidad").addEventListener("blur", function () {
    const InputFechaCaducidad = document.getElementById("inputfechaCaducidad").value;
    if (InputFechaCaducidad === "") {
        document.getElementById("labelFechaCaducidad").style.top = "28px";
        document.getElementById("labelFechaCaducidad").style.fontSize = "15px";
    }
});

document.getElementById("inputCVV").addEventListener("focus", function () {
    document.getElementById("labelCVV").style.top = "0px";
    document.getElementById("labelCVV").style.fontSize = "10px";
});

document.getElementById("inputCVV").addEventListener("blur", function () {
    const InputCVV = document.getElementById("inputCVV").value;
    if (InputCVV === "") {
        document.getElementById("labelCVV").style.top = "28px";
        document.getElementById("labelCVV").style.fontSize = "15px";
    }
});

//Datos del cliente
document.getElementById("inputDNI").addEventListener("focus", function () {
    document.getElementById("labelDNI").style.top = "0px";
    document.getElementById("labelDNI").style.fontSize = "10px";
});

document.getElementById("inputDNI").addEventListener("blur", function () {
    const InputDNI = document.getElementById("inputDNI").value;
    if (InputDNI === "") {
        document.getElementById("labelDNI").style.top = "28px";
        document.getElementById("labelDNI").style.fontSize = "15px";
    }
});

document.getElementById("inputnombreApellidos").addEventListener("focus", function () {
    document.getElementById("labelNombreApellidos").style.top = "0px";
    document.getElementById("labelNombreApellidos").style.fontSize = "10px";
});

document.getElementById("inputnombreApellidos").addEventListener("blur", function () {
    const InputNombreApellidos = document.getElementById("inputnombreApellidos").value;
    if (InputNombreApellidos === "") {
        document.getElementById("labelNombreApellidos").style.top = "28px";
        document.getElementById("labelNombreApellidos").style.fontSize = "15px";
    }
});

document.getElementById("inputcorreo").addEventListener("focus", function () {
    document.getElementById("labelCorreo").style.top = "0px";
    document.getElementById("labelCorreo").style.fontSize = "10px";
});

document.getElementById("inputcorreo").addEventListener("blur", function () {
    const InputCorreo = document.getElementById("inputcorreo").value;
    if (InputCorreo === "") {
        document.getElementById("labelCorreo").style.top = "28px";
        document.getElementById("labelCorreo").style.fontSize = "15px";
    }
});

function validandoFormulario() {
    document.getElementById("reiniciar").addEventListener("click", function() {
        //Quitar los errores al reiniciar
        document.getElementById("errores").style.display = "none";

        const formulario = document.getElementById("formularioCompraEventos");
        formulario.reset();

        //Reestablecer labels
        const inputs = formulario.querySelectorAll("input");
        inputs.forEach(input => {
            input.dispatchEvent(new Event('blur'));
        });
    });
    
    //Accedo a los datos
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const InputNombreTitular = document.getElementById("inputnombreTitular").value;
    const InputNumeroTarjeta = document.getElementById("inputnumeroTarjeta").value;
    const InputFechaCaducidad = document.getElementById("inputfechaCaducidad").value;
    const InputCVV = document.getElementById("inputCVV").value;
    const InputDNI = document.getElementById("inputDNI").value;
    const InputNombreApellidos = document.getElementById("inputnombreApellidos").value;
    const InputCorreo = document.getElementById("inputcorreo").value;

    let errores = [];

    //Direccion
    if (direccion === "") {
        errores.push("Por favor, ingrese una direccion");
    };

    //Ciudad
    if (ciudad === "") {
        errores.push("Por favor, indique la ciudad en la que reside")
    };
    //Cantidad
    if (codigoPostal === "") {
        errores.push('Por favor, ingrese su código postal');
    } else {
        let expresionCP = /^[0-9]{5}$/;

        if (!expresionCP.test(codigoPostal)) {
            errores.push("Por favor, ingrese un código postal válido")
        };
    };

    //Nombre
    if (InputNombreTitular === "") {
        errores.push('Por favor, ingrese el nombre del titular de la reserva');
    };

    //Numero tarjeta
    if (InputNumeroTarjeta === "") {
        errores.push('Por favor, ingrese el numero de la tarjeta');
    } else {
        let expresionNT = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

        if (!expresionNT.test(InputNumeroTarjeta)) {
            errores.push("Por favor, ingrese un número de tarjeta válido");
        }
    };

    //Fecha caducidad
    if (InputFechaCaducidad === "") {
        errores.push('Por favor, ingrese la fecha de caducidad de la tarjeta');
    };

    //CVV
    if (InputCVV === "") {
        errores.push('Por favor, ingrese el CVV de su tarjeta');
    } else {
        let expresionCVV = /^[0-9]{3}$/;

        if (!expresionCVV.test(InputCVV)) {
            errores.push("Por favor, ingrese un CVV válido");
        }
    };

    //DNI
    if (InputDNI === "") {
        errores.push('Por favor, ingrese su DNI');
    };

    //Nombre y apellidos
    if (InputNombreApellidos === "") {
        errores.push('Por favor, ingrese lsu nombre y apellidos');
    };

    //Correo
    if (InputCorreo === "") {
        errores.push("Por favor, ingresa tu correo electrónico");
    } else {
        let expresionCorreo = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-4}$/;

        if (!expresionCorreo.test(InputCorreo)) {
            errores.push("Por favor, ingrese una direccion de correo válida")
        };
    };
    //Mostrar Errores
  
    if(errores.length > 0){
        mostrarErrores(errores);
        return false;
    };

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
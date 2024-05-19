const direccion = document.getElementById("direccion").value;
const ciudad = document.getElementById("ciudad").value;
const codigoPostal = document.getElementById("codigoPostal").value;

document.getElementById("direccion").addEventListener("focus", function () {
    document.getElementById("labelFlotanteDireccion").style.top = "-20px";
    document.getElementById("labelFlotanteDireccion").style.fontSize = "10px";
});

document.getElementById("direccion").addEventListener("blur", function () {
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
    if (codigoPostal === "") {
        document.getElementById("labelFlotanteCodigoPostal").style.top = "0px";
        document.getElementById("labelFlotanteCodigoPostal").style.fontSize = "15px";
    }
});
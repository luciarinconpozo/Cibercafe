window.addEventListener("load", function () {
    const divs = this.document.querySelectorAll(".form_div");
        
    divs.forEach(div => {
        div.addEventListener("click", function() {
            div.querySelector(".form_label").classList.add("activelabel");
        });
    }
    );
    

    document.getElementById("forgotPass").addEventListener("click", function () {
        alert("Pues no se");
    });
    
});




function validaFormulario() {
    const correo = document.getElementById("input_correo").value;
    const contrasenya = document.getElementById("input_password").value;

    let errores = [];
    if (correo === "") {
        errores.push("El correo es obligatorio");
    } else {

        let expresionCorreo = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!expresionCorreo.test(correo)) {
            errores.push("Por favor, ingrese una dirección de correo válida");
        }
    }

    if (contrasenya === "") {
        errores.push("La constraseña es obligatoria");
    } else {
        let expresionContrasenya = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


        if (!expresionContrasenya.test(contrasenya)) {
            errores.push("Por favor, ingrese una contraseña válida");
        }
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;

}

function mostrarErrores(errores) {
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML = "";
    divErrores.style.display = "block";

    let ul = document.createElement("ul");
    errores.forEach(function (error) {
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

    divErrores.appendChild(ul);
}
    



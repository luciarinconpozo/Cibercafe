window.addEventListener("load", function () {
    const divs = this.document.querySelectorAll(".form_div");
    const inputcaptcha = document.querySelector(".captcha_form input");

    const login = document.querySelector("form .form_button");

    divs.forEach(div => {
        const input = div.querySelector(".form_input");
        const label = div.querySelector(".form_label");

        input.addEventListener("input", function () {
            if (input.value !== "") {
                label.classList.add("activelabel");
            }
            else {
                label.classList.remove("activelabel");
            }
        });

        input.addEventListener("focus", function () {
            label.classList.add("activelabel");
        });

        // blur si el elemento pierde el foco
        input.addEventListener("blur", function () {
            if (input.value === "") {
                label.classList.remove("activelabel");
            }
        });


        document.getElementById("botonReset").addEventListener("click", function () {
            let divErrores = document.getElementById("errores");
            divErrores.style.innerHTML = "";
            divErrores.style.display = "none";

        });
    }
    );

    inputcaptcha.addEventListener("keyup", function () {
        let userdata = inputcaptcha.value;
        if (userdata.trim() != 0) {
            login.classList.add("active");
        }
        else {
            login.classList.remove("active");
        }
    });



    (function () {
        const fonts = ['cursive'];
        let captchavalue = "";
        function gencaptch() {
            let value = btoa(Math.random() * 10000000);
            value = value.substr(0, 5 + Math.random() * 5);
            captchavalue = value;
        }

        function setcaptcha() {
            let html = captchavalue.split("").map((char) => {
                const rotate = -20 + Math.trunc(Math.random() * 50);
                const font = Math.trunc(Math.random() * fonts.length);

                return `<span style="
                transform:rotate(${rotate}deg);
                font-family:${font[font]};
                ">${char} </span>`;

            }).join("");
            document.querySelector(".signin_form #captcha .preview").innerHTML = html;
        }


        function initcaptcha() {
            document.querySelector(".signin_form #captcha .captcha_refresh").addEventListener("click", function () {
                gencaptch();
                setcaptcha();
            });

            gencaptch();
            setcaptcha();
        }

        initcaptcha();

        document.querySelector(".signin_form .form_button").addEventListener("click", function () {

            let inputcaptchavalue = document.querySelector(".signin_form #captcha input").value;

            if (inputcaptchavalue === captchavalue) {
                alert("¡CORRECTO!");
            }
            else {
                alert("Invalid Captcha");
            }
        });
    })();


}

);


function validaFormulario() {
    const nombre = document.getElementById("input_nombre").value;
    const apellido = document.getElementById("input_primerApellido").value;
    const nacimiento = document.getElementById("input_fechaNacimiento").value;
    const correo = document.getElementById("input_correo").value;
    const contrasenya = document.getElementById("input_password").value;

    let errores = [];

    if (nombre === "") {
        errores.push("El nombre es obligatorio");
    }

    if (apellido === "") {
        errores.push("El apellido es obligatorio");
    }

    if (nacimiento === "") {
        errores.push("La fecha de nacimiento es obligatoria");
    }

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





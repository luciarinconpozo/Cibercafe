window.addEventListener("DOMContentLoaded", function () {
const divs = this.document.querySelectorAll(".form_div");
const inputbox = document.querySelectorAll(".form_input");
const inputcaptcha = document.querySelector(".captcha_form input");

const login = document.querySelector("form .form_button");

divs.forEach(div => {
    div.addEventListener("click", function() {
        div.querySelector(".form_label").classList.add("activelabel");
    });
}
);

inputcaptcha.addEventListener("keyup", function(){
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

});
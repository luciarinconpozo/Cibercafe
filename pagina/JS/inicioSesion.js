window.addEventListener("DOMContentLoaded", function () {
    const divs = this.document.querySelectorAll(".form_div");
    const inputcaptcha = document.querySelector(".captcha_form input");
    
    const login = document.querySelector("form .form_button");
    
    divs.forEach(div => {
        div.addEventListener("click", function() {
            div.querySelector(".form_label").classList.add("activelabel");
        });
    }
    );
    

    
});
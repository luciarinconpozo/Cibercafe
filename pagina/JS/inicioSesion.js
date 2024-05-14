window.addEventListener("load", function () {
    const divs = this.document.querySelectorAll(".form_div");
        
    divs.forEach(div => {
        div.addEventListener("click", function() {
            div.querySelector(".form_label").classList.add("activelabel");
        });
    }
    );
    

    
});
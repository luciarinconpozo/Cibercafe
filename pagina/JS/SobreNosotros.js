window.onload=function(){
    const container = document.getElementsByClassName("desplegable")[0];
    container.style.display = "none";
    cont.innerHTML="Ver Mas";
}

document.getElementById("boton").addEventListener("click",function() {
    const container = document.getElementsByClassName("desplegable")[0];
    const cont = document.getElementById("boton");
    if (container) { 
        if (container.style.display === "none" || container.style.display === "") {
            container.style.display = "block";
            cont.innerHTML="Ver Menos";
        } else {
            container.style.display = "none";
            cont.innerHTML="Ver Mas";
        }
    } else {
        console.error("Error");
    }
});


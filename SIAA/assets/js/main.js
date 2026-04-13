document.addEventListener("DOMContentLoaded", function(){

    const botones = document.querySelectorAll(".nav-button");
    const vistas = document.querySelectorAll(".vista");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            botones.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");

            vistas.forEach(v => v.classList.remove("activa"));

            const idVista = boton.dataset.vista;
            const vista = document.getElementById(idVista);
        });
    });

});
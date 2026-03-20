/* ================================
   DATOS DE MATERIAS
================================ */

let materias = [];

async function cargarMaterias(){

    console.log("LLAMANDO API");

    try{

        const response = await fetch("api/materias.php");
        materias = await response.json();

        console.log("DATOS API:", materias);

        cargarTabla();

    }catch(error){
        console.error("Error cargando materias:", error);
    }

}
/* ================================
   VER DETALLE DE UNIDADES
================================ */

function verDetalle(index){

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const detalle = document.getElementById("detalleUnidades");

    titulo.textContent = materias[index].nombre;
    detalle.innerHTML = "";

    materias[index].unidades.forEach((u,i)=>{

        let promedioUnidad = calcularPromedioUnidad(u.componentes);

        detalle.innerHTML += `
        <tr>
            <td>${u.num}</td>
            <td>${u.desc}</td>
            <td>${promedioUnidad}</td>
            <td><button onclick="verComponentes(${index},${i})">Ver desglose</button></td>
        </tr>
        `;
    });

    modal.style.display = "flex";
}
/* ================================
   FUNCIONES DE CÁLCULO
================================ */



function calcularPromedioUnidad(componentes){

    let valores = Object.values(componentes).filter(v => v !== null);

    if(valores.length === 0) return null;

    let suma = valores.reduce((a,b)=>a+b,0);

    return (suma/valores.length).toFixed(2);
}

function calcularPromedio(unidades){

    let suma = 0;
    let contador = 0;

    unidades.forEach(u=>{

        let promedioUnidad = calcularPromedioUnidad(u.componentes);

        if(promedioUnidad !== null){
            suma += parseFloat(promedioUnidad);
            contador++;
        }
    });

    return contador > 0 ? (suma/contador).toFixed(2) : null;
}
/* ================================
   VER COMPONENTES (DESGLOSE)
================================ */



function verComponentes(mIndex,uIndex){

    let unidad = materias[mIndex].unidades[uIndex];
    let componentes = unidad.componentes;

    const contenedor = document.getElementById("contenedorCards");
    contenedor.innerHTML = "";

    Object.keys(componentes).forEach(nombre=>{

        contenedor.innerHTML += `
        <div class="card">
            <h4>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h4>
            <span>${componentes[nombre]}</span>
        </div>
        `;
    });

    let promedio = calcularPromedioUnidad(componentes);
    document.getElementById("promedioUnidadFinal").textContent = promedio;

    document.getElementById("modalDesglose").style.display = "flex";
}


/* ================================
   CERRAR MODALES
================================ */



function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

function cerrarDesglose(){
    document.getElementById("modalDesglose").style.display = "none";
}

/* ================================
   CARGAR TABLA
================================ */



function cargarTabla(){

    const tabla = document.getElementById("tablaMaterias");
    if(!tabla)return;
    tabla.innerHTML = "";

    let sumaGeneral = 0;
    let materiasConPromedio = 0;

    materias.forEach((m,index)=>{

        let promedio = calcularPromedio(m.unidades);

        let total = m.unidades.length;

        let evaluadas = m.unidades.filter(u => {
            return calcularPromedioUnidad(u.componentes) !== null;
        }).length;

        let estadoClase = "";
        let estadoTexto = "";

        // 🔹 Sin evaluar
        if(evaluadas === 0){
            estadoClase = "pendiente";
            estadoTexto = "Sin evaluar";
        }

        // 🔹 Parcial
        else if(evaluadas < total){
            estadoClase = "parcial";
            estadoTexto = "Parcial";

            sumaGeneral += parseFloat(promedio);
            materiasConPromedio++;
        }

        // 🔹 Completo
        else{
            estadoClase = "evaluado";
            estadoTexto = "Completo";

            sumaGeneral += parseFloat(promedio);
            materiasConPromedio++;
        }

        tabla.innerHTML += `
        <tr>
            <td>${m.clave}</td>
            <td>${m.nombre}</td>
            <td>${evaluadas} / ${total}</td>
            <td>${promedio !== null ? promedio : "--"}</td>
            <td><span class="estado ${estadoClase}">${estadoTexto}</span></td>
            <td><button onclick="verDetalle(${index})">Ver</button></td>
        </tr>
        `;
    });

    let promedioGeneral = materiasConPromedio > 0 ?
    (sumaGeneral/materiasConPromedio).toFixed(2) : "--";

    document.getElementById("promedioGeneral").textContent = promedioGeneral;
}

/* ================================
   DOMContentLoaded
================================ */
document.addEventListener("DOMContentLoaded", function() {

    
const botones = document.querySelectorAll(".nav-button");
const vistas = document.querySelectorAll(".vista");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        // Botón activo
        botones.forEach(b => b.classList.remove("active"));
        boton.classList.add("active");

        // Ocultar todas las vistas
        vistas.forEach(v => v.classList.remove("activa"));

        // Mostrar la vista correcta
        const idVista = boton.dataset.vista;
        const vista = document.getElementById(idVista);
        if (vista) {
            vista.classList.add("activa");
        }
    });
    
});

/* ================================
   CERRAR AL HACER CLICK FUERA
================================ */



window.addEventListener("click", function(e){

    if(e.target.id === "modal"){
        cerrarModal();
    }

    if(e.target.id === "modalDesglose"){
        cerrarDesglose();
    }

});


/* ================================
   INICIAR
================================ */

cargarMaterias();

const radios = document.querySelectorAll('input[name="documento"]');
const continueBtns = document.querySelectorAll('.openPaymentModal');

const modal = document.getElementById('paymentModal');
const modalContent = document.getElementById('modalContent');

const closeModal = document.getElementById('closeModal');
const selectedText = document.getElementById('selectedDocument');

const payOnlineBtn = document.getElementById('payOnline');
const payWindowBtn = document.getElementById('payWindow');

let selectedDocument = "";


/* ===============================
   ACTIVAR BOTÓN
================================ */



radios.forEach(radio => {

    radio.addEventListener('change', () => {

        continueBtn.disabled = false;

        selectedDocument = radio.value;

        selectedText.textContent =
            "Documento seleccionado: " + selectedDocument;

    });

});


/* ===============================
   ABRIR MODAL
================================ */



continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        const seleccionado = document.querySelector(
            'input[name="documento"]:checked'
        );

        if (seleccionado) {
            selectedDocument = seleccionado.value;
            selectedText.textContent =
                "Documento seleccionado: " + selectedDocument;

            modal.classList.add('show');
        }
    });
});


/* ===============================
   CERRAR MODAL
================================ */



if(closeModal){
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}


if(modal){
    modal.addEventListener('click', (e) => {

        if (e.target === modal) {
            modal.classList.remove('show');
        }

    });
}


/* ===============================
   PAGO EN LÍNEA (SIMULADO)
================================ */


if(payOnlineBtn){
    payOnlineBtn.addEventListener('click', () => {

    modalContent.innerHTML = `

        <h3>Procesando pago...</h3>

        <p>Conectando con pasarela bancaria...</p>

        <div style="margin:20px 0">
            ⏳⏳⏳
        </div>

    `;

    setTimeout(() => {

        modalContent.innerHTML = `

            <h3>✅ Pago exitoso</h3>

            <p>Tu solicitud fue registrada correctamente.</p>

            <p><strong>${selectedDocument}</strong></p>

            <button class="request-btn"
                    onclick="location.reload()">

                Finalizar

            </button>

        `;

    }, 2500);

});
}



/* ===============================
   PAGO EN VENTANILLA
================================ */


if(payWindowBtn){
payWindowBtn.addEventListener('click', () => {

    const code = "SIAA" + Date.now();

    modalContent.innerHTML = `

        <div id="ticket">

            <h3>Ficha de Pago</h3>

            <p><strong>Alumno:</strong> Juan Carlos Bodoque</p>

            <p><strong>Documento:</strong> ${selectedDocument}</p>

            <p><strong>Referencia:</strong> ${code}</p>

            <p><strong>Monto:</strong> $120 MXN</p>

            <svg id="barcode"></svg>

        </div>

        <button class="request-btn"
                onclick="downloadPDF()">

            Descargar PDF

        </button>

<button class="request-btn"
        onclick="location.reload()">
    Cerrar
</button>

    `;


    JsBarcode("#barcode", code, {
        format: "CODE128",
        width: 2,
        height: 60
    });

});
}



/* ===============================
   GENERAR PDF
================================ */

function downloadPDF() {

    const ticket = document.getElementById('ticket');

    html2pdf()
        .from(ticket)
        .save("Ficha_Pago_SIAA.pdf");

}

// Limitar a máximo 3


/* ===============================
   VALIDAR BOTÓN CONTINUAR
================================ */

function validarContinuar() {

    const tramiteSeleccionado = document.querySelector('input[name="documento"]:checked');

    if (!tramiteSeleccionado) {
        continueBtns.forEach(btn => btn.disabled = true);
        return;
    }
}


/* CÓDIGO JAVASCRIPT

Variables */
const form = document.querySelector('.wifilist');
const actionButton = document.getElementById('openkeychoice');

const openKeyChoiceBtn = document.getElementById('openkeychoice');
const wifiPopup = document.getElementById('wifipopup');
const closeWindowBtn = document.getElementById('closeWindow');
const obtainKeyBtn = document.getElementById('obtainKey');
const mainDisplay = document.getElementById('mainDisplay');

//Función donde se activa el botón después de elegir para asignar o desasignar
if(form){
    form.addEventListener('change', (event) => {
    if (event.target.name === 'key') {
        actionButton.disabled = false;
        actionButton.innerText = event.target.value === "Asignar" ? "Asignar clave" : "Confirmar Desasignación"
    }
});
}

//Función donde genera una clave aleatoria y que muestre la clave en la página
if(openKeyChoiceBtn){
//Función donde muestra el efecto al asignar o desasignar una clave
openKeyChoiceBtn.addEventListener('click', () => {
    const seleccion = document.querySelector('input[name="key"]:checked').value;
    if (seleccion === "Asignar") {
        wifiPopup.classList.add('active');
    } else if (seleccion === "Desasignar") {
        mainDisplay.innerHTML = `
        <p style="color: red;">Clave desasignada correctamente.</p>
        `;
    }
});
//Función donde se cierra el popup al no elegir a asignar una clave
document.getElementById('closeWindow').addEventListener('click', () => {
    wifiPopup.classList.remove('active');
});
obtainKeyBtn.addEventListener('click', () => {
    const nuevaClave = "UPBC-" + Math.random().toString(36).substring(2, 7).toUpperCase();
    mainDisplay.innerHTML = `
        <h2>¡Listo!</h2>
        <div style="border: 2px dashed #003366; background: #f0f7ff; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; color: #555;">Tu clave de acceso WiFi es:</p>
            <strong style="font-size: 1.8rem; color: #003366; letter-spacing: 2px;">${nuevaClave}</strong>
        </div>
    `;
    wifiPopup.classList.remove('active');

    actionButton.disabled = true;
});
}


const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

if(track && slides.length > 0){

    let index = 0;

    function updateCarousel(){
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    if(nextBtn){
        nextBtn.addEventListener("click", () => {
            index++;
            if(index >= slides.length){
                index = 0;
            }
            updateCarousel();
        });
    }

    if(prevBtn){
        prevBtn.addEventListener("click", () => {
            index--;
            if(index < 0){
                index = slides.length - 1;
            }
            updateCarousel();
        });
    }

    setInterval(()=>{
        index++;
        if(index >= slides.length){
            index = 0;
        }
        updateCarousel();
    },5000);

}


}
);
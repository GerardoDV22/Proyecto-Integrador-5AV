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
   DATOS DE MATERIAS
================================ */

const materias = [
{
    clave:"30938",
    nombre:"Aplicaciones Web Orientadas a Servicios",
    unidades:[
        {
            num:1,
            desc:"I. Introducción al desarrollo web orientado a servicios.",
            componentes:{
                participacion:9,
                tareas:8,
                ejercicios:9,
                practicas:10,
                examen:8
            }
        },
        {
            num:2,
            desc:"Unidad de aprendizaje II. Implementación de interfaces de programación de aplicaciones de terceros (APIs).",
            componentes:{
                participacion:null,
                tareas:null,
                ejercicios:null,
                practicas:null,
                examen:null
            }
        },
        {
            num:3,
            desc:"III. Desarrollo de una interfaz de programación de aplicaciones(APIs).",
            componentes:{
                participacion:null,
                tareas:null,
                ejercicios:null,
                practicas:null,
                examen:null
            }
        },
        {
            num:4,
            desc:"Unidad de aprendizaje IV. Implementación",
            componentes:{
                participacion:null,
                tareas:null,
                ejercicios:null,
                practicas:null,
                examen:null
            }
        }
    ]
},
{
    clave:"30936",
    nombre:"Lideazgo de equipos de alto desempeño",
    unidades:[
        {
            num:1,
            desc:"I. Introducción a las relaciones humanas.",
            componentes:{
                participacion:10,
                tareas:10,
                ejercicios:10,
                practicas:10,
                examen:10
            }
        },
        {
            num:2,
            desc:"II. Liderazgo.",
            componentes:{
                participacion:null,
                tareas:null,
                ejercicios:null,
                practicas:null,
                examen:null
            }
        },
        {
            num:3,
            desc:"III. Equipos de alto desempeño",
            componentes:{
                participacion:null,
                tareas:null,
                ejercicios:null,
                practicas:null,
                examen:null
            }
        }
    ]
},
{
    clave: "30937",
    nombre: "Ecuaciones Diferenciales",
    unidades: []
},
{
    clave: "30939",
    nombre: "Bases de Datos Avanzadas",
    unidades: []
},
{
    clave: "30940",
    nombre: "Estandares y Metricas para el Desarrollo de Software",
    unidades: []
},
{
    clave: "30941",
    nombre: "Proyecto Integrador II",
    unidades: []
}
];


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
   CARGAR TABLA
================================ */

function cargarTabla(){

    const tabla = document.getElementById("tablaMaterias");
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

cargarTabla();

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

closeModal.addEventListener('click', () => {

    modal.classList.remove('show');

});


modal.addEventListener('click', (e) => {

    if (e.target === modal) {

        modal.classList.remove('show');

    }

});


/* ===============================
   PAGO EN LÍNEA (SIMULADO)
================================ */

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


/* ===============================
   PAGO EN VENTANILLA
================================ */

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


/* ===============================
   GENERAR PDF
================================ */

function downloadPDF() {

    const ticket = document.getElementById('ticket');

    html2pdf()
        .from(ticket)
        .save("Ficha_Pago_SIAA.pdf");

}

/* ===============================
   SUBMENÚ EXTRAORDINARIOS
================================ */

const extraRadio = document.getElementById("extraOption");
const extraSubmenu = document.getElementById("extraSubmenu");
const extraMaterias = document.getElementById("extraMaterias");

// Generar lista dinámica desde tu arreglo materias
materias.forEach(m => {
    extraMaterias.innerHTML += `
        <label class="extra-materia">
            <input type="checkbox" value="${m.nombre}">
            ${m.nombre}
        </label>
    `;
});

// Mostrar / ocultar submenu
document.querySelectorAll('input[name="documento"]').forEach(radio => {
    radio.addEventListener("change", () => {

        if (extraRadio.checked) {
            extraSubmenu.classList.add("open");
        } else {
            extraSubmenu.classList.remove("open");

            // limpiar selección si cambia de opción
            extraMaterias.querySelectorAll("input").forEach(c => c.checked = false);
        }
        validarContinuar();
    });
});

// Limitar a máximo 3
extraMaterias.addEventListener("change", () => {

    const seleccionadas = extraMaterias.querySelectorAll("input:checked");

    if (seleccionadas.length > 3) {
        seleccionadas[seleccionadas.length - 1].checked = false;
        alert("Solo puedes seleccionar un máximo de 3 materias.");
    }
    validarContinuar();
});

/* ===============================
   VALIDAR BOTÓN CONTINUAR
================================ */

function validarContinuar() {

    const tramiteSeleccionado = document.querySelector('input[name="documento"]:checked');

    if (!tramiteSeleccionado) {
        continueBtns.forEach(btn => btn.disabled = true);
        return;
    }

    // Si es extraordinarios
    if (tramiteSeleccionado.value === "Exámenes Extraordinarios o de Regularización") {

        const materiasSeleccionadas = extraMaterias.querySelectorAll("input:checked");

        continueBtns.forEach(btn => {
            btn.disabled = materiasSeleccionadas.length === 0;
        });

    } else {
        // Inscripción normal
        continueBtns.forEach(btn => btn.disabled = false);
    }
}
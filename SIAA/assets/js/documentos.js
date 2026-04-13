const radios = document.querySelectorAll('input[name="documento"]');
const continueBtns = document.querySelectorAll('.openPaymentModal');

const modal = document.getElementById('paymentModal');
const modalContent = document.getElementById('modalContent');

const closeModal = document.getElementById('closeModal');
const selectedText = document.getElementById('selectedDocument');

const payOnlineBtn = document.getElementById('payOnline');
const payWindowBtn = document.getElementById('payWindow');

const params = new URLSearchParams(window.location.search);
const p = params.get('p');

const nombreAlumno = infoAlumno?.nombre || "Cargando alumno...";

let selectedDocument = "";

const costosDocumentos = {
    "Duplicado de credencial": 150,
    "Constancia de estudios": 75,
    "Carta descriptiva": 120,
    "Copia archivo": 100,
    "ECRII": 100,
    "Inscripción o Reinscripción": 3100,
    "Exámenes Extraordinarios o de Regularización": 500
};

/* ===============================
   ACTIVAR BOTÓN
================================ */



radios.forEach(radio => {

    radio.addEventListener('change', () => {

        continueBtns.forEach(btn => btn.disabled = false);

        selectedDocument = radio.value;

        selectedText.textContent =
            "Documento seleccionado: " + selectedDocument;

        if(p === "reinscripcion"){
            manejarMateriasExtra();
        }
    });

});


/* ===============================
   ABRIR MODAL
================================ */

continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        if(selectedDocument === "Exámenes Extraordinarios o de Regularización"){

            const seleccionadas = document.querySelectorAll('.checkMateria:checked');

            if(seleccionadas.length === 0){
                alert("Debes seleccionar al menos 1 materia");
                return;
            }

            if(seleccionadas.length > 3){
                alert("Solo puedes seleccionar máximo 3 materias");
                return;
            }
        }

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

        generarPDF(); 

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
    const total = calcularTotal();
    modalContent.innerHTML = `

        <div id="ticket">

            <h3>Ficha de Pago</h3>

            <p><strong>Alumno:</strong> ${obtenerNombreAlumno()}</p>

            <p><strong>Documento:</strong> ${selectedDocument}</p>

            <p><strong>Referencia:</strong> ${code}</p>

            <p><strong>Monto:</strong> $${total} MXN</p>

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

function manejarMateriasExtra(){

    const contenedor = document.getElementById("extraMateriasContainer");
    const lista = document.getElementById("listaMaterias");

    if(selectedDocument === "Exámenes Extraordinarios o de Regularización"){

        contenedor.style.display = "block";
        lista.innerHTML = "";

        if(extraMaterias.length === 0){
            lista.innerHTML = "<p>No tienes materias para extraordinario</p>";
            return;
        }

        extraMaterias.forEach((materia) => {

            lista.innerHTML += `
                <label>
                    <input type="checkbox" value="${materia}" class="checkMateria">
                    ${materia}
                </label><br>
            `;
        });
        continueBtns.forEach(btn => btn.disabled = true);
        const checks = document.querySelectorAll('.checkMateria');

        checks.forEach(check => {
            check.addEventListener('change', () => {

                const seleccionados = document.querySelectorAll('.checkMateria:checked');

                // 🔥 limitar a 3
                if(seleccionados.length > 3){
                    check.checked = false;
                    alert("Solo puedes seleccionar máximo 3 materias");
                }

                // 🔥 validar botón
                validarSeleccionMaterias();

            });
        });

    } else {
        contenedor.style.display = "none";
        continueBtns.forEach(btn => btn.disabled = false);
    }
}

function validarSeleccionMaterias(){

    const seleccionadas = document.querySelectorAll('.checkMateria:checked');

    continueBtns.forEach(btn => {
        btn.disabled = (seleccionadas.length === 0);
    });
}

function generarPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text("Sistema SIAA", 20, 20);
    doc.text("Comprobante de solicitud", 20, 30);

    doc.save("documento.pdf");
}

function obtenerMateriasSeleccionadas(){

    const checks = document.querySelectorAll('.checkMateria:checked');

    return Array.from(checks).map(c => c.value);
}

function generarPDF(){

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const total = calcularTotal();
    let y = 20;

    doc.setFontSize(16);
    doc.text("SIAA - Comprobante", 20, y);

    y += 10;

    doc.setFontSize(12);
    doc.text("Alumno: " + obtenerNombreAlumno(), 20, y);

    y += 10;
    doc.text("Documento: " + selectedDocument, 20, y);

    y += 10;

    // 🔥 Si es extraordinario
    if(selectedDocument === "Exámenes Extraordinarios o de Regularización"){

        const materias = obtenerMateriasSeleccionadas();

        doc.text("Materias seleccionadas:", 20, y);
        y += 10;

        materias.forEach((m, i) => {
            doc.text("- " + m, 25, y);
            y += 8;
        });

        // 💰 costo dinámico
        const total = materias.length * 500;

        y += 5;
        doc.text("Total a pagar: $" + total + " MXN", 20, y);
    }else
        doc.text("Monto: $" + total + " MXN", 20, y);

    y += 15;

    const fecha = new Date().toLocaleDateString();
    doc.text("Fecha: " + fecha, 20, y);

    doc.save("Comprobante_SIAA.pdf");
}

function obtenerNombreAlumno(){

    if(!window.infoAlumno){
        return "Cargando alumno...";
    }

    return window.infoAlumno.nombre;
}

function obtenerCostoDocumento(){

    return costosDocumentos[selectedDocument] || 0;
}

function calcularTotal(){

    if(selectedDocument === "Exámenes Extraordinarios o de Regularización"){

        const seleccionadas = document.querySelectorAll('.checkMateria:checked');

        return seleccionadas.length * 500;
    }

    return obtenerCostoDocumento();
}
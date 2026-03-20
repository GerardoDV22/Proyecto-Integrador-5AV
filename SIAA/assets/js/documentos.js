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

        continueBtns.forEach(btn => btn.disabled = false);

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
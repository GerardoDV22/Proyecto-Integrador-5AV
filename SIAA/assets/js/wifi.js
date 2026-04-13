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
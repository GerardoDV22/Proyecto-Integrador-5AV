<section id="wifirequest" class="vista">
    <h2 class="wifititle">Auto provisión de Acceso a internet UPBC para alumnos</h2>
    <br>
    <p class="wifisubtitle"><strong class="wifisubtitlebold">Red Inalámbrica:</strong> UPBC_WIFI</p>
    <form class="wifilist">
        <h3>Seleccione una opción:</h3>
        <label class="wifiItem">
        <input type="radio" name="key" value="Asignar">Asignación Clave
        </label><br>
        <label class="wifiItem">
        <input type="radio" name="key" value="Desasignar">Desasignación
        </label>
    </form><br><br>
    <h2 class="wifirule"><a href="#">Ver Reglamento</a></h2>

    <div id="mainDisplay" style="margin: 15px 0; text-align: center;"></div>

    <button class="wifibtn" id="openkeychoice" disabled>
        Asignar clave
    </button>
</section>
<div class="wifi-popup" id="wifipopup">
    <div class="wifi-popup-content" id="mainDisplay">
        <h2>Clave WiFi</h2>
        <p>¿Desea obtener la clave para el WiFi?</p>
        <div class="wifi-option">
            <button class="wifibtn yes" id="obtainKey">
                Si
            </button>
            <button class="wifibtn no" id="closeWindow">
                No
            </button>
        </div>
    </div>
</div>

        <section id="reinscripcion-extraordinarios" class="vista">
            <h2 class="document-title">Reinscripción y Extraordinarios</h2>
            <p class="document-subtitle">
                Selecciona el trámite que deseas realizar:
            </p>
                <label class="document-item">
                    <input type="radio" name="documento" value="Inscripción o Reinscripción" >
                    Inscripción o Reinscripción
                </label>
            <div class="document-list">
                <label class="document-item">
                    <input type="radio" name="documento" value="Exámenes Extraordinarios o de Regularización" id="extraOption">
                    Exámenes Extraordinarios o de Regularización
                </label>
                <div class="extra-submenu" id="extraSubmenu">
                    <p class="extra-title">Selecciona hasta 3 materias:</p>
                    <div id="extraMaterias"></div>
                </div>
            </div>
            <button class="request-btn openPaymentModal" disabled>
                Continuar
            </button>
        </section>
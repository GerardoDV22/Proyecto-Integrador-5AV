 <section id="calificaciones" class="vista">

            <h2>Calificaciones</h2>

            <div class="table-container">

                <table>
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Materia</th>
                            <th>Unidades Evaluadas</th>
                            <th>Promedio</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody id="tablaMaterias"></tbody>
                </table>

                <div class="promedio-general">
                    Promedio General:
                    <span id="promedioGeneral">0</span>
                </div>

            </div>
            <!-- MODAL DETALLE -->
            <div class="modal" id="modal">
                <div class="modal-content">
                    <span class="close" onclick="cerrarModal()">X</span>
                    <h3 id="tituloModal"></h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Unidad</th>
                                <th>Descripción</th>
                                <th>Calificación</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody id="detalleUnidades"></tbody>
                    </table>
                </div>
            </div>

            <!-- MODAL DESGLOSE -->
            <div class="modal-desglose" id="modalDesglose">
                <div class="desglose-content">

                    <div class="desglose-header">
                        <h3>Desglose de Unidad</h3>
                        <span class="cerrar-btn" onclick="cerrarDesglose()">X</span>
                    </div>

                    <div class="cards" id="contenedorCards"></div>

                    <div class="promedio-final">
                        Promedio Unidad:
                        <span id="promedioUnidadFinal"></span>
                    </div>

                </div>
            </div>

        </section>
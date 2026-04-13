<section id="inicio" class="vista activa">
            <h2 class="inicio-title">Inicio</h2>
            <div class="inicio-layout">
                <div class="carousel">
                    <div class="carousel-track">
                        <a href="https://www.upbc.edu.mx" class="carousel-item" target="_blank" rel="noopener noreferrer">
                            <img src="assets/img/img1.jpg" alt="Convocatoria">
                            <div class="carousel-caption">Red Juvenil BC</div>
                        </a>
                        <a href="https://www.upbc.edu.mx" class="carousel-item" target="_blank" rel="noopener noreferrer">
                            <img src="assets/img/img2.jpg" alt="Examen ECRII">
                            <div class="carousel-caption">Examen ECRI</div>
                        </a>
                        <a href="https://www.upbc.edu.mx" class="carousel-item" target="_blank" rel="noopener noreferrer">
                            <img src="assets/img/img3.jpg" alt="Ruta de Transporte">
                            <div class="carousel-caption">Ruta de Transporte</div>
                        </a>
                    </div>
                    <button class="carousel-btn prev">&#10094;</button>
                    <button class="carousel-btn next">&#10095;</button>
                </div>
                <div class="inicio-links">
                    <h3>Enlaces rápidos</h3>
                    <a href="https://www.upbc.edu.mx/calendario/2026/calendario26.pdf" class="inicio-link" target="_blank" rel="noopener noreferrer">
                        📅 Calendario oficial UPBC
                    </a>
                    <a href="https://www.upbc.edu.mx/images/NO25/Mapas/INFORMACION/UPBC_TSU-CD_ModeloEducativo_ITI_comprimido.pdf" class="inicio-link" target="_blank" rel="noopener noreferrer">
                        📚 Plan de estudios
                    </a>
                </div >
            </div>
            <div class="calendario-section">
                <h2>Calendario</h2>
                <div id="calendar"></div>
            </div>
        </section>
        <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/main.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var calendarEl = document.getElementById('calendar');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    locale: 'es', // Español
                    height: 'auto',

                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },

                    events: '/SIAA/api/obtener_eventos.php'
                });

                calendar.render();
            });
        </script>
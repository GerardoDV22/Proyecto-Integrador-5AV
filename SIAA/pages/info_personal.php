<section id="info-personal" class="vista">
    <div class="grid-perfil">

        <!-- ALUMNO -->
        <div class="perfil-card">
            <div class="perfil-header">
                <img src="assets/img/bodoque.jpg" alt="Foto Alumno" class="foto-alumno">
                <div>
                    <h2 id="nombreAlumno"></h2>
                    <p><strong>Matrícula:</strong> <span id="matricula"></span></p>
                    <p><strong>Programa:</strong> <span id="carrera"></span></p>
                    <p><strong>Cuatrimestre:</strong> <span id="cuatrimestre"></span></p>
                    <p><strong>Periodo:</strong> <span id="periodo"></span></p>
                    <p><strong>Estatus:</strong> <span id="estatus"></span></p>
                </div>
            </div>
        </div>

        <!-- TUTORA -->
        <div class="perfil-card tutor-card">
            <div class="perfil-header">
                <img src="assets/img/tormenta.jpg " alt="Foto Tutora" class="foto-tutora">
                <div>
                    <h3>Tutora Asignada</h3>
                    <p><strong>Nombre:</strong> <span id="tutorNombre"></span></p>
                    <p><strong>Puesto:</strong> <span id="tutorPuesto"></span></p>
                    <p><strong>Correo:</strong> <span id="tutorCorreo"></span></p>
                    <p><strong>Horario:</strong> #####</p>
                </div>
            </div>
        </div>

        <!-- DATOS PERSONALES -->
        <div class="perfil-card">
            <h3>Datos Personales</h3>
            <p><strong>Dirección:</strong> <span id="direccion"></span></p>
            <p><strong>Teléfono:</strong> <span id="telefono"></span></p>
            <p><strong>Correo Personal:</strong> <span id="correoPersonal"></span></p>
            <p><strong>Ciudad:</strong> #####</p>
            <p><strong>C.P.:</strong> #####</p>
        </div>

        <!-- CORREO INSTITUCIONAL -->
        <div class="perfil-card correo-institucional">
            <h3>Correo Institucional</h3>
            <p class="correo-grande" id="correoInstitucional"></p>
            <p><strong>Clave Inicial:</strong> #####</p>
        </div>

    </div>
</section>
<script>
document.addEventListener("DOMContentLoaded", function(){
    if(typeof cargarInfoAlumno === "function"){
        cargarInfoAlumno().then(() => {
            renderInfoAlumno();
        });
    }
});
</script>
<nav class="main-nav">

<a href="index.php?p=inicio"
   class="nav-button <?= ($page === 'inicio') ? 'active' : '' ?>" style="text-decoration:none">
   Inicio
</a>

<a href="index.php?p=info"
   class="nav-button <?= ($page === 'info') ? 'active' : '' ?>" style="text-decoration:none">
   Info Personal
</a>

<a href="index.php?p=horario"
   class="nav-button <?= ($page === 'horario') ? 'active' : '' ?>" style="text-decoration:none">
   Horario
</a>

<a href="index.php?p=calificaciones"
   class="nav-button <?= ($page === 'calificaciones') ? 'active' : '' ?>" style="text-decoration:none">
   Calificaciones
</a>

<a href="index.php?p=documentos"
   class="nav-button <?= ($page === 'documentos') ? 'active' : '' ?>" style="text-decoration:none">
   Solicitar Documentos
</a>

<a href="index.php?p=reinscripcion"
   class="nav-button <?= ($page === 'reinscripcion') ? 'active' : '' ?>" style="text-decoration:none">
   Reinscripción y Extraordinarios
</a>

<a href="index.php?p=wifi"
   class="nav-button <?= ($page === 'wifi') ? 'active' : '' ?>" style="text-decoration:none">
   Clave Wifi
</a>

<button onclick="cerrarSesion()" class="nav-button">
    Cerrar sesión
</button>

</nav>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SIAA - Acceso</title>
<link rel="stylesheet" href="../assets/css/login.css">

</head>

<body>

<div class="header">

<div><strong>Sistema de Información Académico Administrativo</strong></div>

<div class="logos">
    <img src="../assets/img/Logo.png">
</div>

</div>

<div class="main">

<div class="login-box">

<h1>SIAA</h1>
<div class="subtitle">Acceso alumnos</div>

<form id="loginForm">

<div class="input-group">
<label>Matrícula</label>
<input type="text" id="matricula">
</div>

<div class="input-group">
<label>Contraseña</label>
<input type="password" id="password">
</div>

<button type="submit">Acceder</button>

<div id="error" class="error"></div>

</form>

<div class="link">
<a href="#">¿Olvidó su contraseña?</a>
</div>

</div>

</div>

<script src="../assets/js/login.js"></script>

</body>
</html>
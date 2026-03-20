<?php
session_start();

if(!isset($_SESSION['matricula'])){
    header("Location: pages/login.php");
    exit();
}

// 👇 AGREGAR ESTO
$page = $_GET['p'] ?? 'inicio';

error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SIAA - PMV</title>

<link rel="stylesheet" href="assets/css/styles.css">

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

</head>

<body>
<?php include("includes/header.php"); ?>
 <?php include("includes/navbar.php"); ?>
<main id="contenido-principal">


<?php
switch($page){

    case "login":
        include("pages/login.php");
        break;

    case "inicio":
        include("pages/inicio.php");
    break;

    case "info":
        include("pages/info_personal.php");
    break;

    case "horario":
        include("pages/horario.php");
    break;

    case "calificaciones":
        include("pages/calificaciones.php");
    break;

    case "documentos":
        include("pages/documentos.php");
    break;

    case "reinscripcion":
        include("pages/reinscripcion.php");
    break;

    case "wifi":
        include("pages/wifi.php");
    break;

    default:
        if(!isset($_SESSION['matricula'])){
            include("pages/login.php");
        } else {
            include("pages/inicio.php");
        }

}

?>

</main>
<?php include("includes/modal.php"); ?>
<script src="assets/js/global.js"></script>
<script src="assets/js/calificaciones.js"></script>
<script src="assets/js/documentos.js"></script>
<script src="assets/js/extraordinarios.js"></script>
<script src="assets/js/wifi.js"></script>
<script src="assets/js/carousel.js"></script>
<script src="assets/js/perfil.js"></script>
<script src="assets/js/main.js"></script>

<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

</body>
</html>
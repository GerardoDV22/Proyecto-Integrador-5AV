<?php
session_start();
header("Content-Type: application/json");

include("db.php");

if(!isset($_SESSION['matricula'])){
    echo json_encode(["success"=>false,"message"=>"No autenticado"]);
    exit();
}

$matricula = $_SESSION['matricula'];

$sql = "
SELECT 
    a.nombre,
    a.matricula,
    a.emailInstitucional,
    a.emailPersonal,
    a.telefono,
    a.direccion,
    a.estatus,
    a.periodoIngreso,
    c.nombre AS carrera,
    t.nombre AS tutorNombre,
    t.puesto AS tutorPuesto,
    t.correo AS tutorCorreo
FROM Alumno a
LEFT JOIN Carrera c ON a.idCarrera = c.idCarrera
LEFT JOIN Tutor t ON a.idTutor = t.idTutor
WHERE a.matricula = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $matricula);
$stmt->execute();
$result = $stmt->get_result();

$data = $result->fetch_assoc();

echo json_encode($data);

$conn->close();
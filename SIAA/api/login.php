<?php
session_start();
header("Content-Type: application/json");

include("db.php");

$data = json_decode(file_get_contents("php://input"), true);

$matricula = $data['matricula'] ?? '';
$password = $data['password'] ?? '';

$sql = "SELECT * FROM Alumno WHERE matricula = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $matricula);
$stmt->execute();
$result = $stmt->get_result();

if($row = $result->fetch_assoc()){

    // ⚠️ Aquí puedes usar password_verify si encriptas después
    if($password === $row['password']){
        
        $_SESSION['matricula'] = $row['matricula'];

        echo json_encode([
            "success" => true
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Contraseña incorrecta"
        ]);
    }

} else {
    echo json_encode([
        "success" => false,
        "message" => "Usuario no encontrado"
    ]);
}

$conn->close();
?>
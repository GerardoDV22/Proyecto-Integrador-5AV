<?php
session_start();
header("Content-Type: application/json");

include("db.php");

if(!isset($_SESSION['matricula'])){
    echo json_encode([]);
    exit();
}

$matricula = $_SESSION['matricula'];

$sql = "
SELECT
    m.idMateria,
    m.clave,
    m.nombre AS materia,
    u.idUnidad,
    u.nombreUnidad,
    MAX(cu.calificacion) AS calificacion 
FROM Inscripcion i
JOIN Clase c ON i.idClase = c.idClase
JOIN Materia m ON c.idMateria = m.idMateria
LEFT JOIN Unidad u ON u.idMateria = m.idMateria
LEFT JOIN CalificacionUnidad cu 
    ON cu.idUnidad = u.idUnidad 
    AND cu.idInscripcion = i.idInscripcion
WHERE i.matricula = ?
GROUP BY m.idMateria, m.clave, m.nombre, u.idUnidad, u.nombreUnidad
ORDER BY m.nombre, u.idUnidad;
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $matricula);
$stmt->execute();
$result = $stmt->get_result();

$materias = [];

while($row = $result->fetch_assoc()){

    $idMateria = $row["idMateria"];

    if(!isset($materias[$idMateria])){
        $materias[$idMateria] = [
            "clave"=>$row["clave"],
            "nombre"=>$row["materia"],
            "unidades"=>[]
        ];
    }

    $cal = $row["calificacion"];

    $materias[$idMateria]["unidades"][] = [
        "num"=>$row["idUnidad"],
        "desc"=>$row["nombreUnidad"],
        "componentes"=>[
            "participacion"=>null,
            "tareas"=>null,
            "ejercicios"=>null,
            "practicas"=>null,
            "examen"=>$cal ? floatval($cal) : null
        ]
    ];
}

echo json_encode(array_values($materias),JSON_PRETTY_PRINT);

$conn->close();
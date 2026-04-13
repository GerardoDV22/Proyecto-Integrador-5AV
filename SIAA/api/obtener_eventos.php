<?php
header('Content-Type: application/json');

$eventos = [
    ["title" => "Receso Escolar", "start" => "2026-03-30", "end" => "2026-04-04"],
    ["title" => "Feria de Estadias", "start" => "2026-04-09"],
    ["title" => "Proyecto Emprendedores", "start" => "2026-04-14"],
    ["title" => "Fin de Cuatrimestre", "start" => "2026-04-18"],
    ["title" => "Inscripciones y Reinscripciones", "start" => "2026-04-20", "end" => "2026-04-25"],
    ["title" => "Inicio de Cuatrimestre", "start" => "2026-04-30"]
];

echo json_encode($eventos);
?>
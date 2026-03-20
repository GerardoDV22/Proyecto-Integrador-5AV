-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-03-2026 a las 02:18:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemaacademico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `matricula` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `emailPersonal` varchar(100) DEFAULT NULL,
  `emailInstitucional` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `estatus` varchar(50) DEFAULT NULL,
  `periodoIngreso` varchar(20) DEFAULT NULL,
  `idCarrera` int(11) DEFAULT NULL,
  `idTutor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`matricula`, `nombre`, `direccion`, `telefono`, `emailPersonal`, `emailInstitucional`, `password`, `estatus`, `periodoIngreso`, `idCarrera`, `idTutor`) VALUES
('240173', 'Manuel Alejandro Romero Villanueva', NULL, NULL, NULL, '240173@upbc.edu.mx', '12345678', 'Activo', '2024-3', 1, 1),
('240203', 'Elliot Francisco Duarte Rojas', NULL, '6861234567', 'elliot.duarte@gmail.com', '240203@upbc.edu.mx', '12345678', 'Activo', '2024-3', 1, 1),
('240259', 'Diego Alberto Ruiz de los Santos', NULL, '6862345678', 'diego.ruiz@gmail.com', '240259@upbc.edu.mx', '12345678', 'Activo', '2024-3', 1, 1),
('240278', 'Luis Gerardo Davalos Velasquez', NULL, '6863456789', 'luis.davalos@gmail.com', '240278@upbc.edu.mx', '12345678', 'Activo', '2024-3', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacioncorte`
--

CREATE TABLE `calificacioncorte` (
  `idCalificacionCorte` int(11) NOT NULL,
  `idInscripcion` int(11) DEFAULT NULL,
  `numeroCorte` int(11) DEFAULT NULL,
  `asistencia` decimal(4,2) DEFAULT NULL,
  `participacion` decimal(4,2) DEFAULT NULL,
  `tareas` decimal(4,2) DEFAULT NULL,
  `ejercicios` decimal(4,2) DEFAULT NULL,
  `practicas` decimal(4,2) DEFAULT NULL,
  `exposicion` decimal(4,2) DEFAULT NULL,
  `examen` decimal(4,2) DEFAULT NULL,
  `promedio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacionunidad`
--

CREATE TABLE `calificacionunidad` (
  `idCalificacionUnidad` int(11) NOT NULL,
  `idInscripcion` int(11) DEFAULT NULL,
  `idUnidad` int(11) DEFAULT NULL,
  `calificacion` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calificacionunidad`
--

INSERT INTO `calificacionunidad` (`idCalificacionUnidad`, `idInscripcion`, `idUnidad`, `calificacion`) VALUES
(1, 1, 7, 9.40),
(2, 3, 11, 9.00),
(3, 10, 1, 9.20),
(4, 12, 17, 8.00),
(5, 12, 18, 10.00),
(77, 16, 7, 8.50),
(78, 17, 8, 9.00),
(79, 16, 9, 8.75),
(80, 17, 10, 9.25),
(81, 18, 11, 9.50),
(82, 19, 12, 8.75),
(83, 20, 4, 9.00),
(84, 21, 5, 8.25),
(85, 22, 6, 8.75),
(86, 23, 14, 9.00),
(87, 24, 15, 8.75),
(88, 25, 1, 9.50),
(89, 26, 2, 9.00),
(90, 27, 17, 8.50),
(91, 28, 18, 9.25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `idCarrera` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `duracionCuatrimestres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`idCarrera`, `nombre`, `duracionCuatrimestres`) VALUES
(1, 'Ingeniería en Tecnologías de la Información e Innovación Digital', 10),
(2, 'Gestion Administrativa Empresarial', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `idClase` int(11) NOT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `idGrupo` int(11) DEFAULT NULL,
  `idMaestro` int(11) DEFAULT NULL,
  `idSalon` int(11) DEFAULT NULL,
  `idPeriodo` int(11) DEFAULT NULL,
  `diaSemana` varchar(20) DEFAULT NULL,
  `horaInicio` time DEFAULT NULL,
  `horaFin` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`idClase`, `idMateria`, `idGrupo`, `idMaestro`, `idSalon`, `idPeriodo`, `diaSemana`, `horaInicio`, `horaFin`) VALUES
(1, 1, 1, 1, 1, 1, 'Lunes', '16:00:00', '18:00:00'),
(2, 1, 1, 1, 1, 1, 'Martes', '16:00:00', '19:00:00'),
(3, 2, 1, 2, 1, 1, 'Jueves', '16:00:00', '18:00:00'),
(4, 2, 1, 2, 1, 1, 'Viernes', '16:00:00', '18:00:00'),
(5, 3, 1, 3, 1, 1, 'Martes', '19:00:00', '20:00:00'),
(6, 3, 1, 3, 1, 1, 'Miércoles', '18:00:00', '20:00:00'),
(7, 3, 1, 3, 1, 1, 'Jueves', '20:00:00', '22:00:00'),
(8, 4, 1, 4, 1, 1, 'Lunes', '18:00:00', '20:00:00'),
(9, 4, 1, 4, 1, 1, 'Jueves', '18:00:00', '20:00:00'),
(10, 5, 1, 5, 1, 1, 'Miércoles', '16:00:00', '18:00:00'),
(11, 5, 1, 5, 1, 1, 'Viernes', '20:00:00', '21:00:00'),
(12, 6, 1, 6, 1, 1, 'Miércoles', '20:00:00', '22:00:00'),
(13, 6, 1, 6, 1, 1, 'Viernes', '16:00:00', '20:00:00'),
(14, 7, 2, 7, 2, 1, 'Lunes', '20:00:00', '22:00:00'),
(15, 7, 2, 7, 2, 1, 'Martes', '20:00:00', '22:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `idGrupo` int(11) NOT NULL,
  `nombreGrupo` varchar(10) DEFAULT NULL,
  `cuatrimestre` int(11) DEFAULT NULL,
  `idCarrera` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`idGrupo`, `nombreGrupo`, `cuatrimestre`, `idCarrera`) VALUES
(1, '5AV', 5, 1),
(2, '5GAAV', 5, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripcion`
--

CREATE TABLE `inscripcion` (
  `idInscripcion` int(11) NOT NULL,
  `matricula` varchar(20) DEFAULT NULL,
  `idClase` int(11) DEFAULT NULL,
  `idPeriodo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscripcion`
--

INSERT INTO `inscripcion` (`idInscripcion`, `matricula`, `idClase`, `idPeriodo`) VALUES
(1, '240173', 1, 1),
(2, '240173', 2, 1),
(3, '240173', 3, 1),
(4, '240173', 4, 1),
(5, '240173', 5, 1),
(6, '240173', 6, 1),
(7, '240173', 7, 1),
(8, '240173', 8, 1),
(9, '240173', 9, 1),
(10, '240173', 10, 1),
(11, '240173', 11, 1),
(12, '240173', 12, 1),
(13, '240173', 13, 1),
(14, '240173', 14, 1),
(15, '240173', 15, 1),
(16, '240203', 1, 1),
(17, '240203', 2, 1),
(18, '240203', 3, 1),
(19, '240203', 4, 1),
(20, '240203', 5, 1),
(21, '240203', 6, 1),
(22, '240203', 7, 1),
(23, '240203', 8, 1),
(24, '240203', 9, 1),
(25, '240203', 10, 1),
(26, '240203', 11, 1),
(27, '240203', 12, 1),
(28, '240203', 13, 1),
(31, '240278', 1, 1),
(32, '240278', 2, 1),
(33, '240278', 3, 1),
(34, '240278', 4, 1),
(35, '240278', 5, 1),
(36, '240278', 6, 1),
(37, '240278', 7, 1),
(38, '240278', 8, 1),
(39, '240278', 9, 1),
(40, '240278', 10, 1),
(41, '240278', 11, 1),
(42, '240278', 12, 1),
(43, '240278', 13, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro`
--

CREATE TABLE `maestro` (
  `idMaestro` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correoInstitucional` varchar(100) DEFAULT NULL,
  `puesto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maestro`
--

INSERT INTO `maestro` (`idMaestro`, `nombre`, `correoInstitucional`, `puesto`) VALUES
(1, 'Elia Ivette Cota Rivera', NULL, 'Profesor'),
(2, 'Alicia del Refugio Lopez Aguirre', NULL, 'Profesor'),
(3, 'Luis Ortega Ceceña', NULL, 'Profesor'),
(4, 'Jesus Naranjo Avilez', NULL, 'Profesor'),
(5, 'Hector Alonso Reyes Medina', NULL, 'Profesor'),
(6, 'Gloria Elizabeth Aleman Escobedo', NULL, 'Profesor'),
(7, 'Gonzalo Miguel Lopez Salgado', NULL, 'Profesor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `clave` varchar(20) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `clave`, `nombre`) VALUES
(1, '30938', 'Aplicaciones web orientadas a servicios'),
(2, '30939', 'Bases de datos avanzadas'),
(3, '30937', 'Ecuaciones diferenciales'),
(4, '30940', 'Estándares y métricas para el desarrollo de software'),
(5, '30936', 'Liderazgo de equipos de alto desempeño'),
(6, '30941', 'Proyecto integrador II'),
(7, 'ING5', 'Inglés 5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo`
--

CREATE TABLE `periodo` (
  `idPeriodo` int(11) NOT NULL,
  `anio` int(11) DEFAULT NULL,
  `numeroPeriodo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `periodo`
--

INSERT INTO `periodo` (`idPeriodo`, `anio`, `numeroPeriodo`) VALUES
(1, 2026, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planestudios`
--

CREATE TABLE `planestudios` (
  `idPlan` int(11) NOT NULL,
  `idCarrera` int(11) DEFAULT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `cuatrimestre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salon`
--

CREATE TABLE `salon` (
  `idSalon` int(11) NOT NULL,
  `claveSalon` varchar(20) DEFAULT NULL,
  `edificio` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salon`
--

INSERT INTO `salon` (`idSalon`, `claveSalon`, `edificio`) VALUES
(1, 'E1104', 'E1'),
(2, 'E1UM', 'E1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutor`
--

CREATE TABLE `tutor` (
  `idTutor` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `puesto` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tutor`
--

INSERT INTO `tutor` (`idTutor`, `nombre`, `puesto`, `correo`) VALUES
(1, 'Elia Ivette Cota Rivera', 'Profesor investigador de tiempo completo', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `idUnidad` int(11) NOT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `nombreUnidad` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `unidad`
--

INSERT INTO `unidad` (`idUnidad`, `idMateria`, `nombreUnidad`) VALUES
(1, 5, 'Introducción a las relaciones humanas'),
(2, 5, 'Liderazgo'),
(3, 5, 'Equipos de alto desempeño'),
(4, 3, 'Ecuaciones diferenciales de primer orden'),
(5, 3, 'Ecuaciones diferenciales de orden superior'),
(6, 3, 'Transformada de Laplace'),
(7, 1, 'Introducción al desarrollo web orientado a servicios'),
(8, 1, 'Implementación de APIs de terceros'),
(9, 1, 'Desarrollo de una API'),
(10, 1, 'Implementación'),
(11, 2, 'Extracción de datos DQL'),
(12, 2, 'Programación procedimental con SQL'),
(13, 2, 'Gestión de bases de datos'),
(14, 4, 'Calidad de software'),
(15, 4, 'Técnicas y métodos de prueba'),
(16, 4, 'Documentación de calidad'),
(17, 6, 'Introducción al desarrollo de proyectos'),
(18, 6, 'Diseño y metodología'),
(19, 6, 'Recopilación y análisis de datos'),
(20, 6, 'Elaboración de informe final');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `idCarrera` (`idCarrera`),
  ADD KEY `idTutor` (`idTutor`);

--
-- Indices de la tabla `calificacioncorte`
--
ALTER TABLE `calificacioncorte`
  ADD PRIMARY KEY (`idCalificacionCorte`),
  ADD KEY `idInscripcion` (`idInscripcion`);

--
-- Indices de la tabla `calificacionunidad`
--
ALTER TABLE `calificacionunidad`
  ADD PRIMARY KEY (`idCalificacionUnidad`),
  ADD UNIQUE KEY `UQ_CalificacionUnidad` (`idInscripcion`,`idUnidad`),
  ADD KEY `idUnidad` (`idUnidad`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`idCarrera`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`idClase`),
  ADD KEY `idMateria` (`idMateria`),
  ADD KEY `idGrupo` (`idGrupo`),
  ADD KEY `idMaestro` (`idMaestro`),
  ADD KEY `idSalon` (`idSalon`),
  ADD KEY `idPeriodo` (`idPeriodo`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idGrupo`),
  ADD KEY `idCarrera` (`idCarrera`);

--
-- Indices de la tabla `inscripcion`
--
ALTER TABLE `inscripcion`
  ADD PRIMARY KEY (`idInscripcion`),
  ADD KEY `matricula` (`matricula`),
  ADD KEY `idClase` (`idClase`),
  ADD KEY `idPeriodo` (`idPeriodo`);

--
-- Indices de la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD PRIMARY KEY (`idMaestro`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`);

--
-- Indices de la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`idPeriodo`);

--
-- Indices de la tabla `planestudios`
--
ALTER TABLE `planestudios`
  ADD PRIMARY KEY (`idPlan`),
  ADD KEY `idCarrera` (`idCarrera`),
  ADD KEY `idMateria` (`idMateria`);

--
-- Indices de la tabla `salon`
--
ALTER TABLE `salon`
  ADD PRIMARY KEY (`idSalon`);

--
-- Indices de la tabla `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`idTutor`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`idUnidad`),
  ADD KEY `idMateria` (`idMateria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calificacioncorte`
--
ALTER TABLE `calificacioncorte`
  MODIFY `idCalificacionCorte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calificacionunidad`
--
ALTER TABLE `calificacionunidad`
  MODIFY `idCalificacionUnidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clase`
--
ALTER TABLE `clase`
  MODIFY `idClase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `idGrupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `inscripcion`
--
ALTER TABLE `inscripcion`
  MODIFY `idInscripcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `maestro`
--
ALTER TABLE `maestro`
  MODIFY `idMaestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `idPeriodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `planestudios`
--
ALTER TABLE `planestudios`
  MODIFY `idPlan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salon`
--
ALTER TABLE `salon`
  MODIFY `idSalon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tutor`
--
ALTER TABLE `tutor`
  MODIFY `idTutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `unidad`
--
ALTER TABLE `unidad`
  MODIFY `idUnidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`idCarrera`) REFERENCES `carrera` (`idCarrera`),
  ADD CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`idTutor`) REFERENCES `tutor` (`idTutor`);

--
-- Filtros para la tabla `calificacioncorte`
--
ALTER TABLE `calificacioncorte`
  ADD CONSTRAINT `calificacioncorte_ibfk_1` FOREIGN KEY (`idInscripcion`) REFERENCES `inscripcion` (`idInscripcion`);

--
-- Filtros para la tabla `calificacionunidad`
--
ALTER TABLE `calificacionunidad`
  ADD CONSTRAINT `calificacionunidad_ibfk_1` FOREIGN KEY (`idInscripcion`) REFERENCES `inscripcion` (`idInscripcion`),
  ADD CONSTRAINT `calificacionunidad_ibfk_2` FOREIGN KEY (`idUnidad`) REFERENCES `unidad` (`idUnidad`);

--
-- Filtros para la tabla `clase`
--
ALTER TABLE `clase`
  ADD CONSTRAINT `clase_ibfk_1` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`),
  ADD CONSTRAINT `clase_ibfk_2` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`idGrupo`),
  ADD CONSTRAINT `clase_ibfk_3` FOREIGN KEY (`idMaestro`) REFERENCES `maestro` (`idMaestro`),
  ADD CONSTRAINT `clase_ibfk_4` FOREIGN KEY (`idSalon`) REFERENCES `salon` (`idSalon`),
  ADD CONSTRAINT `clase_ibfk_5` FOREIGN KEY (`idPeriodo`) REFERENCES `periodo` (`idPeriodo`);

--
-- Filtros para la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`idCarrera`) REFERENCES `carrera` (`idCarrera`);

--
-- Filtros para la tabla `inscripcion`
--
ALTER TABLE `inscripcion`
  ADD CONSTRAINT `inscripcion_ibfk_1` FOREIGN KEY (`matricula`) REFERENCES `alumno` (`matricula`),
  ADD CONSTRAINT `inscripcion_ibfk_2` FOREIGN KEY (`idClase`) REFERENCES `clase` (`idClase`),
  ADD CONSTRAINT `inscripcion_ibfk_3` FOREIGN KEY (`idPeriodo`) REFERENCES `periodo` (`idPeriodo`);

--
-- Filtros para la tabla `planestudios`
--
ALTER TABLE `planestudios`
  ADD CONSTRAINT `planestudios_ibfk_1` FOREIGN KEY (`idCarrera`) REFERENCES `carrera` (`idCarrera`),
  ADD CONSTRAINT `planestudios_ibfk_2` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`);

--
-- Filtros para la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD CONSTRAINT `unidad_ibfk_1` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

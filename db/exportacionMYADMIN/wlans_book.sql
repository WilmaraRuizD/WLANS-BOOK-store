-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2023 a las 13:01:19
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wlans_book`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncios`
--

CREATE TABLE `anuncios` (
  `id` int(10) NOT NULL,
  `images` varchar(100) DEFAULT NULL,
  `detalle` varchar(50) DEFAULT NULL,
  `fecha_inicio` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `fecha_fin` date NOT NULL,
  `hora_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(10) NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre_categoria`) VALUES
(1, 'Científicos'),
(2, 'Literatura y lingüísticos'),
(3, 'De viaje'),
(4, 'novelas'),
(5, 'literatura infantil'),
(6, 'Profesional y Crecimiento personal'),
(7, 'Poeticos'),
(8, 'Literatura juvenil'),
(9, 'Ficción'),
(10, 'Comedia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(10) NOT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `valor_total` decimal(11,2) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `usuario_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compra`
--

CREATE TABLE `detalle_compra` (
  `id` int(10) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `sub_total` decimal(13,2) NOT NULL,
  `libros_id` int(10) NOT NULL,
  `compras_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(10) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `autor` varchar(10) NOT NULL,
  `editorial` varchar(10) NOT NULL,
  `ano_de_publicacion` int(10) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `pagina` int(10) DEFAULT NULL,
  `foto` varchar(250) NOT NULL,
  `categoria_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `editorial`, `ano_de_publicacion`, `descripcion`, `pagina`, `foto`, `categoria_id`) VALUES
(1, 'El origen de las especies', 'Charles Da', 'Editorial ', 1859, 'La teoría de la evolución, que se explica en el volumen, cambió el mundo para siempre', 696, 'https://m.media-amazon.com/images/I/61ka1h-XjNL._SL500_.jpg', 1),
(2, 'The Feynman Lectures on Physics', 'Richard Fe', 'Basic Book', 2011, 'es un conjunto de libros sobre física basado en las conferencias de Richard P. Feynman, premio Nobel', 1552, 'https://images.cdn3.buscalibre.com/fit-in/360x360/f2/db/f2db2b4758f73909ac0e4ae0562b55bb.jpg', 1),
(3, 'El gen egoísta', 'Richard Da', 'Edición en', 1990, 'Dawkins expone su idea del gen egoísta como vehículo para explicar cuál es el sujeto de la evolución', 424, 'https://m.media-amazon.com/images/I/41+p4Z1VHHL._SX313_BO1,204,203,200_.jpg', 1),
(4, 'Cosmo', 'Carl Sagan', 'Editorial ', 12, 'Cosmos es uno de los libros más famosos de Carl Sagan, y está basado en su archiconocida serie Cosmo', 384, 'https://images.cdn2.buscalibre.com/fit-in/360x360/b6/43/b64396bfa3dff8754439f8127768507c.jpg', 1),
(5, 'Cinco mil años de palabras', 'Carlos Pri', 'Fondo de C', 2005, 'Cómo salimos del silencio? Este y otros interrogantes fluyen como una constante en esta minuciosa in', 311, 'https://m.media-amazon.com/images/I/61Re3Q3BB-L.jpg', 2),
(6, 'Los 1001 años de la lengua española.', 'Antonio Al', 'Fondo de C', 2008, 'Antonio Alatorre se despoja de cualquier término técnico, prescinde de la yod y del difícil código q', 355, 'https://m.media-amazon.com/images/I/51DQbUUmdyL.jpg', 2),
(7, 'Curso de lingüística general', 'Ferdinand ', 'Fontamara', 2010, 'entre 1907 y 1911 Ferdinand de Saussure da tres cursos de lingüística general en la Universidad de G', 934, 'https://m.media-amazon.com/images/I/81TQdzbwuOL._AC_UY218_.jpg', 2),
(8, 'Mitos de la lengua', 'María de P', 'Otras Inqu', 2011, 'Este es un libro que de manera amable, entretenida y práctica, desvela muchas de las verdades de uno', 272, 'https://2.bp.blogspot.com/-aNVjs6ogYtk/U71-QGegewI/AAAAAAAAAgE/JjuSd2p8fIg/s1600/9786074571684.jpg', 2),
(9, 'Mar muerto', 'Brian Keen', 'Dolmen Edi', 2012, 'Una historia de amor entre hombres, mujeres, el mar y Iemanja contada en el puerto baiano. Un romanc', 288, 'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/nflhkaoxmbnulve8jdg4', 3),
(10, 'Eudaimonia', 'Allan Form', 'Quill', 2022, 'La historia cuenta un período de reflexión del personaje de Joshua, pero podría basarse en la vida d', 240, 'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/dm2tle41otldwcgggdkh', 3),
(11, 'Colección Distopías', 'George Orw', 'Edisur', 1949, 'la distopía de George Orwell es considerada por muchos una obra visionaria de los tiempos que nos ha', 1984, 'https://images.cdn1.buscalibre.com/fit-in/360x360/12/61/1261059b85361979d2cd74ee48133576.jpg', 4),
(12, 'Cien años de soledad', 'Gabriel Ga', 'Debolsillo', 2014, 'La novela del escritor colombiano que narra las vicisitudes de la familia Buendía a lo largo de siet', 494, 'https://images.cdn1.buscalibre.com/fit-in/360x360/3b/4d/3b4de63880402ceb3ac08823d066afe1.jpg', 4),
(13, 'La balada de Mulán', 'Mónica Rod', 'Edelvives', 2020, 'Nadie puede acudir en su lugar. El padre no tiene hijos en edad de luchar. Mulán no tiene hermanos e', 48, 'https://cdn.edelvives.es/docs/catalogo/13654/imgs/original/168125_Cub_Mulan_EvWeb.jpg', 5),
(14, 'La Odisea', 'Homero', 'ANAYA', 2012, 'Esta edición presenta la historia de Ulises en forma de cómic. Ya puede volver con su amada Penélope', 160, 'https://imagessl2.casadellibro.com/a/l/t7/02/9788467828702.jpg', 5),
(15, 'Lo único', 'Gary Kelle', 'AGUILAR', 2015, ' Gary Keller te propone que te centres en lo único, lo verdaderamente importante, para ser más produ', 336, 'https://imagessl9.casadellibro.com/a/l/t7/39/9788403014039.jpg', 6),
(16, 'Mañanas milagrosas', 'Hal Elrod', 'Rústica', 2016, 'Mañanas milagrosas promete ayudarte a despertarte cada día con más energía, motivación y concentraci', 202, 'https://panamericana.vtexassets.com/arquivos/ids/332130-800-auto?v=637003662682870000&width=800&height=auto&aspect=true', 6),
(17, 'La Ilíada', 'Homero', 'Rústica', 1895, 'La epopeya griega que cambiaría para siempre la literatura occidental fue también el primer gran poe', 544, 'https://panamericana.vtexassets.com/arquivos/ids/451770-1600-auto?v=637962644255200000&width=1600&height=auto&aspect=true', 7),
(18, 'Rimas y leyendas', 'Gustavo Ad', 'Tapa dura', 1871, 'Embajador de un romanticismo que trató de abrir a nuevas corrientes literarias, Bécquer malvivió en ', 304, 'https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6347ff766ce33d8248f89003_9788418395840.jpeg', 7),
(19, 'Después de diciembre', 'Joana Marc', 'Montana', 2022, 'Los protagonistas de Antes de diciembre, la primera parte de la saga, vuelven a encontrarse un año d', 430, 'https://imagessl7.casadellibro.com/a/l/t7/17/9788418798917.jpg', 8),
(20, 'El miedo restante', 'Clara Cort', 'Loqueleo', 2021, 'Luc Álvarez piensa que su vida es aburrida: la gente de su entorno no cambia, ni su motivación, ni s', 288, 'https://imagessl9.casadellibro.com/a/l/t7/49/9788491223849.jpg', 8),
(21, 'Un mundo feliz', 'Aldous Hux', 'DEBOLSILLO', 2003, ' La aterradora visión del mundo feliz nos descubre una sociedad que ha creído que la ciencia podía s', 256, 'https://imagessl7.casadellibro.com/a/l/t7/57/9788497594257.jpg', 9),
(22, 'Scoop', 'Evelyn Wau', 'Back Bay B', 2012, 'Esta divertida novela cuenta la historia de un periodista que es enviado a cubrir la revolución de l', 304, 'https://m.media-amazon.com/images/I/51Ipv1VElwL._SX492_BO1,204,203,200_.jpg', 10),
(23, 'Carry On, Jeeves', 'P.G. Wodeh', 'Wilder Pub', 2021, 'Este es puro humor británico clásico. La novela de Wodehouse es la historia de un aristócrata inútil', 861, 'https://m.media-amazon.com/images/I/41iYeCWdAWL.jpg', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(10) NOT NULL,
  `nombre_rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre_rol`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(10) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int(12) NOT NULL,
  `tipo_documento` enum('C.C','T.I','C.E','PEP','DNI','PA') NOT NULL,
  `numero_identidad` varchar(15) NOT NULL,
  `departamento` varchar(30) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `clave` varchar(10) NOT NULL,
  `rol_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `correo`, `telefono`, `tipo_documento`, `numero_identidad`, `departamento`, `ciudad`, `direccion`, `clave`, `rol_id`) VALUES
(1, 'Wilmara', 'Ruiz', 'wilmara_andreina93@hotmail.com', 2147483647, 'C.E', '642835', 'Cundinamarca', 'Bogota', 'Dg 16 #115-75', '1234', 1),
(2, 'Maria', 'Riaz', 'mariaDiazM@hotmail.com', 2147483647, 'C.C', '12345987', 'Cundinamarca', 'Bogota', 'Dg 16 #115-75', '4321', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_id` (`usuario_id`);

--
-- Indices de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_libros_id` (`libros_id`),
  ADD KEY `fk_compras_id` (`compras_id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categoria_id` (`categoria_id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `fk_compras_id` FOREIGN KEY (`compras_id`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `fk_libros_id` FOREIGN KEY (`libros_id`) REFERENCES `libros` (`id`);

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `fk_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_rol_id` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

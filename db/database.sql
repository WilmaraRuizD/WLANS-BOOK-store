---Creación base de datos 
CREATE DATABASE IF NOT EXISTS WLANS_BOOK ;

---------UTILIZANDO LA BASA DE DATOS
USE WLANS_BOOK;
-------Se borran las tablas si existen
DROP TABLE categoria;
DROP TABLE libros;
DROP TABLE rol;
DROP TABLE usuario;
DROP TABLE compras;

---Creación base de datos 
CREATE DATABASE IF NOT EXISTS WLANS_BOOK ;

---------UTILIZANDO LA BASA DE DATOS
USE WLANS_BOOK;
-------Se borran las tablas si existen
DROP TABLE categoria;
DROP TABLE libros;
DROP TABLE rol;
DROP TABLE usuario;
DROP TABLE compras;

-------Se crea tabla categoria
CREATE TABLE categoria(
  id INT (10) NOT NULL AUTO_INCREMENT,
  nombre_categoria VARCHAR (50) NOT NULL,
  PRIMARY KEY (id)
);

------Se incerta en la tabla categoria 
 INSERT INTO categoria(nombre_categoria)VALUES
                      ('Científicos'),
                      ('Literatura y lingüísticos'),
                      ('De viaje'),
                      ('novelas'),
                      ('literatura infantil'),
                      ('Profesional y Crecimiento personal'),
                      ('Poeticos'),
                      ('Literatura juvenil'),
                      ('Ficción'),
                      ('Comedia');

 ----Muestra el valor de la tabla                      
 SELECT * FROM categoria;

 ------Se crea tabla 

 CREATE TABLE libros(
  id INT (10) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  autor VARCHAR(50)NOT NULL,
  editorial VARCHAR(20) NOT NULL,
  ano_de_publicacion INT(10)NOT NULL,
  descripcion VARCHAR(250),
  pagina INT(10)NOT NULl,
  foto VARCHAR (250)NOT NULL,
  categoria_id INT (10) NOT NULL,
  PRIMARY KEY categoria_ (id),
 CONSTRAINT fk_categoria_id FOREIGN KEY(categoria_id)REFERENCES categoria(id)

);

DESCRIBE categoria;
DESCRIBE libros;


---cargar base de libros 
 INSERT INTO libros(nombre,autor,editorial,ano_de_publicacion,descripcion,pagina,foto,categoria_id)VALUES

 ("El origen de las especies","Charles Darwin","Editorial ",1859,"La teoría de la evolución, que se explica en el volumen, cambió el mundo para siempre",696,"https://m.media-amazon.com/images/I/61ka1h-XjNL._SL500_.jpg",1),
 ("The Feynman Lectures on Physics","Richard Feynman","BasicBooks",2011,"es un conjunto de libros sobre física basado en las conferencias de Richard P. Feynman, premio Nobel de física",1552,"https://images.cdn3.buscalibre.com/fit-in/360x360/f2/db/f2db2b4758f73909ac0e4ae0562b55bb.jpg",1),
 ("Cosmo","Carl Sagan","Editorial Planeta",12,"Cosmos es uno de los libros más famosos de Carl Sagan, y está basado en su archiconocida serie Cosmos: un viaje personal, que él mismo produjo con su esposa Ann Druyan",384,"https://images.cdn2.buscalibre.com/fit-in/360x360/b6/43/b64396bfa3dff8754439f8127768507c.jpg",1),
 ("El gen egoísta","Richard Dawkins","Edición en Español ",1990,"Dawkins expone su idea del gen egoísta como vehículo para explicar cuál es el sujeto de la evolución natural.",424,"https://m.media-amazon.com/images/I/41+p4Z1VHHL._SX313_BO1,204,203,200_.jpg",1),
("Pensar rápido, pensar despacio","Daniel Kahneman","DEBATE",2012," Este libro reúne décadas de investigación del autor en colaboración con el psicólogo Amos Tversky.",825,"https://m.media-amazon.com/images/I/41O0Fp-pW3L.jpg",1),
("Cinco mil años de palabras","Carlos Prieto","Fondo de Cultura Económica",2005,"Cómo salimos del silencio? Este y otros interrogantes fluyen como una constante en esta minuciosa investigación, que ofrece un enfoque panorámico sobre el estudio de las lenguas.",311,"https://m.media-amazon.com/images/I/61Re3Q3BB-L.jpg",2)
("La lengua española en México"," José G. Moreno de Alba"," Fondo de Cultura Económica",2003,"Esta obra reúne artículos relativos al lenguaje y, sobre todo, a la lengua española, en particular a la hablada y escrita en México",2612,"https://m.media-amazon.com/images/I/51gRZgn2GcL.jpg",2),
("Los 1001 años de la lengua española.","Antonio Alatorre","Fondo de Cultura Económica",2008,"Antonio Alatorre se despoja de cualquier término técnico, prescinde de la yod y del difícil código que sólo entienden los lingüistas para platicarnos, como en una charla de café, la historia de la lengua española. ",355,"https://m.media-amazon.com/images/I/51DQbUUmdyL.jpg",2),
("Curso de lingüística general","Ferdinand de Saussure","Fontamara",2010,"entre 1907 y 1911 Ferdinand de Saussure da tres cursos de lingüística general en la Universidad de Ginebra que supondrían, prácticamente, y en líneas generales, el nacimiento de la lingüística contemporánea",934,"https://m.media-amazon.com/images/I/81TQdzbwuOL._AC_UY218_.jpg",2),
("Mitos de la lengua","María de Pilar Montes de Oca Sicilia","Otras Inquisiciones",2011,"Este es un libro que de manera amable, entretenida y práctica, desvela muchas de las verdades de uno de los más importantes recursos que tiene el hombre para enfrentarse al mundo que le rodea",272,"https://2.bp.blogspot.com/-aNVjs6ogYtk/U71-QGegewI/AAAAAAAAAgE/JjuSd2p8fIg/s1600/9786074571684.jpg",2),
("Mar muerto","Brian Keene","Dolmen Editorial",2012,"Una historia de amor entre hombres, mujeres, el mar y Iemanja contada en el puerto baiano. Un romance para profundizar en las raices culturales brasileras, escrito  por el escritor más baiano. ",288,"https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/nflhkaoxmbnulve8jdg4",3),
("Eudaimonia","Allan Formigoni","Quill",2022,"La historia cuenta un período de reflexión del personaje de Joshua, pero podría basarse en la vida de muchas personas: descontento con el trabajo, ausencia de propósito en la vida, búsqueda de profundizar en la razón de esta infelicidad y cómo superarla.",240,"https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/dm2tle41otldwcgggdkh",3),
("Colección Distopías","George Orwell, Ray Bradbury, Aldous Huxley, George Orwell","Edisur",1949,"la distopía de George Orwell es considerada por muchos una obra visionaria de los tiempos que nos ha tocado vivir. Aborda temas como la manipulación de la información, la vigilancia masiva ",1984,"https://images.cdn1.buscalibre.com/fit-in/360x360/12/61/1261059b85361979d2cd74ee48133576.jpg",4),
("Cien años de soledad","Gabriel García Márquez","Debolsillo",2014,"La novela del escritor colombiano que narra las vicisitudes de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo es considerado por muchos la mejor novela de todos los tiempos",494,"https://images.cdn1.buscalibre.com/fit-in/360x360/3b/4d/3b4de63880402ceb3ac08823d066afe1.jpg",4),
("La balada de Mulán","Mónica Rodríguez Suárez","Edelvives",2020,"Nadie puede acudir en su lugar. El padre no tiene hijos en edad de luchar. Mulán no tiene hermanos en edad de luchar. El hijo varón es aún muy pequeño. Son estas circunstancias las que llevan a una joven fuerte y valiente a tomar la decisión de escaparse de casa disfrazada de hombre para luchar por su padre.",48,"https://cdn.edelvives.es/docs/catalogo/13654/imgs/original/168125_Cub_Mulan_EvWeb.jpg",5),
("La Odisea","Homero","ANAYA",2012,"Esta edición presenta la historia de Ulises en forma de cómic. Ya puede volver con su amada Penélope y su hijo Telémaco porque la Guerra de Troya ha terminado",160,"https://imagessl2.casadellibro.com/a/l/t7/02/9788467828702.jpg",5),
("Lo único","Gary Keller","AGUILAR",2015," Gary Keller te propone que te centres en lo único, lo verdaderamente importante, para ser más productivo. La pregunta que te quiere ayudar a responder es: ¿Qué es Lo único que podrías hacer ahora que haría que todo lo demás fuera más fácil o innecesario?",336,"https://imagessl9.casadellibro.com/a/l/t7/39/9788403014039.jpg",6),
("Mañanas milagrosas","Hal Elrod","Rústica",2016,"Mañanas milagrosas promete ayudarte a despertarte cada día con más energía, motivación y concentración para que tu vida suba de nivel.",202,"https://panamericana.vtexassets.com/arquivos/ids/332130-800-auto?v=637003662682870000&width=800&height=auto&aspect=true",6),
("La Ilíada","Homero","Rústica",1895,"La epopeya griega que cambiaría para siempre la literatura occidental fue también el primer gran poema de nuestras letras ",544,"https://panamericana.vtexassets.com/arquivos/ids/451770-1600-auto?v=637962644255200000&width=1600&height=auto&aspect=true",7),
("Rimas y leyendas","Gustavo Adolfo Bécquer","Tapa dura",1871,"Embajador de un romanticismo que trató de abrir a nuevas corrientes literarias, Bécquer malvivió en Madrid durante gran parte de su vida sin ver parte de su obra publicada",304,"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6347ff766ce33d8248f89003_9788418395840.jpeg",7),
("Después de diciembre","Joana Marcús","Montana",2022,"Los protagonistas de Antes de diciembre, la primera parte de la saga, vuelven a encontrarse un año después de su ruptura y deberán enfrentarse a sus sentimientos.",430,"https://imagessl7.casadellibro.com/a/l/t7/17/9788418798917.jpg",8),
("El miedo restante","Clara Cortés","Loqueleo",2021,"Luc Álvarez piensa que su vida es aburrida: la gente de su entorno no cambia, ni su motivación, ni su trabajo en la cafetería Café Actually, propiedad de Nick, un joven enamorado del cine que aspira a convertirse en guionista",288,"https://imagessl9.casadellibro.com/a/l/t7/49/9788491223849.jpg",8),
("Un mundo feliz","Aldous Huxley","DEBOLSILLO",2003," La aterradora visión del mundo feliz nos descubre una sociedad que ha creído que la ciencia podía solucionar todos sus problemas, desde la lucha de clases al sentido de la vida; pero sólo ha creado una ilusión que necesita del consumo, el sexo recreativo y la droga para no desmoronarse.",256,"https://imagessl7.casadellibro.com/a/l/t7/57/9788497594257.jpg",9),
("Scoop","Evelyn Waugh","Back Bay Books", 2012,"Esta divertida novela cuenta la historia de un periodista que es enviado a cubrir la revolución de los estados balcánicos, el problema es que se queda dormido en el tren y termina en el lugar equivocado, pero no deja que eso lo detenga.",304,"https://m.media-amazon.com/images/I/51Ipv1VElwL._SX492_BO1,204,203,200_.jpg",10),
("Carry On, Jeeves","P.G. Wodehouse","Wilder Publications",2021,"Este es puro humor británico clásico. La novela de Wodehouse es la historia de un aristócrata inútil, llamado Wooster, y su mayordomo cuidador, Jeeves, quienes constantemente se meten en problemas por culpa del primero",861,"https://m.media-amazon.com/images/I/41iYeCWdAWL.jpg",10);



 ----Muestra el valor de la tabla                      
 SELECT * FROM libros;

 ---Crea la tabla usuario 

CREATE TABLE rol(
  id INT(10) NOT NULL AUTO_INCREMENT,
  nombre_rol VARCHAR (10) NOT NULL,
  PRIMARY KEY (id)
);

DESCRIBE rol;

 INSERT INTO rol(nombre_rol)VALUES
                ('admin'),
                ('user');

 ----Muestra el valor de la tabla                      
 SELECT * FROM rol;

  -------Se crea tabla 
CREATE TABLE usuario(
  id INT (10) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  apellido VARCHAR(10) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  telefono INT(12)NOT NULL,
  tipo_documento ENUM('C.C', 'T.I', 'C.E', 'PEP', 'DNI', 'PA')NOT NULL,
  numero_identidad VARCHAR (15)NOT NULL,
  departamento VARCHAR (30)NOT NULL,
  ciudad VARCHAR (50)NOT NULL,
  direccion VARCHAR (50)NOT NULL,
  clave VARCHAR(10) NOT NULL,
  rol_id INT (10) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_rol_id FOREIGN KEY(rol_id)REFERENCES rol(id)
);

DESCRIBE usuario;

DESCRIBE usuario;
--Insertar usuario pendiente. 

DESCRIBE usuario;

 INSERT INTO usuario(nombre,apellido,correo,telefono,tipo_documento,numero_identidad,departamento,ciudad,direccion,clave,rol_id)VALUES
               ('Wilmara','Ruiz','wilmara_andreina93@hotmail.com','3243678428','C.E','642835','Cundinamarca','Bogota','Dg 16 #115-75','1234',1),
               ('Maria','Riaz','mariaDiazM@hotmail.com','6012345786','C.C','12345987','Cundinamarca','Bogota','Dg 16 #115-75','4321',2);


 ----Muestra el valor de la tabla                      
 SELECT * FROM usuario;

CREATE TABLE compras(
  id INT(10) NOT NULL
  AUTO_INCREMENT,
  date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  valor_total DECIMAL(11,2) NOT NULL,
  estado VARCHAR (50)NOT NULL,
   usuario_id INT (10) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_usuario_id FOREIGN KEY(usuario_id)REFERENCES usuario(id)
);
DESCRIBE compras;

CREATE TABLE detalle_compra(
  id INT(10)NOT NULL AUTO_INCREMENT,
  cantidad INT(10)NOT NULL,
  sub_total  DECIMAL(13,2) NOT NULL,
  libros_id INT (10) NOT NULL,
  compras_id INT (10) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_libros_id FOREIGN KEY(libros_id)REFERENCES libros(id),
  CONSTRAINT fk_compras_id FOREIGN KEY(compras_id)REFERENCES compras(id)
);

DESCRIBE detalle_compra;

SELECT * FROM libros WHERE id=1;
SELECT * FROM libros WHERE categoria_id=1;


CREATE TABLE anuncios(
  id INT(10) NOT NULL AUTO_INCREMENT,
  images VARCHAR (100),
  detalle VARCHAR(50),
  fecha_inicio DATE NOT NULL,
  hora_inicio  TIME NOT NULL,
  fecha_fin DATE NOT NULL,
  hora_fin DATE NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM anuncios;


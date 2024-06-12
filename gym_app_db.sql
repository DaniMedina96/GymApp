
CREATE DATABASE gymAppDB;

USE gymAppDB;

CREATE TABLE `ejercicios` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(255),
  `grupo_muscular` INTEGER,
  `descripcion` VARCHAR(255),
  `imagen` VARCHAR(255)
);

CREATE TABLE `grupos_musculares` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(255),
  `cod` VARCHAR(255)
);

CREATE TABLE `rel_rutina_ejercicio` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `idRutina` INTEGER,
  `idEjercicio` INTEGER
);

CREATE TABLE `rel_rutina_usuario` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `idRutina` INTEGER,
  `idUsuario` INTEGER
);

CREATE TABLE `rel_planing_rutina` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `idplaning` INTEGER,
  `idRutina` INTEGER,
  `dia` VARCHAR(255)
);

CREATE TABLE `rutinas` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(255),
  `creador` INTEGER,
  `amateur` BOOL
);

CREATE TABLE `planing` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `usuario` INTEGER
);

CREATE TABLE `usuario` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(255),
  `rol` INTEGER,
  `password` VARCHAR(255),
  `correo` VARCHAR(255) UNIQUE,
  `activo` BOOL
  
);

CREATE TABLE datos_usuario (
  idUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
  peso DOUBLE,
  altura DOUBLE,
  edad INTEGER,
  genero ENUM('masculino', 'femenino')
);


CREATE TABLE `roles` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(255)
);

ALTER TABLE `rel_rutina_ejercicio` ADD FOREIGN KEY (`idRutina`) REFERENCES `rutinas` (`id`);
ALTER TABLE `rel_rutina_ejercicio` ADD FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicios` (`id`);

ALTER TABLE `rel_planing_rutina` ADD FOREIGN KEY (`idplaning`) REFERENCES `planing` (`id`);
ALTER TABLE `rel_planing_rutina` ADD FOREIGN KEY (`idRutina`) REFERENCES `rutinas` (`id`);

ALTER TABLE `rel_rutina_usuario` ADD FOREIGN KEY (`idRutina`) REFERENCES `rutinas` (`id`);
ALTER TABLE `rel_rutina_usuario` ADD FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);

ALTER TABLE `usuario` ADD CONSTRAINT usuario_roles_FK FOREIGN KEY (`rol`) REFERENCES roles(id);
ALTER TABLE  `datos_usuario` ADD CONSTRAINT fk_usuario FOREIGN KEY (`idUsuario`) REFERENCES usuario(`id`);



ALTER TABLE `ejercicios` ADD FOREIGN KEY (`grupo_muscular`) REFERENCES `grupos_musculares` (`id`);

ALTER TABLE `rutinas` ADD FOREIGN KEY (`creador`) REFERENCES `usuario` (`id`);

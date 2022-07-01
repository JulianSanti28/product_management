# Instrucciones base de datos.
## _Lea atentamente_

- Crear una base de datos en MySQL llamada crud_usuarios
- Crear una tabla llamada users. A contunuación encontrará el script
- Verificar nombre y usuario de la BD además que esté corriendo en el puerto 3306

## BD

Cree una tabla dentro de la base de datos con el nombre dado con la siguiente estructura
```sh
CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `rol` varchar(255)
);
  CREATE TABLE `products` (
    `id` int(11) NOT NULL PRIMARY KEY auto_increment,
    `nombre` varchar(255) NOT NULL,
    `costo_presupuestado` decimal(19,4),
    `costo_real` decimal(19,4),
    `nota_adicional` varchar(255) 
    
  );

CREATE TABLE `store` (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `nombre` varchar(255) NOT NULL,
  `nombre_sucursal` varchar(255),
   `direccion` varchar(255) NOT NULL,
   `ciudad` varchar(255) NOT NULL,
   `region` varchar(255) NOT NULL,
   `estado` varchar(255),
   `user_id` int(11),
   CONSTRAINT fk_usuario_tienda FOREIGN KEY (`user_id`) REFERENCES `users` (id)
);

CREATE TABLE `products_list` (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `nombre` varchar(255) NOT NULL,
   `user_id` int(11),
    CONSTRAINT fk_usuario  FOREIGN KEY (`user_id`) REFERENCES `users` (id)
);

CREATE TABLE `products_in_list` ( 
  `id_pl` int(11) NOT NULL PRIMARY KEY auto_increment,
  `id_product` int(11) NOT NULL, 
  `id_list` int(11) NOT NULL, 
  `id_store` int(11) NOT NULL, 
  `comprado` varchar(5) DEFAULT 'FALSE', 
  CONSTRAINT fk_product FOREIGN KEY (`id_product`) REFERENCES `products` (id), 
  CONSTRAINT fk_list FOREIGN KEY (`id_list`) REFERENCES `products_list` (id), 
  CONSTRAINT fk_store FOREIGN KEY (`id_store`) REFERENCES `store` (id) );

```

## Ejecutar

Ejecute el proyecto estando en la raíz con el siguiente comando
```sh
node index.js
```

### La información de la BD y nombre de la tabla pueden ser otros, sin embargo tendrá que modificar el archivo app.js en la parte de configuración MySQL

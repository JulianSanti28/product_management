//Requerir express, path, morgan y mysql
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express();
//Importar las rutas las cuales se encuentran en el archivo routes\users.js
const usersRoutes = require('./routes/User');
const productsRoutes = require('./routes/Products');
const productsListRoutes = require('./routes/List'); 
const storeRoutes = require('./routes/Store');
const listProductsRoutes = require('./routes/ListProducts');
//const productInListRoutes = require('./routes/list_products');
//Configuración de Express
//Tome un puerto del SO, si no existe, tome el puerto 3000
app.set('port', process.env.PORT || 3000);
//Middlewares
//Mostrar cuando llega una petición a una ruta
app.use(morgan('dev'));
app.use(express.json());
app.use(myConnection(mysql, { //Conectando BD
    host : 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database : 'crud_usuarios'
},'single'));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use('/user', usersRoutes);
app.use('/product', productsRoutes);
app.use('/list', productsListRoutes);
app.use('/store', storeRoutes);
app.use('/list_products', listProductsRoutes);
//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log('Server started on port 3000');
});




let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const productsInListController = {};

productsInListController.crear = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        conn.query('INSERT INTO products_in_list set ?', [data], (err, product) => {
            if(err){
                res.json(err);
            }
            respuesta.product = {
                nombre : data.id_product,
                usuario: data.id_list,
                cantidad: data.comprado
            }
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Producto agregado a la lista exitosamente';
            res.json(respuesta);
        });
    }
);
}

productsInListController.listarPorId = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        conn.query('SELECT id, nombre, costo_presupuestado, costo_real, nota_adicional, comprado FROM products_in_list JOIN products ON products.id = products_in_list.id_product WHERE id_list =  ?', [id], (err, products) => {
            if(err){
                res.json(err);
            }
            respuesta.products = products;
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Productos de la lista';
            res.json(respuesta);
        });
    }
);
}

productsInListController.actualizar = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        conn.query('UPDATE products_in_list set comprado = ? WHERE id_product = ?', [data.comprado, data.id], (err, product) => {
            if(err){
                res.json(err);
            }
            respuesta.product = {
                nombre : data.id_product,
                usuario: data.id_list,
                cantidad: data.comprado
            }
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Producto actualizado exitosamente';
            res.json(respuesta);
        });
    }
);
}

module.exports = productsInListController;
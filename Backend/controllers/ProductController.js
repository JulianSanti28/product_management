
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const productController = {}

productController.listar = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if (err) {
            respuesta.error = true;
            respuesta.codigo = 500;
            respuesta.mensaje = 'Error interno del servidor';
            res.status(500).json(respuesta);
        } else {
            conn.query('SELECT * FROM products WHERE user_id = ?', [id], (err, productos) => {
                if (err) {
                    respuesta.error = true;
                    respuesta.codigo = 500;
                    respuesta.mensaje = 'Error interno del servidor';
                    res.status(500).json(respuesta);
                } else {
                    respuesta.error = false;
                    respuesta.codigo = 200;
                    respuesta.mensaje = 'Productos encontrados';
                    respuesta.products = productos;
                    res.status(200).json(respuesta);
                }
            });
        }
    });
}
productController.crear = (req, res) => {
   console.log(req.body);
   const data = req.body;
   req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        conn.query('INSERT INTO products set ?', [data], (err, product) => {
            respuesta.producto = {
                nombre : data.name,
                costo_presupuestado: data.email,
                costo_real : data.costo_presupuestado,
                nota_adicional : data.nota_adicional
            }
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Producto creado correctamente';
            res.json(respuesta);
        });
    })
}

module.exports = productController;